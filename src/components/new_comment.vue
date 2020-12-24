<script>
import {mapState, mapActions} from 'vuex'
import { defineComponent, ref } from 'vue'
import { ElInput } from 'element-plus'

export default {
	// props:['comment'],
	// computed:{...mapState(['items'])},
	// methods: {...mapActions({more: 'increment'})},
	data(){return{
		first_name: null,
		last_name: null,
		text: null
	}},
	components:{
		ElInput
	}
}
</script>

<template lang="pug">
.comment
	.comment__info-box.new
		.comment__user 
			el-input.input(placeholder="Имя", v-model="first_name")
		.comment__user 
			el-input.input(placeholder="Фамилия", v-model="last_name")
	.comment__content 
		| Комментарий:
		el-input(type="textarea",  :autosize="{ minRows: 2, maxRows: 4}",  placeholder="Введите текст",  v-model="text")
	button.send
		| Отправить
</template>

<style scoped lang="stylus" src="styles/index.styl"/>
