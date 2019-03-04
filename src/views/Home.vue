<template>
  <div class="home">
    <EncounterList :zoneId="1" />
  </div>
</template>

<script>
// @ is an alias to /src
import EncounterList from '@/components/EncounterList.vue'

export default {
  name: 'home',
  components: {
    EncounterList
  }
}
</script>
