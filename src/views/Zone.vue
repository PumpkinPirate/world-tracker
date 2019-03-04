<template>
  <div class="home">
    <EncounterList :zoneId="$route.params.zoneId" />
  </div>
</template>

<script>
// @ is an alias to /src
import EncounterList from '@/components/EncounterList.vue'

export default {
  name: 'zone',
  components: {EncounterList},
}
</script>
