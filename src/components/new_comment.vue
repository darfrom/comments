<script>
import {mapState, mapActions} from 'vuex'
import { defineComponent, ref } from 'vue'
import { ElInput } from 'element-plus'

export default {
	// props:['comment'],
	// computed:{...mapState(['items'])},
	// methods: {...mapActions({more: 'increment'})},
	data(){return{
		name: null,
		comment: null
	}},
	components:{
		ElInput
	}
}
</script>

<template lang="pug">
.comment
	.comment__info-box
		.comment__user 
			| Ваше имя:
			el-input.input(placeholder="Please input", v-model="name")
	.comment__content 
		| Комментарий:
		el-input(type="textarea",  :autosize="{ minRows: 2, maxRows: 4}",  placeholder="Please input",  v-model="comment")
	button.send
		| Отправить
</template>

<style scoped lang="stylus" src="styles/index.styl"/>
