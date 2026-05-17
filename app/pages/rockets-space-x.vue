<template>
	<v-container v-for="rocket in rockets" :key="rocket.id">
		<p class="text-caption">Rocket</p>
		<h1 class="text-h4 font-weight-medium">{{ rocket.name }}</h1>

		<div class="d-flex ga-4 mb-4">
			<span class="text-body-2 text-medium-emphasis">First flight: {{ rocket.first_flight }}</span>
			<span>•</span>
			<span class="text-body-2 text-medium-emphasis">{{ rocket.stages }} stages</span>
		</div>

		<v-divider class="my-4" />

		<p class="text-body-1 text-medium-emphasis">{{ rocket.description }}</p>

		<v-divider class="my-4" />

		<v-row>
			<v-col cols="3">
				<v-sheet rounded color="surface-variant" class="pa-4 text-center">
					<p class="text-h6">{{ rocket.height.meters }}m</p>
					<p class="text-caption">Height</p>
				</v-sheet>
			</v-col>
			<v-col cols="3">
				<v-sheet rounded color="surface-variant" class="pa-4 text-center">
					<p class="text-h6">{{ rocket.diameter.meters }}m</p>
					<p class="text-caption">Diameter</p>
				</v-sheet>
			</v-col>
			<v-col cols="3">
				<v-sheet rounded color="surface-variant" class="pa-4 text-center">
					<p class="text-h6">{{ rocket.mass.kg }}kg</p>
					<p class="text-caption">Mass</p>
				</v-sheet>
			</v-col>
			<v-col cols="3">
				<v-sheet rounded color="surface-variant" class="pa-4 text-center">
					<p class="text-h6">{{ rocket.stages }}</p>
					<p class="text-caption">Stages</p>
				</v-sheet>
			</v-col>
		</v-row>

		<v-divider class="my-6" />
	</v-container>
</template>

<script lang="ts" setup>
const { rockets } = await useRockets()
</script>
