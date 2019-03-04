<template>
  <div class="encounter-row">
    <h3>{{ encounter.rangeStart}}-{{ encounter.rangeEnd}} &mdash; {{ encounter.name }}</h3>
    <p>
      {{ encounter.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'EncounterRow',
  props: {
    encounter: Object
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
