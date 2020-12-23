<script>
import {mapState, mapActions} from 'vuex'

export default {
	props:['comment'],
	// computed:{...mapState(['items'])},
	// methods: {...mapActions({more: 'increment'})},
}
</script>

<template lang="pug">
.comment
	.comment__info-box
		.comment__date {{comment.timestamp}}
		.comment__user {{comment.user_first_name}}
	.comment__content {{comment.text}}
</template>

<style lang="stylus" src="styles/index.styl"/>
