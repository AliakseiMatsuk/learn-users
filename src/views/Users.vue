<template lang="pug">
  .p-users
    .container
      .p-users__table(v-if="GET_USERS.length")
        t-users(
        :users="GET_USERS",
        @delete-user="deleteUser",
        @edit-user="editUser")
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import tUsers from '../components/tables/t-users.vue'

export default {
  components: { tUsers },
  name: 'users',
  created() {
    this.A_GET_USERS()
  },
  methods: {
    ...mapActions('users', ['A_GET_USERS', 'A_DELETE_USER']),
    deleteUser(userId) {
      this.A_DELETE_USER(userId)
    },
    editUser(userId) {
      this.$router.push({ name: 'edit-user', params: { userId } })
    }
  },
  computed: {
    ...mapGetters('users', ['GET_USERS'])
  }
}
</script>
