<template>
    <v-footer class="pa-3" app>
        <v-spacer></v-spacer>
        <div>Curso Vue &copy; {{ new Date().getFullYear() }}</div>
	</v-footer>
</template>

<script>
export default {
    data() {
		return {
			itensMenu: [
				{titulo: 'Início', icon: 'dashboard'},
				{titulo: 'Sobre', icon: 'question_answer'}
			],
		}
	},
}
</script>
