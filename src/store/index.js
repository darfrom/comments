import {createStore} from 'vuex'

export default createStore({
  state(){
    return {
      items:[1,2,3,4],
      comments:[
        {
          "id":2,
          "page_id":"",
          "page_url":"/test",
          "user_id":1,
          "user_first_name":"Ivan",
          "user_last_name":"Ivanov",
          "timestamp":"2020-12-22T01:52:29.418263Z",
          "text":"My first comment!",
          "status":"published"
        },
        {
          "id":4,
          "page_id":"",
          "page_url":"/test",
          "user_id":2,
          "user_first_name":"Masha",
          "user_last_name":"Ivanov",
          "timestamp":"2020-12-22T01:58:29.418263Z",
          "text":"My first comment!",
          "status":"published"
        }
      ]
    }
  },
  mutations:{
    _inc(state) {
      state.items.push(state.items.length + 1)
    }
  },
  actions:{
    increment({commit}){ commit('_inc') }
  }
})

