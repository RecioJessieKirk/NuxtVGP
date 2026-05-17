<template>
	<v-app class="space-bg-global-2">
		<v-main>
			<Navbar />

			<slot />
		</v-main>
	</v-app>
</template>
<script setup>
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
