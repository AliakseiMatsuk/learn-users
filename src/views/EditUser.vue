<template lang="pug">
  .p-edit-user
    .container
      .p-edit-user__back
        router-link(:to="{name: 'user-list'}") Back to users list
      template(v-if="user")
        .p-edit-user__users
          router-link.p-edit-user__users-link(:to="{name: 'edit-user', params:{id: prevUserId}}") Edit {{getSiblingUserName(prevUserId)}}
          router-link.p-edit-user__users-link(:to="{name: 'edit-user', params:{id: nextUserId}}") Edit {{getSiblingUserName(nextUserId)}}
        .p-edit-user__form
          f-user(:user="user", @manage-user="editUser", @delete-user="deleteUser")
      .p-edit-user__loading(v-else) Loading...
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'EditUsers',
  components: {
    fUser: () => import('@/components/forms/f-user.vue')
  },
  data() {
    return {
      user: null
    }
  },
  computed: {
    ...mapGetters('users', ['GET_USERS', 'GET_USER_BY_ID']),
    getUserId() {
      return +this.$route.params.id
    },
    prevUserId() {
      return this.getUserId - 1
    },
    nextUserId() {
      return this.getUserId + 1
    }
  },
  watch: {
    getUserId(id) {
      this.user = this.GET_USER_BY_ID(id)
    }
  },
  created() {
    !this.GET_USERS.length
      ? this.A_GET_USERS().then(() => (this.user = this.GET_USER_BY_ID(this.getUserId)))
      : (this.user = this.GET_USER_BY_ID(this.getUserId))
  },
  methods: {
    ...mapActions('users', ['A_GET_USERS', 'A_EDIT_USER', 'A_DELETE_USER']),
    getSiblingUserName(id) {
      let { firstName, lastName } = this.GET_USER_BY_ID(id)

      return firstName + ' ' + lastName
    },
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
  &__back
    margin-bottom 20px
  &__users
    margin-bottom 20px
    &-link
      &:not(:last-child)
        margin-right 20px
</style>
