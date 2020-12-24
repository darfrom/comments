import {createStore} from 'vuex'

export default createStore({
	state(){
		return {
			items:[1,2,3,4],
			comments:[
				{
					"id": 8,
					"page": {
						"id": 9,
						"url": "/test4"
					},
					"user": {
						"id": 0,
						"first_name": "Ivan",
						"last_name": "Ivanov"
					},
					"timestamp": "2020-12-23T23:23:39.194864Z",
					"text": "New comment2222",
					"status": "deleted",
					"important": false
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

