<template>
    <div>
        <section id="trip-information" class="container">
        <div id="success-page">
            <h1>
            {{ success.text }} {{ success.name }}!!
            </h1>
            <p>
            {{ success.information }}
            </p>
        </div>
        <Card />
        <div id="terms-and-conditions">
            <label>
            <input type="checkbox" />
            <p>{{ success.termsAndConditionsText }}</p>
            </label>
        </div>
        <div id="checkout-buttons">
            <ButtonApp :url="success.cancelButton.url" className="white" :text="success.cancelButton.text" />
            <ButtonApp :url="success.checkoutButton.url" className="blue" :text="success.checkoutButton.text" />
        </div>
        </section>
    </div>
</template>

<script>
import ImageApp from '../../components/shared/ImageApp/ImageApp.vue';
import Card from '../../components/shared/Card/Card.vue';
import ButtonApp from '../../components/shared/ButtonApp/ButtonApp.vue';

  export default {
    components: {
      'ImageApp': ImageApp,
      'Card': Card,
      'ButtonApp': ButtonApp
    },
    data(){
      return {
        success: {
          text: 'Great',
          name: 'Laura',//API
          information: 'You have already selected all the data to make your trip, check them and have a good trip!',
          termsAndConditionsText: 'By proceeding, you agree to the Terms and Conditions',
          cancelButton: {
            url: '/',
            text: 'Cancel'
          },
          checkoutButton: {
            url: '/Checkout',
            text: 'Proceed to checkout'
          }
        }
      }
    },
  }
</script>

<style lang="scss">
#trip-information {
    background: linear-gradient(180deg, var(--dark-blue) 332px, var(--white) 332px);
    color: var(--white);
    margin-top: -1px;
    padding-bottom: 130px;
    h1 {
      margin-bottom: 0;
    }
    p {
      font-size: var(--font-18);
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
