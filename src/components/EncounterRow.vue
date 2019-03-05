<template>
  <div class="encounter-row">
    
    <div class="encounter-edit" v-if="editMode">
      <h3>
        <input type="text" v-model.number="encounter.weight"> &mdash;
        <input type="text" v-model="encounter.name">
        <input type="checkbox" v-model="encounter.completable">
      </h3>
      <p>
        <textarea v-model="encounter.description" />
      </p>
    </div>
    
    
    <div class="encounter-view" v-else>
      <h3>
        <span v-if="range"> {{ range.start }}-{{ range.end }} &mdash; </span>
        {{ encounter.name }}
        <input type="checkbox" v-if="encounter.completable" v-model="encounter.complete">
      </h3>
        
      <p>
        {{ encounter.description }}
      </p>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'EncounterRow',
  props: {encounterId: Number, range: Object, editMode:Boolean},
  
  computed: {
      encounter() {
          return this.$store.state.encounters[this.encounterId]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.encounter-row {
    border: 2px solid black;
    margin: 20px;
}
</style>
