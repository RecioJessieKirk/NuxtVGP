<template>
	<v-app class="space-bg-global">
		<div class="d-flex align-center h-screen">
			<div class="d-flex justify-center">
				<img src="../imgs/astronaut.svg" alt="astronaut" class="floating" />
			</div>
			<div class="d-flex flex-column text-right justify-center" justify-content="center">
				<p class="font-weight-semibold text-display-small custom-title-large">SpaceX Project API</p>
				<p class="custom-subtitle-small">Your gateway to SpaceX launch data and mission details</p>
				<div class="d-flex justify-center ma-3">
					<v-btn
						class="spacex-start text-white"
						variant="tonal"
						rounded="lg"
						to="launches-space-x/"
					>
						Start Exploring
					</v-btn>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<style scoped>
.space-bg-global {
	background-image: linear-gradient(180deg, #000000 0%, #ffebcd 98.22%, #ffffff 130.96%);
}

.floating {
	animation: float 3s ease-in-out infinite;
}
@keyframes float {
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-20px);
	}
	100% {
		transform: translateY(0px);
	}
}

.custom-title-large {
	font-size: 3.125rem;
}

.custom-subtitle-small {
	font-size: 1.625rem;
}

.spacex-start {
	padding: 0.625rem 1.25rem;
	background-color: #2b1e1a;
}

p {
	color: white;
}
</style>
