<template lang="pug">
  select.custom-select(v-model="defaultPageSize")
    option(
    v-for="size in pageSizes",
    :value="size",
    :key="`size-${size}`") {{ size }}
</template>

<script>
export default {
  name: 'BSelect',
  model: {
    prop: 'pageSize',
    event: 'set-page-size'
  },
  props: {
    pageSize: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      pageSizes: [3, 5, 7, 9],
      defaultPageSize: 3
    }
  },
  watch: {
    defaultPageSize(size) {
      this.$emit('set-page-size', size)
    }
  },
  created() {
    this.defaultPageSize = this.pageSize
  }
}
</script>
