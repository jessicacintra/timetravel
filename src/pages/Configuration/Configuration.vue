<template>
    <div>
        <section id="configuration" class="container">
            <h1>
                Configurations
            </h1>
            <p>
                <u>Your configurations are:</u>
            </p>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
            <p>
              <ButtonApp url="/" className="blue" class="large" text="Return to home" />
            </p>
        </section>
    </div>
</template>

<script>
import ButtonApp from '../../components/shared/ButtonApp/ButtonApp.vue';
  export default {
    components: {
      'ButtonApp': ButtonApp
    }
  }
</script>

<style lang="scss">

</style>
