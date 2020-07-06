<template>
  <div>
    <div class="bg-blue-500 p-2 shadow text-xl text-white">
      <h3 class="font-bold pl-2">Owners</h3>
    </div>
    <button
      @click="retrieveOwners()"
      class="mt-2 float-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >Retrieve owners</button>
    <div class="w-full mx-auto mt-2">
      <div class="flex">
        <div
          v-for="owner in owners"
          :key="owner.id"
          class="flex-1 w-1/3 m-2 max-w-sm rounded shadow-xl"
        >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Name: {{ owner.display_name }}</div>
            <p
              class="text-gray-700 text-base"
            >
            Address: {{ owner.address }}
            </p>
            <p
              class="text-gray-700 text-base"
            >
            Email: {{ owner.email }}
            </p>
            <p
              class="text-gray-700 text-base"
            >
            Phone: {{ owner.phone_number }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DashboardOwners",
  data() {
    return {
      owners: []
    };
  },
  methods: {
    retrieveOwners() {
      axios
        .post("https://belvo-demo.herokuapp.com/retrieve_owners", {
          owners: { link: localStorage.link }
        })
        .then(response => {
          this.owners = response.data;
        });
    }
  }
};
</script>