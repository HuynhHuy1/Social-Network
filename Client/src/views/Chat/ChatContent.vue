<template lang="">
  <div class="w-2/3 h-screen p-4">
    <!-- header -->
    <header class="flex justify-between pb-2 items-center w-full border-b border-gray-400 h-customHeight">
      <div class="flex">
        <div class="w-12 h-12 mr-3">
          <img src="../../assets/image/user.png" alt="">
        </div>
        <div>
          <h3 class="text-xl font-bold">Elmer Laverty</h3>
          <div class="flex gap-1 items-center">
            <p class="bg-green-500 w-2 h-2 rounded-full"></p>
            <p class="font-bold text-gray-400">Online</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-3 items-center bg-customBlue w-24 h-11 rounded-lg cursor-pointer">
        <span class="text-[#615EF0] font-semibold text-lg">Call</span>
        <PhoneFilled class="text-[#615EF0]" />
      </div>
    </header>

    <!-- content -->
    <div class="w-full h-4/5 pt-4">
      <MessageItem/>
    </div>
    <!-- footer -->
    <div class="w-full h-customHeight p-6 flex items-center">
      <MessageSend />
    </div>
  </div>
</template>

<script>
import { PhoneFilled } from '@ant-design/icons-vue';
import MessageSend from "../../components/Item/MessageSend.vue";
import MessageItem from '../../components/Item/MessageItem.vue'

export default {
  components: {
    PhoneFilled,
    MessageSend,
    MessageItem
  }
}
</script>

<style lang="">
  
</style>
