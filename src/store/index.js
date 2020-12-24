import {createStore} from 'vuex'

export default createStore({
	state(){
		return {
			items:[1,2,3,4],
			comments: []
			// comments:[
			// 	{
			// 		"id": 8,
			// 		"page": {
			// 			"id": 9,
			// 			"url": "/test4"
			// 		},
			// 		"user": {
			// 			"id": 0,
			// 			"first_name": "Ivan",
			// 			"last_name": "Ivanov"
			// 		},
			// 		"timestamp": "2020-12-23T23:23:39.194864Z",
			// 		"text": "New comment2222",
			// 		"status": "deleted",
			// 		"important": false
			// 	}
			// ]
		}
	},
	mutations:{
		async _inc(state) {
			const companyid = "0"
			const url = "/test"
			const comments =  await fetch(`http://localhost:9000/pagecomments/?companyid=${companyid}&url=${url}`)
			state.comments.push(comments)
		}
	},
	actions:{
		increment({commit}){ commit('_inc')},
		// newcomment()
		// localhost:9000/pagecomments/newcomment
	}
})

