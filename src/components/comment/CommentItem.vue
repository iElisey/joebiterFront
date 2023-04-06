<template>

  <div class="d-flex mb-2">
    <div class="card w-100">
      <div class="d-flex p-2 pb-0">

        <div class="mb-auto">
          <user-picture :object="comment"/>
        </div>
        <div class="col-10">
          <div class="card-body pt-0">
            <h5 role="button" @click="$router.push(`/profile/${comment.author.id}`)" class="card-title">
              {{ comment.author.username }}</h5>
            <p role="button" style="white-space: pre-wrap" class="card-text"
               @click="$router.push(`/message/${comment.id}`)">{{ comment.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="currentUser && currentUser.id==comment.author.id" class="ms-3">
      <button @click="remove" class="btn btn-danger text-nowrap">Delete</button>
    </div>
  </div>

</template>

<script>
import UserPicture from "@/components/profile/UserPicture.vue";

export default {
  name: "CommentItem",
  components: {UserPicture},
  props: ["comment"],
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    remove() {
      this.$store.dispatch('message/deleteComment', this.comment.id)
    },
  }
}
</script>

<style scoped>

</style>