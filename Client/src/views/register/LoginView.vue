<template lang="">
  <form @submit.prevent="onSubmit()" class="">
    <img src="../../assets/image/background-login.png" class="w-screen h-screen">
    <div class="form-login">
      <div class="flex justify-between">
        <h2 class="text-xl text-black ">Welcome to Chat</h2>
        <div class="flex flex-col items-start">
          <p class="">No Account ?</p>
          <p><router-link class="text-[#779341]" to="/register">Sign Up</router-link></p>
        </div>
      </div>

      <h1 class="text-4xl text-black font-semibold flex items-start pt-4">Sign In</h1>

      <div class="flex flex-col items-start gap-1 mt-8">
        <label for="">Enter your username</label>
          <input class="w-full border border-[#4285F4] outline-none h-14 rounded-xl p-3" type="text" placeholder="Username"
          :class="{ errors: error.status }"
          v-model="form.username"
          >
        <div class="error-text">{{ error.text }}</div>
      </div>
      <div class="mt-8 flex flex-col items-start gap-1 relative w-full">
        <label for="">Enter your password</label>
          <input class="w-full border border-[#ADADAD] outline-none h-14 rounded-xl p-3" type="password" placeholder="Password"
          v-model="form.password"
          >
      </div>
      <div class="flex flex-col items-end pt-12 gap-5">
        <a class="text-[#4285F4] text-sm" href="#">Forgot Password</a>
        <button type="submit" class="w-1/2 h-14 bg-[#779341] rounded-lg text-white">Sign In</button>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      error: {
        text: '',
        status: false
      },
      showPassword: false
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form)
      if(this.form.username.length < 6 || this.form.username.length > 18) {
        this.error = {
          text: "Username should be 6-18 characters.",
          status: true
        }
      } else {
        this.error = {
          text: '',
          status: false
        }
      }
    }
  }  
}
</script>

<style lang="css">
.form-login {
  position: fixed;
  width: 450px;
  height: max-content;
  background: white;
  top: 0;
  right: 0;
  margin: 100px 200px;
  border-radius: 24px;
  overflow: hidden;
  padding: 24px;
  z-index: 10000;
  opacity: 0.8;
}

.errors {
  border-color: red;
}

.error-text {
  color: red;
  font-weight: 500;
}
</style>
