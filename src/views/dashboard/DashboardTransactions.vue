<template>
  <div>
    <div class="bg-blue-500 p-2 shadow text-xl text-white">
      <h3 class="font-bold pl-2">Transactions</h3>
    </div>
    <div class="flex flex-wrap">
      <select class="border-2 rounded mt-2 mr-1" v-model="selected">
        <option disabled :value="null">Please select one</option>
        <option
          v-for="option in options"
          v-bind:value="option.value"
          :key="option.value"
        >{{ option.text }}</option>
      </select>
      <button
        @click="retrieveTransactions()"
        class="mt-2 float-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >Retrieve transactions</button>
    </div>
    <div class="flex flex-row flex-wrap flex-grow mt-2">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Amount</th>
            <th class="px-4 py-2">Balance</th>
            <th class="px-4 py-2">Account Number</th>
            <th class="px-4 py-2">Status</th>
            <th class="px-4 py-2">Date processed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id" :class="{'bg-red-200': transaction.type  === 'OUTFLOW', 'bg-green-200': transaction.type === 'INFLOW' }">
            <td class="border px-4 py-2">{{ transaction.amount }}</td>
            <td class="border px-4 py-2">{{ transaction.balance }}</td>
            <td class="border px-4 py-2">{{ transaction.account.number }}</td>
            <td class="border px-4 py-2">{{ transaction.status }}</td>
            <td class="border px-4 py-2">{{ transaction.value_date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DashboardTransactions",
  data() {
    return {
      options: [
        { text: "Last week", value: 7 },
        { text: "Last two weeks", value: 15 },
        { text: "Last month", value: 30 },
        { text: "Last two months", value: 60 },
        { text: "Last three months", value: 90 }
      ],
      transactions: [],
      selected: ""
    }
  },
  methods: {
    retrieveTransactions() {
      axios
        .post("http://localhost:3000/retrieve_transactions", {
          transactions: { link: localStorage.link, date_from: this.selected }
        })
        .then(response => {
          this.transactions = response.data;
        });
    }
  }
};
</script>