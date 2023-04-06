<template>
  <div>
    <div class="d-flex me-3">
      <input v-model="query" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" @click="search">Search</button>
    </div>
    <!--    <b-collapse class=" b-collapse" id="collapse-1" >-->
    <!--      <b-card>-->
    <!--        <b-card-title>Result</b-card-title>-->
    <!--        <div v-for="(i, key) in 10" :key="key">Message</div>-->
    <!--      </b-card>-->

    <!--    </b-collapse>-->
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      query: '',

    }
  },
  methods: {
    async search() {
      await this.$router.push({path: '/search', query: {q: this.query}}).catch(() => {
      });
    },
  }
}
</script>

<style scoped>

</style>