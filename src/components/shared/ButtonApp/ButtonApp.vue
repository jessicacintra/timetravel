<template>
    <a :href='url' :class='className'>{{ text }}</a>
</template>

<script>
    export default {
        props: ['url', 'className', 'text']
    }
</script>

<style lang="scss">
    .buttons{
        padding: 8px 16px;
        border-radius: 4px;
        text-decoration: none;
        font-size: var(--font-16);
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
