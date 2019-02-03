<template lang="pug">
  form.f-user
    .form-group
      label(for="firstName") First Name
      input#firstName.form-control(v-model.trim="currentUser.firstName")
    .form-group
      label(for="lastName") Last Name
      input#lastName.form-control(v-model.trim="currentUser.lastName")
    .form-group
      label(for="company") Company
      input#company.form-control(v-model.trim="currentUser.company")
    .form-group
      label(for="age") Age
      input#age.form-control(v-model.trim.number="currentUser.age", type="number")
    .form-group
      label(for="balance") Balance
      input#balance.form-control(v-model.trim="currentUser.balance")
    .form-group
      label(for="phone") Phone
      input#phone.form-control(v-model.trim="currentUser.phone")
    .form-group.form-check
      input#isActive.form-check-input(v-model="currentUser.isActive" type="checkbox")
      label.form-check-label(for="isActive") Active
    .f-user__actions
      button.btn.btn-primary(@click="manageUser", type="button") {{ isEditUser ? 'Save' : 'Add' }}
      button.btn.btn-danger(
      v-if="isEditUser",
      @click="deleteUser",
      type="button") Delete
</template>

<script>
export default {
  name: 'FUser',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      currentUser: {
        firstName: '',
        lastName: '',
        company: '',
        age: '',
        balance: '',
        phone: '',
        isActive: false
      }
    }
  },
  computed: {
    isEditUser() {
      return this.user
    }
  },
  created() {
    if (this.user) {
      this.currentUser = { ...this.user }
    }
  },
  methods: {
    manageUser() {
      this.$emit('manage-user', { ...this.currentUser })
    },
    deleteUser() {
      this.$emit('delete-user', this.currentUser.id)
    }
  }
}
</script>

<style scoped lang="stylus">
.f-user
  &__actions
    .btn
      &:not(:last-child)
        margin-right 20px
</style>
