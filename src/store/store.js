import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
        choosedId : 0,
        name : '',
        shownOptionValue : '',
        base: [
            {
              "name": "foo1",
              "value": "bar1",
            },
            {
              "name": "foo2",
              "value": "bar2",
            },
            {
              "name": "foo3",
              "value": "bar3",
            },
            {
              "name": "foo4",
              "value": "bar4",
            },
            {
              "name": "foo5",
              "value": "bar5",
            },
            {
              "name": "foo6",
              "value": "bar6",
            },
            {
              "name": "foo7",
              "value": "bar7",
            },
            {
              "name": "foo8",
              "value": "bar8",
            },
            {
              "name": "foo9",
              "value": "bar9",
            },
            {
              "name": "foo10",
              "value": "bar10",
            },
            {
              "name": "foo11",
              "value": "bar11",
            },
            {
              "name": "foo12",
              "value": "bar12",
            },
            {
              "name": "foo13",
              "value": "bar13",
            },
            {
              "name": "foo14",
              "value": "bar14",
            },
            {
              "name": "foo15",
              "value": "bar15",
            },
            {
              "name": "foo16",
              "value": "bar16",
            },
            {
              "name": "foo17",
              "value": "bar17",
            },
            {
              "name": "foo18",
              "value": "bar18",
            },
            {
              "name": "foo19",
              "value": "bar19",
            },
            {
              "name": "foo20",
              "value": "bar20",
            },
            {
              "name": "foo21",
              "value": "bar21",
            }
        ]
    }
  },
  getters : {
  },
  mutations : {
    increment (state, id) {
      state.choosedId = id
      state.name = state.base[state.choosedId].name
      state.shownOptionValue = state.base[state.choosedId].value
    },
    customOption (state) {
      state.base[state.choosedId].value = state.shownOptionValue
    }
  },
  actions : {

  }

})

export default store