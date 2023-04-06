<template>

  <div class="row g-3" v-if="messages">
    <div class="col-12">

    </div>
    <div class="col-lg-8" v-for="(message,key) in messages" :key="key">
      <message-item :message="message"/>
    </div>
  </div>
</template>

<script>

import MessageItem from "@/components/message/MessageItem.vue";

export default {
  name: 'MessageList',
  components: {MessageItem},
  props: ["messages"],


}

</script>
