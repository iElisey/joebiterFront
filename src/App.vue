<template>
  <div id="app">
    <nav v-if="loadedUser && !error" class="navbar navbar-expand bg-body-tertiary border-bottom">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            Home
          </router-link>
        </li>
        <li v-if="!currentUser" class="nav-item">
          <router-link to="/register" class="nav-link">
            Sign Up
          </router-link>
        </li>
        <li v-if="!currentUser" class="nav-item">
          <router-link to="/login" class="nav-link">
            Login
          </router-link>
        </li>
        <li v-if="currentUser" class="nav-item">
          <router-link to="/profile" class="nav-link">
            {{ currentUser.username }}
          </router-link>
        </li>
        <li v-if="currentUser" class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            LogOut
          </a>
        </li>
      </ul>
      <SearchComponent/>
    </nav>
    <div class="container mt-3 mb-3">
      <div v-if="loadedUser">
        <div v-if="!error">
          <router-view/>
        </div>
        <div v-else>
          <div class="alert alert-danger">
            {{ error }}
          </div>
        </div>
      </div>
      <div v-else>
        <b-spinner/>
      </div>
    </div>


  </div>
</template>

<script>


import SearchComponent from "@/components/search/SearchComponent.vue";

export default {
  name: 'App',
  components: {SearchComponent},
  data() {
    return {
      loadedUser: false,
      error: null,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },


  async created() {
    await this.$store.dispatch('auth/getAuthentication')
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          if (error.code === 'ERR_NETWORK') {
            this.error = 'Error when sending request to API!'
          }
        })
    this.loadedUser = true;
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }

}
</script>

