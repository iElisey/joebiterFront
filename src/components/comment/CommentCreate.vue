<template>
  <div class="d-flex mb-2" v-if="currentUser">
    <div class="w-100">
      <textarea v-model="text" placeholder="Create comment" class="form-control" id="messageText"></textarea>
    </div>
    <div class="ms-3">
      <button :disabled="!text || text.trim()===''" @click="create" class="btn btn-primary  text-nowrap">Add Comment</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "CommentCreate",
  props: ["messageId"],
  data() {
    return {
      text: '',
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },

  methods: {
    async create() {
      let comment = {messageId: this.messageId, text: this.text}
      await this.$store.dispatch('message/addComment', comment);
      this.text=''
    },
  }
}
</script>

<style scoped>

</style>