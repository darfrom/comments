<script>
import {mapState, mapActions} from 'vuex'
import { defineComponent, ref } from 'vue'
import { ElInput, ElButton } from 'element-plus'

export default {
	// props:['comment'],
	// computed:{...mapState(['items'])},
	// methods: {...mapActions({more: 'increment'})},
	data(){return{
		first_name: null,
		last_name: null,
		text: null
	}},
	methods:{
		sendComment(){
			this.$store.dispatch('new_comment',{
				first_name: this.first_name,
				last_name: this.last_name,
				text: this.text
			})
			this.first_name = null
			this.last_name = null
			this.text = null
		}
	},
	components:{
		ElInput, ElButton
	}
}
</script>

<template lang="pug">
form.comment.new-box(@submit.prevent="sendComment")
	.comment__info-box.new
		.comment__user 
			el-input.input(placeholder="Имя", v-model="first_name", required=true)
		.comment__user 
			el-input.input(placeholder="Фамилия", v-model="last_name", required=true)
	.comment__content 
		| Комментарий:
		el-input(type="textarea",  :autosize="{ minRows: 2, maxRows: 4}",  placeholder="Введите текст",  v-model="text", required=true, maxlength="1000", show-word-limit)
	el-button.button(type="primary" native-type='submit' plain)
		| Отправить
</template>

<style scoped lang="stylus" src="styles/index.styl"/>
