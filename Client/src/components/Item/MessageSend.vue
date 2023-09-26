<template lang="">
  <div class="text-2xl pr-6">
    <PaperClipOutlined class="relative -top-1 cursor-pointer" />
  </div>
  <div class="flex justify-between w-full border border-gray-300 rounded-xl truncate">
    <input class="w-full h-12 pl-5 pr-5 outline-0" type="text" placeholder="Type a message">
    <SendOutlined class="relative top-2.5 right-7 text-xl cursor-pointer" />
  </div>
</template>

<script>
import { PaperClipOutlined } from '@ant-design/icons-vue';
import { SendOutlined } from '@ant-design/icons-vue';


export default {
  components: {
    PaperClipOutlined,
    SendOutlined
  }
}
</script>

<style lang="">
  
</style>
