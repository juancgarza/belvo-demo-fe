<template>
  <div>
    <Navbar :hasLink="hasLink" />
    <div class="lg:flex -mx-6">
      <div
        id="sidebar"
        class="hidden fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5"
      >
        <div
          id="navWrapper"
          class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent"
        >
          <nav
            id="nav"
            class="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)"
          >
            <div class="mb-8">
              <h5
                class="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wide font-bold text-xl lg:text-l"
              >Dashboard</h5>
              <ul>
                <li class="mb-3 lg:mb-1">
                  <router-link
                    class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block hover:translate-x-2px hover:text-gray-900 hover:border-gray-600 text-gray-600 font-medium border-r-2"
                    to="/dashboard/accounts"
                  >
                    <span class="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
                    <span class="relative">Accounts</span>
                  </router-link>
                </li>
                <li class="mb-3 lg:mb-1">
                  <router-link
                    class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block hover:translate-x-2px hover:text-gray-900 hover:border-gray-600 text-gray-600 font-medium border-r-2"
                    to="/dashboard/transactions"
                  >
                    <span class="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
                    <span class="relative">Transactions</span>
                  </router-link>
                </li>
                <li class="mb-3 lg:mb-1">
                  <router-link
                    class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block hover:translate-x-2px hover:text-gray-900 text-gray-600 hover:border-gray-600 font-medium border-r-2"
                    to="/dashboard/owners"
                  >
                    <span class="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
                    <span class="relative">Owners</span>
                  </router-link>
                </li>
                <li class="mb-3 lg:mb-1">
                  <router-link
                    class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block hover:translate-x-2px hover:text-gray-900 hover:border-gray-600 text-gray-600 font-medium border-r-2"
                    to="/dashboard/balance"
                  >
                    <span class="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
                    <span class="relative">Balance</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <router-view class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
      </router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "DashboardLayout",
  components: {
    Navbar: Navbar
  },
  data() {
    return {
      access_token: null,
      hasLink: false
    };
  },
  mounted() {
    if (localStorage.link) {
      this.hasLink = true;
    } else {
      this.hasLink = false;
    }
  },
  methods: {}
};
</script>
<style scoped>
</style>
