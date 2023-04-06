<template>
  <div>
    <b-spinner v-if="!profile"/>
    <div class="row" v-if="profile">
      <div class="col-12">
        <UserCard :user="profile"/>
        <b-tabs pills fill content-class="mt-3" class="mt-2">
          <b-tab title="Messages" active>
            <message-list :messages="profile.messages"/>
          </b-tab>
          <b-tab title="Liked messages" disabled>
            <message-list :messages="profile.messages"/>

          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/profile/UserCard.vue";
import MessageList from "@/components/message/MessageList.vue";

export default {
  name: "ProfilePage",
  components: {MessageList, UserCard},
  watch: {
    '$route'(newRoute, oldRoute) {
      if (newRoute !== oldRoute) {
        this.getProfile();
      }
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    profile() {
      return this.$store.state.profile.profile;
    },
  },
  mounted() {
    this.getProfile()
  },
  methods: {

    async getProfile() {
      let id;
      if (!this.$route.params.id && this.currentUser) {
        id = this.currentUser.id;
      } else {
        id = this.$route.params.id;
      }
      await this.$store.dispatch('profile/getProfile', id)

    },
  }
}
</script>

<style scoped>

</style>