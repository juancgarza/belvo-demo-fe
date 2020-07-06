<template>
  <header class="bg-red-500">
    <ul class="flex justify-between">
      <li class="m-4">
        <a class="text-white text-xl font-semibold" href="#">Belvo Demo</a>
      </li>
      <li class="m-4"></li>
      <li v-if="hasLink" class="m-4">
        <router-link class="text-white text-xl font-semibold" to="/logout">Logout</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['hasLink']
}
</script>