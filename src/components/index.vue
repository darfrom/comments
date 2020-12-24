<script>
import {mapState, mapActions} from 'vuex'
import Comment from './comment.vue'
import NewComment from './new_comment.vue'

export default {
	computed:{...mapState(['items', 'comments'])},
	methods: {...mapActions({more: 'increment'})},
	components:{
		Comment,
		NewComment
	}
}
</script>

<template lang="pug">
.comments-box
	.main-title
		| Комментарии
	//- .example(v-for='item in items') {{$t('hello')}}, {{item}}
	comment(v-for='comment in comments', :comment="comment")
	new-comment
</template>

<style scoped lang="stylus" src="styles/index.styl"/>
