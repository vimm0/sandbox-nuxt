<template>
  <section class="container">
    <div>
      <logo/>
      <img src="vue.png" alt="from-static-folder">
      <img :src="require('assets/vue.png')" alt="from-assets-folder"/>

      <h1 class="title">
        Hello world
      </h1>
      <nuxt-link to="/extra">Extra</nuxt-link>
      <h2 class="subtitle">
        My peachy Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style>

</style>
