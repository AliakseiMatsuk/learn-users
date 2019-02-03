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
    tbody
      tr(v-for="(user,index) in users", :key="user.id")
        th
          router-link(:to="'/edit-user/' + user.id") # {{ user.id }}
        td {{ user.firstName + ' ' +  user.lastName}}
        td {{ user.company }}
        td {{ user.age }}
        td {{ user.balance }}
        td {{ user.phone }}
        td
          span.badge(:class="'badge-' + (user.isActive ? 'success' : 'danger')")  &nbsp;&nbsp;&nbsp;&nbsp;
</template>

<script>
export default {
  name: 'TUsers',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>
