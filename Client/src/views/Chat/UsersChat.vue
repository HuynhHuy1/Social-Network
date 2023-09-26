<template lang="">
  <div class="w-1/3 h-screen p-4 border-r">
    <vue-scroll>
      <div class="sticky top-0 bg-white">
        <header
          class="flex justify-between w-full pb-5 pt-5 border-b border-gray-400"
        >
          <div class="flex items-center static">
            <p class="mr-2 text-xl font-semibold">Message</p>
            <DownOutlined />
          </div>
  
          <div
            class="w-10 h-10 bg-blue-700 rounded-3xl flex items-center justify-center cursor-pointer"
            @click="showModal()"
          >
            <PlusOutlined class="text-slate-300 text-2xl relative -top-0.5" />
          </div>
        </header>
  
          <div
            class="pb-3 pt-3 bg-slate-200 mt-4 mb-4 rounded-2xl h-12 flex items-center"
          >
            <label class="p-4 text-slate-400" for="">search</label>
            <input
              class="bg-slate-200 outline-0 w-full text-xl top-2.5 rounded-2xl pl-1 pr-2"
              type="text"
              placeholder="Search message"
            />
          </div>
      </div>
      <div>
        <Users /><br />
        <Users /><br />
        <Users /><br />
        <Users /><br />
        <Users /><br />
        <Users /><br />
        <Users /><br />
        <Users /><br />
        <Users />
      </div>
    </vue-scroll>
  </div>
  <AddUserModal v-if="isModalOpen" @cancel="showModal"/>
</template>

<script>
import { DownOutlined } from "@ant-design/icons-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import Users from "../../components/Item/Users.vue";
import AddUserModal from "../../components/modal/AddUserModal.vue";

export default {
  components: {
    DownOutlined,
    PlusOutlined,
    Users,
    AddUserModal,
  },

  data() {
    return {
      isModalOpen: false,
    };
  },

  methods: {
    showModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};
</script>
