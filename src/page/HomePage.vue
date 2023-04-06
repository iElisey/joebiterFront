<template>
  <div>
    <message-create/>
    <div class="row">
      <div class="col">
        <message-list v-if="messages" :messages="messages"/>
        <b-spinner v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import MessageList from "@/components/message/MessageList.vue";
import MessageCreate from "@/components/message/MessageCreate.vue";

export default {
  name: "HomePage",
  components: {MessageCreate, MessageList},
  mounted() {
    this.loadMessages();
  },

  computed: {
    messages() {
      return this.$store.state.messages.messages;
    },
  },
  methods: {
    loadMessages() {
      this.$store.dispatch('messages/getMessages')
    },

  }
}
</script>

<style scoped>

</style>