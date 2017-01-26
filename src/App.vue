<template lang="pug">
#app
  // Status bar overlay for full screen mode
  f7-statusbar
  // left panel
  f7-panel(left, cover)
  //Views
  f7-views(navbar-through)
    // Main view
    f7-view(main, :dynamic-navbar='true')
      // Navbar
      f7-navbar(sliding)
        f7-nav-left
          f7-link(icon='icon-bars', open-panel='left')
        f7-nav-center(sliding) HackerNews7V
      // Pages container
      f7-pages
        // Initial page
        f7-page
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
<style>
  .views {
    transition: 400ms;
    transform: translate3d(0, 0, 0);
  }
  @media (min-width: 768px) {
    .views {
      transition: 400ms;
      transform: translate3d(260px, 0, 0);
      width: calc(100% - 260px)
    }
    .view-main .navbar .left .open-panel {
      display: none
    }
  }
</style>