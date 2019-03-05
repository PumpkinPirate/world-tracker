import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      encounters: {
          2: {name:'worse', description:'this is also an example',
              weight: 15, value :-2, completable: true, complete: false},
          3: {name:'bad', description:'this is an example',
              weight: 10, value: -1, completable: true, complete: false},
          1: {name:'worst', description:'this is an example',
              weight: 10, value: -3, completable: false, complete: false},
          5: {name:'better', description:'this is an example',
              weight: 10, value: 2, completable: false, complete: false},
          4: {name:'good', description:'this is also an example',
              weight: 15, value: 1, completable: false, complete: false},
          6: {name:'best', description:'this is also an example',
              weight: 15, value: 3, completable: true, complete: false},
          
          7: {name:'worse 2', description:'this is also an example',
              weight: 15, value :-2, completable: false, complete: false},
          8: {name:'bad 2', description:'this is an example',
              weight: 10, value: -1, completable: true, complete: false},
          9: {name:'worst 2', description:'this is an example',
              weight: 10, value: -3, completable: false, complete: false},
          10: {name:'better 2', description:'this is an example',
               weight: 10, value: 2, completable: true, complete: false},
          11: {name:'good 2', description:'this is also an example',
               weight: 15, value: 1, completable: false, complete: false},
          12: {name:'best 2', description:'this is also an example',
               weight: 15, value: 3, completable: true, complete: false}
      },
      
      zones: {
          1: {name: 'City', encounters:[1,2,3,4,5,6]},
          2: {name: 'Plains', encounters:[7,8,9,10,11,12]}
      },
      
  },
  getters: {
      
  },
  mutations: {

  },
  actions: {

  }
})
