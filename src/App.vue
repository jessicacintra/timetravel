<template>
  <div>
    <Header />
    <section id="trip-information" class="container">
      <div id="welcome-message">
        <h1>
          {{ welcome.text }} {{ welcome.name }}!!
        </h1>
        <p>
          {{ welcome.information }}
        </p>
      </div>
      <Card />
      <div id="terms-and-conditions">
        <label>
          <input type="checkbox" />
          <p>{{ welcome.termsAndConditionsText }}</p>
        </label>
      </div>
      <div id="checkout-buttons">
        <ButtonApp :href="welcome.cancelButton.url" :className="welcome.cancelButton.class" :text="welcome.cancelButton.text" />
        <ButtonApp :href="welcome.checkoutButton.url" :className="welcome.checkoutButton.class" :text="welcome.checkoutButton.text" />
      </div>
    </section>
    <Footer />
    </div>
</template>

<script>
import Header from './components/shared/Header/Header.vue';
import Footer from './components/shared/Footer/Footer.vue';
import ImageApp from './components/shared/ImageApp/ImageApp.vue';
import Card from './components/shared/Card/Card.vue';
import ButtonApp from './components/shared/ButtonApp/ButtonApp.vue';

  export default {
    components: {
      'Header': Header,
      'Footer': Footer,
      'ImageApp': ImageApp,
      'Card': Card,
      'ButtonApp': ButtonApp
    },
    data(){
      return {
        welcome: {
          text: 'Great',
          name: 'Laura',//API
          information: 'You have already selected all the data to make your trip, check them and have a good trip!',
          termsAndConditionsText: 'By proceeding, you agree to the Terms and Conditions',
          cancelButton: {
            url: '#',
            class: 'buttons button-white',
            text: 'Cancel'
          },
          checkoutButton: {
            url: '#',
            class: 'buttons button-blue',
            text: 'Proceed to checkout'
          }
        }
      }
    },
  }
</script>

<style lang="scss">
:root{
  --white: #ffffff;
  --blue: #0272D5;
  --medium-blue: #2C3357;
  --dark-blue: #2D2938;
  --light-grey: #C4C4C4;
  --light-green: #effdf7;
  --green: #0B8656;

  --font-32: 32px;
  --font-18: 18px;
  --font-16: 16px;
  --font-14: 14px;
  --font-12: 12px;

  --font-700: 700;
  --font-400: 400;
}
@font-face {
  font-family:CentraNube;
  src:url("//d26lpennugtm8s.cloudfront.net/assets/common/fonts/centranube-book-webfont.woff2") format("woff2"),
  url("//d26lpennugtm8s.cloudfront.net/assets/common/fonts/centranube-book-webfont.woff") format("woff");
  font-weight:400;
  font-style:normal;
  font-display:swap
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "CentraNube",arial,sans-serif;
  background: var(--white);
  color: var(--dark-blue);
}
.container{
  padding:15px 30px 15px 30px;
}
ul{
  list-style:none;
  margin: 0;
  padding: 0;
}
section {
  margin: 0;
  padding: 0;
  h1 {
  font-size: var(--font-32);
  font-weight: var(--font-700);
  }
  p{
  font-size: var(--font-16);
  font-weight: var(--font-400);
  }
}
#terms-and-conditions{
  padding: 15px 0;
  font-size: var(--font-16);
  color: var(--dark-blue);
  label{
    display:flex;
    flex-direction:row;
    input[type=checkbox] {
      margin: 0 8px 0 0;
      align-self: center;
      width: 28px;
      height: 28px;
    }
  }
}
#checkout-buttons{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
