<template lang="pug">
  .p-add-user
    .container
      .p-add-user__back
        router-link(:to="{name: 'user-list'}") Back to user list
      .p-add-user__form
        f-user(@manage-user="addUser")
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddUser',
  components: {
    fUser: () => import('@/components/forms/f-user.vue')
  },
  methods: {
    ...mapActions('users', ['A_ADD_USER']),
    addUser(user) {
      this.A_ADD_USER(user).then(() => this.$router.push({ name: 'user-list' }))
    }
  }
}
</script>

<style lang="stylus">
.p-add-user
  padding-bottom 50px
</style>
