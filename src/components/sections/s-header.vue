<template lang="pug">
  section.s-header
    .container
      nav.navbar.navbar-expand-lg.navbar-light.bg-light
        ul.navbar-nav
          li.nav-item(
          v-for="link in nav",
          :class="{ active: $route.path === link.href }")
            router-link.nav-link(:to="link.href") {{ link.title }}
</template>

<script>
export default {
  name: 'sHeader',
  data() {
    return {
      nav: [
        {
          title: 'User list',
          href: '/user-list'
        },
        {
          title: 'Add user',
          href: '/add-user'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.s-header
  margin-bottom 20px
</style>
