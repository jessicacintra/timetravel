<template>
    <div>
        <section id="user" class="container">
            <h1>
                User
            </h1>
            <p>
                <strong>Your name:</strong> Laura
            </p>
            <p>
                <strong>Your e-mail</strong> laura.keller@gmail.com
            </p>
            <ButtonApp url="/" className="blue" class="large" text="Return to home" />
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
