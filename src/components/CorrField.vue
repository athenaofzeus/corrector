<template>
  <form class="formBox">
    <div class="mb-3">
        <div class="form-label headName">{{ $store.state.name }}</div>
        <label class="form-label headName">Edit field 'Value':</label>
        <input type="text" :placeholder="$store.state.base[0].value" v-model="$store.state.shownOptionValue" class="form-control headName">
  </div>
  <SbmButton />
  </form>
</template>

<script>
import SbmButton from './SbmButton.vue'
export default {
    name: 'CorrWindow',
    components : {
        SbmButton
    }
}
</script>

<style>
.formBox {
    display: flex;
    flex-direction: column;
}
.headName {
    min-height: 24px;
}
</style>