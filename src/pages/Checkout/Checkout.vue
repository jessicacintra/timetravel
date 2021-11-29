<template>
    <div>
        <section id="checkout" class="container">
          <h1>
              {{ checkout.text }}!!
          </h1>
          <p>
              {{ checkout.confirmedText }}
          </p>
          <ButtonApp :url="checkout.homeButton.url" className="blue" class="large" :text="checkout.homeButton.text" />
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
        checkout: {
          text: 'Congratulations',
          confirmedText: 'Your trip is confirmed!',
          homeButton: {
            url: '/',
            text: 'Return to Home'
          }
        }
      }
    },
  }
</script>

<style lang="scss">

</style>
