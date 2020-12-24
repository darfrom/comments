<script>
import {mapState, mapActions} from 'vuex'

export default {
	// props:['comment'],
	// computed:{...mapState(['items'])},
	// methods: {...mapActions({more: 'increment'})},
}
</script>

<template lang="pug">
.comment
	.comment__info-box
		.comment__user 
			| Ваше имя:
			input.input
	.comment__content 
		| Комментарий:
		textarea
	button.send
		| Отправить
</template>

<style scoped lang="stylus" src="styles/index.styl"/>
