<script>
import {mapState, mapActions} from 'vuex'
import Comment from './comment.vue'
import NewComment from './new_comment.vue'
import 'element-plus/lib/theme-chalk/index.css';
// import '../theme/index.css'

export default {
	computed:{...mapState(['items', 'comments'])},
	methods: {...mapActions({more: 'increment'})},
	created(){
		this.$store.dispatch('init')
	},
	components:{
		Comment,
		NewComment
	},
}
</script>

<template lang="pug">
.comments-box
	.main-title Комментарии
	.coments-box__box
		comment(v-for='comment in comments', :comment="comment")
	new-comment
</template>

<style scoped lang="stylus" src="styles/index.styl"/>
