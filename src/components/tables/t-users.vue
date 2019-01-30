<template lang="pug">
  table.table.table-striped
    thead
      tr
        th #
        th Name
        th Company
        th Age
        th Balance
        th Phone
        th Active
        th
        th
    tbody
      tr(v-for="(user,index) in users", :key="user.id")
        th {{ index + 1 }}
        td {{ user.firstName + ' ' +  user.lastName}}
        td {{ user.company }}
        td {{ user.age }}
        td {{ user.balance }}
        td {{ user.phone }}
        td
          span.badge(:class="'badge-' + (user.isActive ? 'success' : 'danger')")  &nbsp;&nbsp;&nbsp;&nbsp;
        td
          button.btn.btn-primary(@click="$emit('edit-user', user.id)") Edit
        td
          button.btn.btn-danger(@click="$emit('delete-user', user.id)") Delete
</template>

<script>
export default {
  name: 'tUsers',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>
