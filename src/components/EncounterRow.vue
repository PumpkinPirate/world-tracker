<template>
  <div class="encounter-row">
    
    <div class="encounter-edit" v-if="editMode">
      <h3>
        <input type="text" v-model.number="encounter.weight">
        <input type="text" class="name" v-model="encounter.name">
        <input type="checkbox" v-model="encounter.completable" title="Completable">
      </h3>
      <p>
        <textarea v-model="encounter.description" />
      </p>
    </div>
    
    
    <div class="encounter-view" v-else>
      <h3>
        <span v-if="range"> {{ range.start }}-{{ range.end }}</span>
        <span v-else> &mdash; </span>
        <span class="name">{{ encounter.name }}</span>
        <input type="checkbox" v-if="encounter.completable" v-model="encounter.complete" title="Complete">
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
    padding: 0 10px;
}

h3 {
  display: grid;
  grid-template-columns: 5em 1fr 2em;
  justify-items: fill;
}

input, textarea {
  font: inherit;
  width: 95%;
}

.name {
  text-align: center;
}
</style>
