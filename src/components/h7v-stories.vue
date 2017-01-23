<template lang="pug">
f7-list
  // add <ul> : hack to make list render normally
  ul
    h7v-storie(v-for='storie in stories', :storie='storie')
</template>

<script>
// import storie vue component
import Storie from './h7v-storie'

export default {
  name: 'h7v-stories',
  components: {
    'h7v-storie': Storie
  },
  data () {
    return {
      stories: []
    }
  },
  methods: {
    fetchData () {
      var self = this
      window.Dom7.ajax({
        url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
        success (data) {
          self.stories = JSON.parse(data)
        }
      })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style></style>
