<template lang="pug">
  .p-edit-user
    .container
      .p-edit-user__form(v-if="user")
        f-edit-user(:user="user", @edit-user="editUser")
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import fEditUser from '../components/forms/f-edit-user.vue'

export default {
  components: { fEditUser },
  name: 'editUsers',
  data() {
    return {
      user: null
    }
  },
  created() {
    this.user = this.GET_USER_BY_ID(this.$route.params.userId)
  },
  computed: {
    ...mapGetters('users', ['GET_USER_BY_ID'])
  },
  methods: {
    ...mapActions('users', ['A_EDIT_USER']),
    editUser(user) {
      this.A_EDIT_USER(user).then(() => this.$router.push({ name: 'user-list' }))
    }
  }
}
</script>
