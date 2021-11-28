<template>
    <footer>
        <ul>
            <li v-for="items of footer.items">
                <ImageApp :url="items.url" :title="items.title" :alt="items.alt" :width="items.width" :height="items.height" />
                <span>{{ items.title }}</span>
            </li>
        </ul>
    </footer>
</template>

<script>
import ImageApp from '../ImageApp/ImageApp.vue';
    export default {
        components: {
            'ImageApp': ImageApp
        },
        data(){
            return {
                footer: {
                    items: [
                    {
                        url: 'https://d-makers.com.br/freelas/nuvemshop-teste/icons/home.svg',
                        title: 'Home',
                        width: '16.88',
                        height: '15.2'
                    },
                    {
                        url: 'https://d-makers.com.br/freelas/nuvemshop-teste/icons/travel.svg',
                        title: 'Trip',
                        width: '20.02',
                        height: '18'
                    },
                    {
                        url: 'https://d-makers.com.br/freelas/nuvemshop-teste/icons/inbox.svg',
                        title: 'Inbox',
                        width: '12.97',
                        height: '18'
                    }]
                }
            }
        }
    }
</script>

<style lang="scss">
footer{
    padding: 18px 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    bottom: 0;
    background: var(--white);
    position: fixed;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width:100%;
      li{
        display:flex;
        flex-direction: column;
        width:33.33%;
        align-items:center;
        font-size: 14px;
        font-weight: bold;
        img{
          margin-bottom: 4px;
        }
      }
    }
  }
</style>
