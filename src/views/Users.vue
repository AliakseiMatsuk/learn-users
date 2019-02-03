<template lang="pug">
  .p-users
    .container
      .p-users__users(v-if="isUsersLoaded")
        .p-users__select
          p Users per page
          b-select(v-model="pageSize")
        .p-users__table
          t-users(:users="GET_FILTERED_USERS")
        .p-users__pagination
          b-pagination(v-model="paginationData")
      .p-users__loading(v-else) Loading...
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import tUsers from '@/components/tables/t-users.vue'

export default {
  name: 'Users',
  components: {
    bSelect: () => import('@/components/blocks/b-select.vue'),
    bPagination: () => import('@/components/blocks/b-pagination.vue'),
    tUsers
  },
  computed: {
    ...mapGetters('users', [
      'GET_FILTERED_USERS',
      'GET_CURRENT_PAGE',
      'GET_TOTAL_PAGES',
      'GET_USERS_PER_PAGE'
    ]),
    isUsersLoaded() {
      return this.GET_FILTERED_USERS.length
    },
    paginationData: {
      get() {
        return {
          currentPage: this.GET_CURRENT_PAGE,
          totalPages: this.GET_TOTAL_PAGES
        }
      },
      set(page) {
        this.M_SET_CURRENT_PAGE(page)
      }
    },
    pageSize: {
      get() {
        return this.GET_USERS_PER_PAGE
      },
      set(size) {
        this.A_SET_USERS_PER_PAGE(size)
      }
    }
  },
  created() {
    this.A_GET_USERS()
  },
  methods: {
    ...mapActions('users', ['A_GET_USERS', 'A_SET_USERS_PER_PAGE']),
    ...mapMutations('users', ['M_SET_CURRENT_PAGE'])
  }
}
</script>

<style lang="stylus">
.p-users
  &__select
    max-width 300px
    margin-bottom 20px
</style>
