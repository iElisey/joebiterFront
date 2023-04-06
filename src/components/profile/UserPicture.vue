<template>
  <img role="button" @click="$router.push(`/profile/${object.author.id}`)" style="width: 50px; height:50px"
       src="https://fireart.studio/wp-content/uploads/2019/02/2.png"
       class="card-img rounded-5"
       alt="User Picture">
</template>
<script>
export default {
  name: 'UserPicture',
  props: ["object"]
}
</script>