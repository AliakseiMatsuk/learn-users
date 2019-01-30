<template lang="pug">
  #app
    s-header
    router-view
</template>

<script>
import sHeader from '@/components/sections/s-header.vue'

export default {
  name: 'app',
  components: {
    sHeader
  }
}
</script>
