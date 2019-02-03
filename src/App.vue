<template lang="pug">
  #app
    s-header
    router-view
</template>

<script>
import sHeader from '@/components/sections/s-header.vue'

export default {
  name: 'App',
  components: {
    sHeader
  }
}
</script>
