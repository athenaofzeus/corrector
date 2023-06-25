<template>
  <div class="workSpace">
    <h2>Edit your JSON structure</h2>
    <div class="editBox">
      <DataBase></DataBase>
      <CorrWindow />
    </div>
  </div>
</template>

<script>
import DataBase from './components/Data'
import CorrWindow from './components/CorrField.vue'
export default {
  components : {
    DataBase,
    CorrWindow
  },
  methods : {
  }
}
</script>

<style>
* {
  margin: 0 auto;
}
.workSpace {
  box-shadow: 0 0 5px royalblue;
  background-color: #4682b42b;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  max-width: 600px;
  margin-top: 10vh;
  padding: 75px;
  
}
.editBox {
  display: flex;
  flex-direction: row;
}
</style>