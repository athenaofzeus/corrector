<template>
  <ul class="optionList">
    <li class="optionName"
    :value="idx"
    @click="chooseOption($event)"
    v-for="(item, idx) in $store.state.base"
    :key="idx">
    {{idx + 1}} : {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name : 'DataBase',
  methods : {
    chooseOption(e) {
        return this.$store.commit('increment', e.target.value)
    }
  }
}
</script>

<style>
.optionList {
  overflow-y: scroll;
  max-height: 150px;
  margin-top: 31px;
  margin-right: 1rem;
  padding-right: 1rem;
}
.optionName {
    list-style-type: none;
}
</style>