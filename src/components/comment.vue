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
		.comment__user {{comment.user.first_name}} {{comment.user.last_name}}
		.comment__date {{new Date(comment.timestamp).toLocaleString()}}
	.comment__content {{comment.text}}
</template>

<style scoped lang="stylus" src="styles/index.styl"/>
