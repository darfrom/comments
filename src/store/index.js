import {createStore} from 'vuex'

export default createStore({
	state(){
		return {
			items:[1,2,3,4],
			companyid: "0",
			url: "/test",

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
		async _init(state, comments) {			
			state.comments = comments
		},
		_add_comment(state, comment) {
			state.comments.push(comment)
		}

	},
	actions:{
		async init({state, commit}){ 
			const comments =  await fetch(`//localhost:9000/pagecomments/?companyid=${state.companyid}&url=${state.url}`)
				.then(x => x.json())

			commit('_init', comments.comments)
		},
		new_comment({state, commit}, comment){
			const jBody = JSON.stringify({
					company_id: state.companyid,
					url: state.url,
					first_name: comment.first_name,
					last_name: comment.last_name,
					text: comment.text
				})
			fetch(`//localhost:9000/pagecomments/newcomment/noauth`,{
				    headers: {
				      'Accept': 'application/json',
				      'Content-Type': 'application/json'
				    },
				    method: "POST",
				    body: jBody
				})
				.then(x => 
					x.ok ? x.json() : x.json().then(err => Promise.reject(err) )
				)
				.then(x => {
					// console.log('abc', x)
					// this.item.name = x.name
					// this.loading = false
					commit('_add_comment', x.comment)
				})
				.catch(res => {
					// this.loading = false;
					// this.errorCurrent = true;
					// this.error(res) 
					alert("error")
				})
			// const comments =  await fetch(`http://localhost:9000/pagecomments/?companyid=${companyid}&url=${url}`)
		}
	}
})

