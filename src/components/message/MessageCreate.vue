<template>
  <div class="mb-3" >
    <div class="d-flex" v-if="currentUser">
      <div class="w-100">
        <textarea v-model="text" class="form-control" id="messageText" placeholder="Create message"></textarea>
      </div>
      <div class="ms-3">
        <button  @click="create" :disabled="!text || text.trim()===''" class="btn btn-primary  text-nowrap">Add Message</button>
      </div>
    </div>
    <div class="text-center" v-else>
      <h4 class="h4">For creating messages you must be authorized</h4>
      <button class="btn btn-primary" @click="$router.push('/login')">Login</button>
    </div>
  </div>

</template>

<script>

export default {
  name: "MessageCreate",
  data() {
    return {
      text: '',
    }
  },
  computed:{
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    async create() {
      await this.$store.dispatch('messages/createMessage', {text:this.text})
      this.text = '';
    },
  }

}
</script>

<style scoped>

</style>