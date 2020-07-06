<template>
  <div>
    <div class="bg-blue-500 p-2 shadow text-xl text-white">
      <h3 class="font-bold pl-2">Last month's Balance</h3>
    </div>
    
    <div class="w-full mx-auto mt-2">
      <div class="flex">
        <LineChart v-if="loaded" :data="amounts" :labels="dates"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LineChart from '../../components/LineChart.vue'

export default {
  name: "DashboardBalances",
  component: {
    LineChart
  },
  data() {
    return {
      options: [
        { text: "Last week", value: 7 },
        { text: "Last two weeks", value: 15 },
        { text: "Last month", value: 30 },
        { text: "Last two months", value: 60 },
        { text: "Last three months", value: 90 }
      ],
      balances: [],
      amounts: [],
      dates: [],
      selected: null,
      loaded: false
    };
  },
  methods: {
    loadAmounts(data) {
      this.amounts.push(data)
    }
  },
  async mounted () {
    this.loaded = false 
    try {
      axios
        .post("https://belvo-demo.herokuapp.com/retrieve_balance", {
          balance: { link: localStorage.link, selected: this.selected }
        })
        .then(response => {
          this.balances = response.data;
          response.data.forEach((value, key) => {
            this.amounts.push(value.current_balance)
            this.dates.push(value.value_date)
            this.loaded = true
            console.log(key)
          })
        });
    } catch(e) {
      console.error(e)
    }
  }
};
</script>