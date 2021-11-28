<template>
    <router-link :to='url' class="button" :class="includingStyle">{{ text }}</router-link>
</template>

<script>
    export default {
        props: {
            url: {
                required: true,
                type: String,
            },
            className: {
                type: String,
            },
            text: {
                required: true,
                type: String,
            }
        },

        computed: {
            includingStyle(){
                if(this.className == 'blue') return 'button-blue';
                if(this.className == 'white') return 'button-white';
            }
        }
    }
</script>

<style lang="scss">
    .button{
        padding: 8px 16px;
        border-radius: 4px;
        text-decoration: none;
        font-size: var(--font-16);
    }
    .large{
        width: auto;
        display: block;
        text-align: center;
    }
    .button-white{
        background: var(--white);
        color: var(--blue);
        text-decoration: underline !important;
        padding-left: 0;
    }
    .button-blue{
        background: var(--blue);
        color:var(--white);
        font-weight: var(--font-700);
        -webkit-transition: all .15s ease-in-out;
        transition: all .15s ease-in-out;
        &:hover{
            background: rgba(var(--blue), 0.7);
        }
    }
</style>
