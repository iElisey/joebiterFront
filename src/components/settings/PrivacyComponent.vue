<template>
  <div class="container">
    <div class="row mb-4 gy-4">
      <div class="col-lg-6 col-12">
        <div class="card">
          <div class="card-header"><h4 class="mb-0">Ваши данные</h4><span>Информация об аккаунте</span></div>
          <div class="card-body">
            <dl class="row mb-0">
              <dt class="col-sm-4">Ник</dt>
              <dd class="col-sm-8 user-select-all">{{ currentUser.username }}</dd>
              <dt class="col-sm-4">Email</dt>
              <dd class="col-sm-8" @click="showEmail=!showEmail" role="button">{{ email }}</dd>
              <dt class="col-sm-4">Регистрация</dt>
              <dd class="col-sm-8">14.10.2017</dd>
            </dl>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyComponent',
  data() {
    return {
      showEmail: false
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    email() {
      if (this.showEmail) {
        return this.currentUser.email;
      } else {
        return this.currentUser.email.replace(/(?<=.)[^@]*(?=@)/g, (match) => '*'.repeat(match.length));
      }
    },
  },
  mounted() {
    console.log(this.currentUser)
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },

};
</script>
