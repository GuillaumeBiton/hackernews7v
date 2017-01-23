# Defining the main layout

I will use the App component as the main component for the app. So I set the layout in it.

```javascript
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
          p Page content goes there
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src='framework7/dist/css/framework7.ios.css'></style>
<style src='framework7/dist/css/framework7.ios.colors.css'></style>
```