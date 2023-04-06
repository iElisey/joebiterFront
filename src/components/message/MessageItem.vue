<template>
  <div class="card">
    <div class="d-flex p-2 pb-0">
      <div class="mb-auto">
        <UserPicture :object="message"/>
      </div>
      <div class="col-10">
        <div class="card-body pt-0">
          <h5 role="button" @click="$router.push(`/profile/${message.author.id}`)" class="card-title">{{ message.author.username }}</h5>
          <p role="button" style="white-space: pre-wrap" class="card-text" @click="$router.push(`/message/${message.id}`)">{{ message.text }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import MessageService from "@/service/message.service";
import UserPicture from "@/components/profile/UserPicture.vue";

export default {
  name: "MessageItem",
  components: {UserPicture},
  props: ["message"],
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    remove() {
      MessageService.delete(this.message.id);
    },
  }
}
</script>

<style scoped>

</style>