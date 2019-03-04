<template>
  <div class="encounter-list">
      <h2>{{ zone.name }}</h2>
      <EncounterRow
          v-for="encounter in encounters.negative"
          :key="encounter.id"
          :encounterId="encounter.id"
          :range="encounter.range" />
      <hr />
      <EncounterRow
          v-for="encounter in encounters.positive"
          :key="encounter.id"
          :encounterId="encounter.id"
          :range="encounter.range" />
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
  props: {zoneId: Number},
  
    computed: {
        zone() {
            return this.$store.state.zones[this.zoneId]
        },
        
        encounters() {
            var all = this.zone.encounters.map(id => ({
                weight: this.$store.state.encounters[id].weight,
                value: this.$store.state.encounters[id].value,
                id
            }))
            all.sort(compareValue)
            
            var positive = all.filter(e => e.value > 0)
            var negative = all.filter(e => e.value < 0)
            
            var start = 1
            for (let i=0; i<negative.length; i++) {
                let enc = negative[i]
                enc.range = {}
                enc.range.start = start
                start += enc.weight
                enc.range.end = start - 1
            }
            
            var end = 100
            for (let i=positive.length-1; i>=0; i--) {
                let enc = positive[i]
                enc.range = {}
                enc.range.end = end
                end -= enc.weight
                enc.range.start = end + 1
            }
            
            return {positive, negative}
        }
    }
}
</script>


<style scoped>

</style>
