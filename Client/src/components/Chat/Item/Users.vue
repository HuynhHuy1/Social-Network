<!-- eslint-disable vue/multi-word-component-names -->
<template lang="">        
  <div class="flex">
    <div class="w-16 h-12 mr-6">
      <img class="rounded-lg" src="../../../assets/image/user.png" alt="">
    </div>
    <div class="w-full">
      <div class="flex justify-between">
        <div>
          <h3 class="text-lg font-bold">Elmer Laverty</h3>
          <div class="flex items-center gap-2.5">
            <p class="text-base text-slate-400 font-semibold">Haha oh man</p>
            <FireFilled class="text-rose-900" />
          </div>
        </div>
        <p class="text-slate-400 text-lg font-medium">12m</p>
      </div>
      <div class="flex gap-3.5 mt-2">
        <div class="bg-yellow-200 pl-3 pr-3 rounded-xl">
          <span class="text-red-500 font-semibold">Question</span>
        </div>
        <div class="bg-green-200 pl-3 pr-3 rounded-xl">
          <span class="text-green-500 font-semibold">Help wanted</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FireFilled } from '@ant-design/icons-vue';

export default {
  components: {
    FireFilled
  }
}
</script>
<style lang="">
  
</style>
