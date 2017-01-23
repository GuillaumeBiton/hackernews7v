# Starting with components

If I understand philosophy behind web component. I need to create a part of my app that can be see as a single element.

So the stories list is one.

As it's explained in [components documentation](https://vuejs.org/v2/guide/components.html), I'll try to respect [W3C rules](http://www.w3.org/TR/custom-elements/#concepts) to register my component.

So I create h7v-stories.vue into src/components/.

And inside this stories list, i have storie item so i create a h7v-storie.vue into src/component/ and I start with.

## storie component

```javascript
<template lang="pug">
f7-list-item(:title='storie')
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
```

So I define my list item as f7-list-item component and I bind the props storie to my item title.

for the moment, sotire will be a unique string retrieved form Hackernews API for topstories. I bind it to a complete storie information after.

## stories component

```javascript
<template lang="pug">
f7-list
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
```

so I ask for the f7-list component, and I populate it this my fresh h7v-storie.

I craete a method named "fetchData" to request some data.

And to finish I use vue.js v-for directive to iterate over my array and give argument to my h7v-storie component.