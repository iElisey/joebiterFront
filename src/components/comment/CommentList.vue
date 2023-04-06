<template>
<div>
  <comment-create :message-id="message.id" />
  <comment-item :comment="comment" v-for="(comment, key) in message.comments" :key="key"/>
</div>
</template>

<script>
import CommentItem from "@/components/comment/CommentItem.vue";
import CommentCreate from "@/components/comment/CommentCreate.vue";

export default {
  name: "CommentList",
  components: {CommentCreate, CommentItem},
  props: ["message"],

}
</script>

<style scoped>

</style>