<script lang="ts" setup>
const store = useFavorites()

const headers = [
	{ title: 'Rocket Name', key: 'rocket.rocket_name' },
	{ title: 'Mission Name', key: 'mission_name' },
	{ title: 'Launch Date', key: 'launch_date_local' },
	{ title: 'Launch Site', key: 'launch_site.site_name' },
	{ title: 'Status', key: 'launch_success' },
	{ title: 'Favorite', key: 'actions' },
]
</script>

<template>
	<v-container>
		<div class="d-flex justify-space-between align-center mb-4">
			<h1 class="text-h5">Favorites</h1>
			<v-btn color="red" variant="text" @click="store.clearFavorites()">Clear All</v-btn>
		</div>

		<v-data-table :headers="headers" :items="store.favorites">
			<template #[`item.launch_success`]="{ item }">
				<v-chip :color="item.launch_success ? 'green' : 'red'" size="small">
					{{ item.launch_success ? 'Success' : 'Failed' }}
				</v-chip>
			</template>

			<template #[`item.actions`]="{ item }">
				<v-btn icon="mdi-delete" variant="text" color="red" @click="store.removeFavorites(item.id)" />
			</template>
		</v-data-table>
	</v-container>
</template>
