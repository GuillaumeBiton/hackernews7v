## Enabling sliding effect

Framework7 has very good looking features for iOS theme like sliding animation on navbar. So I enable them.

in main.js :

```javascript
[...]
  framework7: {
    root: '#app',
    animateNavBackIcon: true,
    routes: [
      {
        path: '/story/',
        component: StoryPage
      }
    ]
  }
})
```

my component navbar on the main page needs to be positioned outside the pages components. And I apply the 'sliding' property. I also put the sliding property on the navbar component into the story page.

Now to activate, i need to enable the view property into the main page App.vue

```javascript
[...]
  //Views
  f7-views(navbar-through)
    // Main view
    f7-view(main, :dynamic-navbar='true')
      // Navbar
      f7-navbar(title='HackerNews7V', sliding)
      // Pages container
      f7-pages
        // Initial page
        f7-page
[...]
```