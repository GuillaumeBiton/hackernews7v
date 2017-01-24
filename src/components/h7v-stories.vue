<template lang='pug'>
f7-list(media-list)
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
      var results = []
      window.Dom7.ajax({
        url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
        success (data) {
          data = JSON.parse(data)
          var limit = 10
          data.splice(limit, data.length - limit)
          data.forEach((id, index) => {
            window.Dom7.ajax({
              url: 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json',
              success (data) {
                data = JSON.parse(data)
                if (data) {
                  data.domain = data.url ? data.url.split('/')[2] : ''
                }
                results[index] = data
                if (results.length === limit) {
                  self.stories = results
                }
              }
            })
          })
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
