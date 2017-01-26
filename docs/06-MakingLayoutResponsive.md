# Making layout responsive

the most interesting thing in hackernews7 is his responsive layout. I will try to make it work in this project.

# Modifying main Layout

I need a left panel. so in App.vue :

```javascript
[...]
<template lang="pug">
#app
  // Status bar overlay for full screen mode
  f7-statusbar
  // left panel
  f7-panel(left, reveal)
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
[...]
```

now we need some styles into App.vue to enable it:

```javascript
[...]
<style>
  @media (min-width: 768px) {
    .views {
      transform: translate3d(260px, 0, 0);
      width: calc(100% - 260px)
    }
  }
</style>
[...]
```

and to make it smooth, we can add transitions:

```javascript
[...]
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
  }
</style>
[...]
```