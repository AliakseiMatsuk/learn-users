<template lang="pug">
  form.f-add-user
    .form-group
      label(for="firstName") First Name
      input#firstName.form-control(v-model.trim="user.firstName")
    .form-group
      label(for="lastName") Last Name
      input#lastName.form-control(v-model.trim="user.lastName")
    .form-group
      label(for="company") Company
      input#company.form-control(v-model.trim="user.company")
    .form-group
      label(for="age") Age
      input#age.form-control(v-model.trim.number="user.age")
    .form-group
      label(for="balance") Balance
      input#balance.form-control(v-model.trim="user.balance")
    .form-group
      label(for="phone") Phone
      input#phone.form-control(v-model.trim="user.phone")
    .form-group.form-check
      input#isActive.form-check-input(v-model="user.isActive" type="checkbox")
      label.form-check-label(for="isActive") Active
    button.btn.btn-primary(type="button", @click="addUser") Add
</template>

<script>
export default {
  name: 'fAddUser',
  data() {
    return {
      user: {
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
  methods: {
    addUser() {
      this.$emit('add-user', this.user)
    }
  }
}
</script>
