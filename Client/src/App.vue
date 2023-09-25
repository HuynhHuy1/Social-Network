<template>
  <div class="flex flex-row-reverse relative justify-center items-center" >
    <ChatContent/>
    <UsersChat/>


  </div>
</template>

<script>
import ChatContent from './components/Chat/ChatContent.vue';
import UsersChat from './components/Chat/UsersChat.vue';

export default {
  components: {
    ChatContent,
    UsersChat,
  }
}
</script>

<style>

</style>
