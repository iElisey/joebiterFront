<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex align-items-center">
        <div class="w-100">
          <h2>{{ user.username }}</h2>
        </div>
        <div class="ms-3">
          <button @click="changeSubscribe()" v-if="user.id !== currentUser.id" class="btn " :class="isMeSubscriber?'btn-danger':'btn-outline-primary'">
            {{ isMeSubscriber ? 'Unsubscribe' : 'Subscribe' }}
          </button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <dl class="row mb-0">
        <dt class="col-sm-4"> Підписники</dt>
        <dd class="col-sm-8" role="button">{{ user.subscribers.length }}</dd>
        <dt class="col-sm-4">Підписаний</dt>
        <dd class="col-sm-8" role="button">{{ user.subscriptions.length }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserCard",
  props: ["user"],
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    isMeSubscriber() {
      return this.user.subscribers && this.user.subscribers.find(subscription => {
        console.log(subscription + ' ' + this.currentUser.id)
        return subscription.id === this.currentUser.id;
      })
    },

  },

  methods: {
    changeSubscribe() {
      this.$store.dispatch('profile/changeSubscribe', this.user.id);
    },
  }

}
</script>

<style scoped>

</style>