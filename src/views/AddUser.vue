<template lang="pug">
  .p-add-user
    .container
      .p-add-user__back
        router-link(to="/user-list") Back to user list
      .p-add-user__form
        f-user(@manage-user="addUser")
</template>

<script>
import { mapActions } from 'vuex'
import fUser from '@/components/forms/f-user.vue'

export default {
  name: 'AddUser',
  components: { fUser },
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
