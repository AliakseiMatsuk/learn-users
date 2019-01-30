<template lang="pug">
  form.f-edit-user
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
      input#age.form-control(v-model.trim.number="currentUser.age", type="")
    .form-group
      label(for="balance") Balance
      input#balance.form-control(v-model.trim="currentUser.balance")
    .form-group
      label(for="phone") Phone
      input#phone.form-control(v-model.trim="currentUser.phone")
    .form-group.form-check
      input#isActive.form-check-input(v-model="currentUser.isActive" type="checkbox")
      label.form-check-label(for="isActive") Active
    button.btn.btn-primary(type="button", @click="editUser") Edit
</template>

<script>
export default {
  name: 'fEditUser',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentUser: null
    }
  },
  created() {
    this.currentUser = this.user
  },
  methods: {
    editUser() {
      this.$emit('edit-user', this.currentUser)
    }
  }
}
</script>
