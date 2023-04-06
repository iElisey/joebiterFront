<template>
  <div class="card" v-if="message">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex card-header pb-0 gap-3">
        <div class="mb-auto">
          <UserPicture :object="message"/>
        </div>
        <div>
          <div>
            <h5 role="button" @click="$router.push(`/profile/${message.author.id}`)" class="card-title">{{ message.author.username }}</h5>
          </div>
        </div>
      </div>
      <div class="d-flex gap-3 card-header pb-0">
        <b-button class="rounded" variant="none" size="sm"><b-icon icon="three-dots-vertical"/></b-button>
      </div>
    </div>
    <div class="card-body">
      <p role="button" style="white-space: pre-wrap" class="card-text" @click="$router.push(`/message/${message.id}`)">{{ message.text }}</p>
    </div>
    <div class="card-footer">
      <h6 class="card-title">Comments</h6>
      <comment-list :message="message"/>
    </div>
  </div>
  <b-spinner v-else/>
</template>

<script>
import CommentList from "@/components/comment/CommentList.vue";
import UserPicture from "@/components/profile/UserPicture.vue";

export default {
  name: "MessagePage",
  components: {UserPicture, CommentList},
  computed:{
    message() {
      return this.$store.state.message.message;

    },
  },
  mounted() {
    this.getMessage(this.$route.params.id)
  },
  methods: {
    getMessage(id) {
      this.$store.dispatch('message/setMessage', id);

    },
    formatCreatedAt(created_at) {
      const now = new Date();
      const createdAt = new Date(created_at);
      const timeDiff = now.getTime() - createdAt.getTime();
      const seconds = Math.round(timeDiff / 1000);
      const minutes = Math.round(seconds / 60);
      const hours = Math.round(minutes / 60);

      if (seconds < 60) {
        return 'now';
      } else if (minutes < 60) {
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
      } else if (hours < 24) {
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
      } else if (timeDiff < 365 * 24 * 60 * 60 * 1000) { // less than 1 year ago
        return createdAt.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
      } else {
        return createdAt.toLocaleDateString('en-US');
      }
    },
  }
}
</script>
