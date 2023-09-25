<template lang="">
  <div class=" w-1/3 h-screen p-4 border-r overflow-y-scroll">
    <header class="flex justify-between w-full pb-5 pt-5 border-b border-gray-400 sticky top-0 z-50">
      <div class="flex items-center">
        <p class="mr-2 text-xl font-semibold">Message</p>
        <DownOutlined />
      </div>
   
      <div class="w-10 h-10 bg-blue-700 rounded-3xl flex items-center justify-center cursor-pointer"
        @click="showModal()"
      >
        <PlusOutlined class="text-slate-300 text-2xl relative -top-0.5"/>
      </div>
    </header>

    <div>
      <div class="pb-3 pt-3 bg-slate-200 mt-4 mb-4 rounded-2xl h-12 relative">
        <label class="p-4 text-slate-400" for="">search</label>
        <input class="bg-slate-200 outline-0 absolute w-4/5 text-xl top-2.5" type="text" placeholder="Search message">
      </div>
      <div>
        <Users /><br>
        <Users/><br>
        <Users /><br>
        <Users/><br>
        <Users /><br>
        <Users /><br>
        <Users /><br>
        <Users /><br>
        <Users />
      </div>
    </div>
  </div>
  <AddUserModal v-if="isModalOpen" @cancel="showModal()" />
</template>

<script>
import { DownOutlined } from '@ant-design/icons-vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import Users from './Item/Users.vue';
import AddUserModal from '../modal/AddUserModal.vue';

export default {
  components: {
    DownOutlined,
    PlusOutlined,
    Users,
    AddUserModal
  },

  data() {
    return {
      isModalOpen: false
    }
  },

  methods: {
    showModal() {
      this.isModalOpen = !this.isModalOpen
    }
  }
}
</script>

<style lang="">
  
</style>
