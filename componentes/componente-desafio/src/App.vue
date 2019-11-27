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

import Navigation from '@/components/template/Navigation.vue'
import Footer from '@/components/template/Footer.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Toolbar from '@/components/template/Toolbar.vue'

export default {
	components:{
		'app-navigation': Navigation,
		'app-footer': Footer,
		'app-carousel': Carousel,
		'app-toolbar': Toolbar
	}
}

</script>
