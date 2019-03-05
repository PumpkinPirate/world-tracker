<template>
  <div class="encounter-list">
    <h2>{{ zone.name }}</h2>
    <label><input type="checkbox" v-model="editMode"> Edit</label>
    <EncounterRow v-for="encounter in encounters.negative"
      :key="encounter.id"
      :encounterId="encounter.id"
      :range="encounter.range"
      :editMode="editMode" />
    
    <hr />
    <EncounterRow v-for="encounter in encounters.positive"
      :key="encounter.id"
      :encounterId="encounter.id"
      :range="encounter.range"
      :editMode="editMode" />
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
  data() {return {editMode: false}},
  props: {zoneId: Number},
  
  methods: {
    encounterIsActive(encounter) {
      return !(encounter.completable && encounter.complete)
    }
  },
  
  computed: {
    zone() {
      return this.$store.state.zones[this.zoneId]
    },
    
    encounters() {
      var all = this.zone.encounters.map(id => ({
        ...this.$store.state.encounters[id],
        id
      }))
      all.sort(compareValue)
      
      var positive = all.filter(e => e.value > 0)
      var negative = all.filter(e => e.value < 0)
      
      var start = 1
      for (let i=0; i<negative.length; i++) {
        let enc = negative[i]
        if (this.encounterIsActive(enc)) {
          enc.range = {}
          enc.range.start = start
          start += enc.weight
          enc.range.end = start - 1
        }
      }
      
      var end = 100
      for (let i=positive.length-1; i>=0; i--) {
        let enc = positive[i]
        if (this.encounterIsActive(enc)) {
          enc.range = {}
          enc.range.end = end
          end -= enc.weight
          enc.range.start = end + 1
        }
      }
      
      return {positive, negative}
    }
  }
}
</script>


<style scoped>

</style>
