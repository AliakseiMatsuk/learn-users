<template lang="pug">
  .p-users
    .container
      .p-users__table(v-if="isUsersLoaded")
        t-users(:users="GET_USERS")
      .p-users__loading(v-else) Loading...
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import tUsers from '@/components/tables/t-users.vue'

export default {
  name: 'Users',
  components: { tUsers },
  computed: {
    ...mapGetters('users', ['GET_USERS']),
    isUsersLoaded() {
      return this.GET_USERS.length
    }
  },
  created() {
    this.A_GET_USERS()
  },
  methods: {
    ...mapActions('users', ['A_GET_USERS'])
  }
}
</script>
