# On the road again

Now I want to be able select a story to see details about it and comments leave by hackernews users.

## Story page

I create a story-page as a vue file.

```javascript
<template lang='pug'>
f7-page(name='story', navbar-through)
  f7-navbar(back-link="Back", :title='story.title')
  .story-header
    .story-title {{story.title}}
    .story-info {{story.score}} points by {{story.by}}
    .story-link 
      f7-link(:href='story.url', external) {{story.url}}
</template>

<script>
export default {
  data () {
    return {
      story: this.$root.story
    }
  }
}
</script>

<style>[...]</style>
```

## routing

Now I include my vue component into my main.js and ask Framework7 to handle request to '/story/' with this component.

```javascript
[...]
import StoryPage from './pages/story-page'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  framework7: {
    root: '#app',
    routes: [
      {
        path: '/story/',
        component: StoryPage
      }
    ]
  }
})
```

now navigation is up.