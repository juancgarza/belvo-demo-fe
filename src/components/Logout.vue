<template>
<div></div>
</template>
<script>
export default {
  name: 'Logout',
  created () {
    delete localStorage.link
    if (localStorage.link) {
      delete localStorage.link
    }
    this.$router.push('/')
  }
}
</script>