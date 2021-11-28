<template>
    <div>
        <section id="trip" class="container">
            <div id="welcome-message">
                <h1>
                Your Trips
                </h1>
                <div class="trip-list-item" v-for="trip of trip.destinations">
                    <router-link :to="trip.url">{{ trip.text }}</router-link>
                </div>
                <ButtonApp :url="trip.cancelButton.url" className="blue" class="large" :text="trip.cancelButton.text" />
            </div>
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
        trip: {
          text: 'Trip',
          destinations: [
            {
                url: '/Success',
                text: 'Paris - France'
            },
            {
                url: '/Success',
                text: 'Madrid - Spain'
            }
          ],
          cancelButton: {
            url: '/',
            text: 'Return to Home'
          }
        }
      }
    },
  }
</script>

<style lang="scss">
    .trip-list-item {
        background: var(--light-green);
        width:auto;
        border: solid 1px var(--green);
        padding: 8px;
        border-radius:4px;
        margin-bottom: 15px;
        a {
            text-decoration: none;
            color: var(--green);
            font-size: var(--font-18);
            display:block;
        }
    }
</style>
