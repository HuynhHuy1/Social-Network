<template lang="">
  <div class="w-full h-full fixed flex z-50 justify-center items-center modal-backround">
    <div class="modal-page absolute bg-white modal-shadow rounded-2xl p-4 custom-transition">
      <!-- header -->
      <div class="flex justify-between w-full">
        <h1 class="text-3xl font-semibold">Sure you want to accept ?</h1>
        <p
          class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 cursor-pointer"
        >
          <CloseOutlined class="text-black font-bold" 
          @click="onCloseModal()" 
          />
        </p>
      </div>
      <!-- body -->
      <div class="flex flex-col gap-3 mt-8">
        <label class="text-sm">Write name for the user you wish to chat with</label>
        <input
          type="text"
          placeholder="Your Name"
          class="outline-slate-200 h-11 w-full p-2 text-black"
          v-model="inputData"
        />
      </div>
      <!-- footer -->
      <div class="flex justify-end mt-12 gap-4">
        <div
          class="w-40 h-11 border border-gray-400 flex justify-center items-center rounded-lg cursor-pointer"
          @click="onCloseModal()" 
        >
          No, cancel
        </div>
        <div
          class="w-40 h-11 flex justify-center items-center bg-[#4f4f4f] rounded-lg text-white cursor-pointer"
          @click="showDataInput()"
        >
          OK
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CloseOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    CloseOutlined,
  },

  data() {
    return {
      inputData: ''
    }
  },

  methods: {
    onCloseModal() {
      this.$emit('cancel')
    },

    showDataInput() {
      console.log(this.inputData);
      this.onCloseModal()
    }
  }
};
</script>
<style lang="css" scoped>
.modal-page {
  width: 750px;
  height: 270px;
}

.modal-shadow {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.modal-backround {
  background: rgba(0, 0, 0, 0.4);
}

@keyframes custom-fade {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.custom-transition {
  animation: custom-fade 0.3s ease-in-out;
}
</style>
