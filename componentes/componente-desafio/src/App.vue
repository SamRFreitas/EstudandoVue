<template>
	<v-app>
		<!-- Menu -->
		<app-navigation/>
		
		<!-- Conteúdo -->
		<app-toolbar/>
		<v-content>
			<app-carousel/>
		</v-content>
		
		<!-- Rodapé -->
		<app-footer/>
	</v-app>
</template>

<script>

import Navigation from './Navigation.vue'
import Footer from './Footer.vue'
import Carousel from './Carousel.vue'
import Toolbar from './Toolbar'

export default {
	components:{
		'app-navigation': Navigation,
		'app-footer': Footer,
		'app-carousel': Carousel,
		'app-toolbar': Toolbar
	}
}

</script>
