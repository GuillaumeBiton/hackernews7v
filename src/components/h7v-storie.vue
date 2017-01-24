<template lang="pug">
f7-list-item(:title='storie.title', :subtitle='storie.domain', :text="storie.score")
</template>

<script>
export default {
  name: 'h7v-storie',
  props: [
    'storie'
  ]
}
</script>

<style></style>
