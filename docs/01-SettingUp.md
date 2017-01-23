# Setting up environment

As [Vladimir Kharlampidi](https://github.com/nolimits4web), creator of [Framewok7](http://framework7.io), decided to go foward with [vue.js](http://vuejs.org), I would like to try to change my development process to vue.js and web components.

After some reads over the net on Vue.js, I choose to start this librairy using tools provide with it. So I setup my environment using [vue-cli](https://github.com/vuejs/vue-cli)

Just:

    npm install vue-cli -g

and i'm ready to go

## init projet

vue-cli uses templates to init your project. As I have try webpack without success for the moment, I think it was time to go futher with it.

    vue init webpack hackernews7v

just continue with instructions given and I 'm almost set.

## adding extra dev tools

I prefer to code using [pug.js](http://pugjs.org). Adding it to the project is so simple :

    npm install pug --save-dev

and it's done.

## adding Framework7 librairies

`npm install framework7 framework7-vue --save`

done too !

## integration

to powered my project using Framework7, I add librairies into main.js file into src/ and "bind" framework7 to the root element.

```javascript
// import Framework7 librairies
import 'framework7'
import Framework7Vue from 'framework7-vue'

// Enable Framework7 plugin in Vue.js
Vue.use(Framework7Vue)

[...]

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  framework7: {
    root: '#app'
  }
})
```

now I can modify the main App component to fit with pug and framework7 styles. this is what my App.vue looks like:

```javascript
<template lang="pug">
#app
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src='framework7/dist/css/framework7.ios.css'></style>
<style src='framework7/dist/css/framework7.ios.colors.css'></style>
```

And that's it. My project is initialized.