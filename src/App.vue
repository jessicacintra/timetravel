<template>
  <div>
    <Header />
    <section>
        <router-view></router-view>
    </section>
    <Footer />
    </div>
</template>

<script>
import Header from './components/shared/Header/Header.vue';
import Footer from './components/shared/Footer/Footer.vue';

  export default {
    components: {
      'Header': Header,
      'Footer': Footer
    }
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
  src:url("//d26lpennugtm8s.cloudfront.net/assets/common/fonts/centranube-book-webfont.woff2") format("woff2"), url("//d26lpennugtm8s.cloudfront.net/assets/common/fonts/centranube-book-webfont.woff") format("woff");
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
  .animationPage-enter, .animationPage-leave-active{
    opacity: 0;
  }
  .animationPage-enter-active, .animationPage-leave-active{
    transition: ease .4s;
  }
  transition{
    margin: 0;
    padding: 0;
    height:0;
  }
}
</style>
