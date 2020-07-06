<template>
  <div>
    <div class="bg-blue-500 p-2 shadow text-xl text-white">
      <h3 class="font-bold pl-2">Accounts</h3>
    </div>
    <button
      @click="retrieveAccounts()"
      class="mt-2 float-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >Retrieve accounts</button>
    <div class="w-full mx-auto mt-2">
      <div class="flex">
        <div
          v-for="account in accounts"
          :key="account.id"
          class="flex-1 w-1/3 m-2 max-w-sm rounded shadow-xl"
        >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Name: {{ account.name }}</div>
            <p
              class="text-gray-700 text-base"
            >
            Número de cuenta: {{ account.number }}
            </p>
          </div>
          <div class="px-6 py-4">
            <span
              class="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-white m-2"
            >Current Balance: ${{ account.balance.current }}</span>
            <span
              class="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white m-2"
            >Available Balance: ${{ account.balance.available }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DashboardHome",
  data() {
    return {
      accounts: []
    };
  },
  methods: {
    retrieveAccounts() {
      axios
        .post("http://localhost:3000/retrieve_accounts", {
          accounts: { link: localStorage.link }
        })
        .then(response => {
          this.accounts = response.data;
        });
    }
  }
};
</script>