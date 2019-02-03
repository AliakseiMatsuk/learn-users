<template lang="pug">
  .p-edit-user
    .container
      .p-edit-user__back
        router-link(to="/user-list") Back to users list
      .p-edit-user__form(v-if="user")
        f-user(:user="user", @manage-user="editUser", @delete-user="deleteUser")
      .p-edit-user__loading(v-else) Loading...
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import fUser from '@/components/forms/f-user.vue'

export default {
  name: 'EditUsers',
  components: { fUser },
  data() {
    return {
      user: null
    }
  },
  computed: {
    ...mapGetters('users', ['GET_USERS', 'GET_USER_BY_ID']),
    getUserId() {
      return +this.$route.params.id
    }
  },
  created() {
    !this.GET_USERS.length
      ? this.A_GET_USERS().then(() => (this.user = this.GET_USER_BY_ID(this.getUserId)))
      : (this.user = this.GET_USER_BY_ID(this.getUserId))
  },
  methods: {
    ...mapActions('users', ['A_GET_USERS', 'A_EDIT_USER', 'A_DELETE_USER']),
    editUser(user) {
      this.A_EDIT_USER(user).then(() => this.$router.push({ name: 'user-list' }))
    },
    deleteUser(id) {
      this.A_DELETE_USER(id).then(() => this.$router.push({ name: 'user-list' }))
    }
  }
}
</script>

<style scoped lang="stylus">
.p-edit-user
  padding-bottom 50px
</style>
