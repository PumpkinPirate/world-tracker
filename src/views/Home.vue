<template>
  <div class="home">
    <EncounterList :encounters="encounters" />
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
  data: function () {
      return {
          encounters: [
              {id:2, name:'worse', description:'this is also an example', weight: 15, value :-2},
              {id:3, name:'bad', description:'this is an example', weight: 10, value: -1},
              {id:1, name:'worst', description:'this is an example', weight: 10, value: -3},
              {id:5, name:'better', description:'this is an example', weight: 10, value: 2},
              {id:4, name:'good', description:'this is also an example', weight: 15, value: 1},
              {id:6, name:'best', description:'this is also an example', weight: 15, value: 3}
          ]
      }
  }
}
</script>
