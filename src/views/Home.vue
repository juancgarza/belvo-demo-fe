<template>
  <div>
    <Navbar />
    <div class="w-full max-w-xs mx-auto">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="items-center justify-between">
      <button v-if="!hasLink" @click="openBelvoWidget()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Connect your account with Belvo
      </button>
      <router-link v-if="hasLink" to="/dashboard" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Go to Dashboard
      </router-link>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Belvo Demo All rights reserved.
  </p>
</div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import axios from "axios"

export default {
  name: 'Home',
  components: {
    Navbar: Navbar
  },
  data () {
    return {
      access_token: null,
      hasLink: false
    }
  },
  mounted () {
    if (localStorage.link) {
      this.hasLink = true
    } else {
      this.hasLink = false
    }
  },
  methods: {
    openBelvoWidget () {
      axios.get('http://localhost:3000/get_token')
          .then((response) => {
            this.access_token = response.data.access;
            console.log(window.belvoSDK.createWidget)
            window.belvoSDK.createWidget(this.access_token, {
              locale: 'es', 
              company_name: 'Belvo Demo',
              country_codes: ['MX', 'CO'],
              callback: (link) => this.successCallbackFunction(link),
               onExit: (data) => this.onExitCallbackFunction(data),
              onEvent: (data) => console.log('data', data)
            }).build();
          })
    },
    successCallbackFunction(link_id) {
      this.$emit('setLinkId', link_id)
      localStorage.setItem('link', link_id)
      this.$router.push('/dashboard')
    },
    onExitCallbackFunction(data) {
      console.log('data', data)
    }
  }
}
</script>
<style scoped>
</style>
