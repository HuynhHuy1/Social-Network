<template lang="">
  <div class="">
    <img src="../../assets/image/background-login.png" class="w-screen h-screen">
    <div class="form-login">
      <div class="flex justify-between">
        <h2 class="text-xl text-black ">Welcome to Chat</h2>
        <div class="flex flex-col items-start">
          <p class="">Have an Account ?</p>
          <p><router-link class="text-[#779341]" to="/login">Sign In</router-link></p>
        </div>
      </div>

      <h1 class="text-4xl text-black font-semibold flex items-start pt-4">Sign Up</h1>

      <div class="flex flex-col items-start gap-1 mt-8">
        <label for="">Enter your username</label>
        <input class="w-full border border-[#4285F4] outline-none h-14 rounded-xl p-3" type="text" placeholder="Username">
      </div>
      <div class="mt-8 flex flex-col items-start gap-1">
        <label for="">Enter your password</label>
        <input class="w-full border border-[#ADADAD] outline-none h-14 rounded-xl p-3" type="password" placeholder="Password">
      </div>
      <div class="flex flex-col items-start gap-1 mt-8">
        <label for="">Confirm Password</label>
        <input class="w-full border border-[#4285F4] outline-none h-14 rounded-xl p-3" type="text" placeholder="Password">
      </div>
      <div class="flex flex-col items-end pt-12">
        <button class="w-1/2 h-14 bg-[#779341] rounded-lg text-white">Sign Up</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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
  margin: 60px 200px;
  border-radius: 24px;
  padding: 24px;
  z-index: 10000;
  opacity: 0.8;
}
</style>
