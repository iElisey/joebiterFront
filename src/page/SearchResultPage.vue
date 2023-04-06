<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">
          Result
        </h6>
      </div>
      <div class="card-body">
        <message-list v-if="result && result.length>=0 && !loading" :messages="result"/>
        <b-spinner v-else-if="loading"/>
      </div>
    </div>
  </div>
</template>

<script>
import MessageService from "@/service/message.service";
import MessageList from "@/components/message/MessageList.vue";

export default {
  name: "SearchResultPage",
  components: {MessageList},
  data() {
    return {
      result: null,
      loading: true,
    }
  },
  watch: {
    '$route'() {
      this.findByQuery(this.$route.query.q);
    },
  },
  mounted() {
    this.findByQuery(this.$route.query.q);
  },
  methods: {
    async findByQuery(query) {
      this.loading = true

      await MessageService.findByQuery(query, 0, 10).then(response => this.result = response.data.content);
      this.loading = false
    },
  }
}
</script>

<style scoped>

</style>