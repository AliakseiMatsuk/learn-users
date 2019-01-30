<template lang="pug">
  .p-add-user
    .container
      .p-add-user__form
        f-add-user(@add-user="addUser")
</template>

<script>
import { mapActions } from 'vuex'
import fAddUser from '@/components/forms/f-add-user.vue'

export default {
  components: { fAddUser },
  name: 'addUser',
  methods: {
    ...mapActions('users', ['A_ADD_USER']),
    addUser(user) {
      this.A_ADD_USER(user).then(() => {
        this.$router.push({ name: 'user-list' })
      })
    }
  }
}
</script>
