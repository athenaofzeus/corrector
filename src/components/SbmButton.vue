<template>
  <!-- <button @click.prevent="clickHandler">Submit</button> -->
  <button @click.prevent="clickHandler" type="submit" class="btn btn-primary btnCustom">Submit</button>
</template>

<script>
export default {
    name: 'SbmButton',
    methods : {
        clickHandler() {
            this.$store.commit('customOption');
        }
    }
}
</script>

<style>
.btnCustom:hover {
    background-color: cornflowerblue;
}
.btnCustom {
    transition: background-color 1s;
}
</style>