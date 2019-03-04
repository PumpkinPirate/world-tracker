<template>
  <div class="encounter-list">
      <EncounterRow
          v-for="encounter in negativeEncounters"
          :key="encounter.id"
          :encounter="encounter" />
      <hr />
      <EncounterRow
          v-for="encounter in positiveEncounters"
          :key="encounter.id"
          :encounter="encounter" />
  </div>
</template>


<script>
import EncounterRow from '@/components/EncounterRow.vue'

function compareValue(a, b) {
    return a.value - b.value
}

export default {
  name: 'EncounterList',
  components: {EncounterRow},
  props: {
    encounters: Array
  },
  computed: {
      positiveEncounters: function() {
          var encs = this.encounters.filter(enc => enc.value > 0)
          encs.sort(compareValue)
          
          var end = 100
          for (var i=encs.length-1; i>=0; i--) {
              var enc = encs[i]
              enc.rangeEnd = end
              end -= enc.weight
              enc.rangeStart = end + 1
          }
          
          return encs
      },
      negativeEncounters: function() {
          var encs = this.encounters.filter(enc => enc.value < 0)
          encs.sort(compareValue)
          
          var start = 1
          for (var i=0; i<encs.length; i++) {
              var enc = encs[i]
              enc.rangeStart = start
              start += enc.weight
              enc.rangeEnd = start - 1
          }
          
          return encs
      }
  }
}
</script>


<style scoped>

</style>
