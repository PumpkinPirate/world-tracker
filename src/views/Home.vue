<template>
  <div class="home">
    <span v-for="(zone, zoneId) in zones" :key="zoneId">
      <router-link :to="{ name: 'zone', params: { zoneId: zoneId }}">
        {{ zone.name }}
      </router-link> | 
    </span>
  </div>
</template>

<script>
// @ is an alias to /src
import EncounterList from '@/components/EncounterList.vue'

export default {
  name: 'home',
  components: {
    EncounterList
  },
  computed: {
    zones() {
        return this.$store.state.zones
    }
  }
}
</script>
