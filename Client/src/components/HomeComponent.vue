<template>
  <div class="flex ">
    <UsersChat />
    <ChatContent />
  </div>
</template>

<script>
import UsersChat from '../views/Chat/UsersChat.vue';
import ChatContent from '../views/Chat/ChatContent.vue';

export default {
  components: {
    UsersChat,
    ChatContent
  }
}
</script>

<style lang="">
  
</style>
