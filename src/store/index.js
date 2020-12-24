import {createStore} from 'vuex'
import { ElMessage } from 'element-plus';

export default createStore({
	state(){
		return {
			items:[1,2,3,4],
			companyid: "0",
			url: "/test",
			comments: [],
			// error: null
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
					if (x.comment.status == "published"){
						commit('_add_comment', x.comment)
						ElMessage.success("Ваш комментарий добавлен!")
					}
					else  {
						ElMessage.success("Ваш комментарий отправлен! Комментарий будет опубликован после проверки модератором!")
					}
				})
				.catch(res => {
					ElMessage.error("Произошла непредвиденная ошибка, повторите позже!")
				})
		}
	}
})

