<template lang="pug">
  section.s-header
    .container
      nav.navbar.navbar-expand-lg.navbar-light.bg-light
        ul.navbar-nav
          router-link.nav-item(:to="{name: 'user-list'}", tag="li")
            a.nav-link User list
          router-link.nav-item(:to="{name: 'add-user'}", tag="li")
            a.nav-link Add user
</template>

<script>
export default {
  name: 'SHeader'
}
</script>

<style lang="stylus">
.s-header
  margin-bottom 20px
</style>
