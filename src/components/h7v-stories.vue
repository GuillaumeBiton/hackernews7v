<template lang='pug'>
f7-list(media-list)
  f7-list-item(v-for='story in stories', link='/story/', @click='selectStory(story)')
    .item-title-row
      .item-title {{story.title}}
      .item-after
        .badge(v-if='story.kids') {{story.kids.length}}
    .item-subtitle {{story.domain}}
    .item-text {{story.score}} points by {{story.by}}
</template>

<script>
export default {
  name: 'h7v-stories',
  data () {
    return {
      stories: [],
      story: null
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
          var limit = 2
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
    },
    selectStory (story) {
      this.$root.story = story
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style></style>
