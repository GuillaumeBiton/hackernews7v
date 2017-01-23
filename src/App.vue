<template lang="pug">
#app
  // Status bar overlay for full screen mode
  f7-statusbar
  //Views
  f7-views
    // Main view
    f7-view(main)
      // Pages container
      f7-pages
        // Initial page
        f7-page(navbar-through)
          // Navbar
          f7-navbar(title='HackerNews7V')
          h7v-stories
</template>

<script>
// import stories
import Stories from './components/h7v-stories'

export default {
  name: 'app',
  components: {
    'h7v-stories': Stories
  }
}
</script>

<style src='framework7/dist/css/framework7.ios.css'></style>
<style src='framework7/dist/css/framework7.ios.colors.css'></style>
