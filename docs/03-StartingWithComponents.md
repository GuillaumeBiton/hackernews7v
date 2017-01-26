# Starting with components

(My first try has failed.)

If I understand philosophy behind web component. I need to create a part of my app that can be see as a single element. But it seems to be the work of the Framework7-Vue module.

So I go on by creating a component for the list of stories and a page for the detail of a story.

As it's explained in [components documentation](https://vuejs.org/v2/guide/components.html), I'll try to respect [W3C rules](http://www.w3.org/TR/custom-elements/#concepts) to register my component.

So I create h7v-stories.vue into src/components/.

## stories component

```javascript
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
```

so I ask for the f7-list component, and I populate it with stories get by ajax request

I create a method named "fetchData" to request some data.

And to finish I use vue.js v-for directive to iterate over my array and give argument to my f7-list-item component.