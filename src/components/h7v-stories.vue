<template lang='pug'>
f7-list(media-list)
  f7-list-item(v-for='storie in stories', link="/storie/", @click='selectStorie(storie)')
    .item-title-row
      .item-title {{storie.title}}
      .item-after
        .badge {{storie.kids.length}}
    .item-subtitle {{storie.domain}}
    .item-text {{storie.score}} points by {{storie.by}}
</template>

<script>
export default {
  name: 'h7v-stories',
  data () {
    return {
      stories: [],
      storie: null
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
    },
    selectStorie (storie) {
      this.$root.storie = storie
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style></style>
