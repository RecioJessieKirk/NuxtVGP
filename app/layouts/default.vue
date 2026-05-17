<template>
	<v-app class="space-bg-global-2">
		<Navbar />
		<v-main style="min-height: 100vh">
			<slot />
		</v-main>
		<Footer />
	</v-app>
</template>
<script setup>
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
</script>

<style scoped>
.space-bg-global-2 {
	background-image: radial-gradient(
		117.04% 117.04% at 50% -17.04%,
		#ffffff 0%,
		#fff5e6 44.71%,
		#ffebcd 100%
	);
}
</style>
