<template lang="pug">
  nav
    ul.pagination
      li.page-item(:class="{ disabled : currentPage === 1 }")
        button.page-link(
        @click="setCurrentPage(currentPage - 1)",
        aria-label="Previous")
          span(aria-hidden='true') &laquo;
      li.page-item(
      v-for="page in paginationData.totalPages",
      :class="isCurrentPage(page)",
      :key="`page-${page}`")
        button.page-link(@click="setCurrentPage(page)", type="button") {{ page }}
      li.page-item(:class="{ disabled : currentPage === totalPages }")
        button.page-link(
        @click="setCurrentPage(currentPage + 1)"
        aria-label="Next")
          span(aria-hidden='true') &raquo;

</template>

<script>
export default {
  name: 'BPagination',
  model: {
    prop: 'paginationData',
    event: 'set-current-page'
  },
  props: {
    paginationData: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentPage() {
      return this.paginationData.currentPage
    },
    totalPages() {
      return this.paginationData.totalPages
    }
  },
  methods: {
    isCurrentPage(page) {
      return { active: this.currentPage === page }
    },
    setCurrentPage(page) {
      this.$emit('set-current-page', page)
    }
  }
}
</script>
