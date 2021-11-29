<template>
    <div>
        <section id="home" class="container">
          <h1>
              {{ home.text }} {{ home.name }}!!
          </h1>
          <ButtonApp :url="home.tripButton.url" className="blue" class="large" :text="home.tripButton.text" />
        </section>
    </div>
</template>

<script>
import ButtonApp from '../../components/shared/ButtonApp/ButtonApp.vue';
  export default {
    components: {
      'ButtonApp': ButtonApp
    },
    data(){
      return {
        home: {
          text: 'Welcome',
          name: 'Laura',//API
          tripButton: {
            url: '/Trip',
            text: 'Check your trips'
          }
        }
      }
    },
  }
</script>

<style lang="scss">

</style>
