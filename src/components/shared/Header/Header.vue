<template>
    <header class="container header">
      <div class="header__logo">
        <ImageApp :url="logo.url" :title="logo.title" :alt="logo.alt" :width="logo.width" :height="logo.height" />
      </div>
      <div class="header__user-actions">
        <ul>
          <li v-for="navigationItem of navigationItems">
            <router-link :to="navigationItem.link">
              <ImageApp :url="navigationItem.url" :title="navigationItem.title" :alt="navigationItem.alt" :width="navigationItem.width" :height="navigationItem.height" />
            </router-link>
          </li>
        </ul>
      </div>
    </header>
</template>

<script>
import ImageApp from '../ImageApp/ImageApp.vue';
    export default {
        components: {
            'ImageApp': ImageApp
        },
        data(){
            return {
                logo: {
                    url: 'https://d-makers.com.br/freelas/nuvemshop-teste/nuvemshop-white.svg',
                    title: 'Timetravel by nuvemshop',
                    width: '175',
                    height: '49'
                },
                navigationItems: [
                  {
                    url: 'https://d-makers.com.br/freelas/nuvemshop-teste/icons/user.svg',
                    title: 'User',
                    width: '16.24',
                    height: '23.25',
                    link: '/User'
                  },
                  {
                    url: 'https://d-makers.com.br/freelas/nuvemshop-teste/icons/config.svg',
                    title: 'Configuration',
                    width: '24',
                    height: '22.79',
                    link: 'Configuration'
                  }
                ],
            }
        }
    }
</script>

<style lang="scss">
  .header {
    background-color: var(--dark-blue);
    display:flex;
    flex-direction:row;
    padding-top:30px !important;
    &__logo {
      width:60%;
    }
    &__user-actions {
      width:40%;
      ul {
        height: 100%;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        gap: 28px;
      }
    }
  }
</style>