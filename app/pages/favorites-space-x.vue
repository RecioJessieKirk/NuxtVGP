<script lang="ts" setup>
const store = useFavorites()

const headers = [
	{ title: 'Rocket Name', key: 'rocket.rocket_name', sortable: false },
	{ title: 'Mission Name', key: 'mission_name', sortable: false },
	{ title: 'Launch Date', key: 'launch_date_local', sortable: false },
	{ title: 'Launch Site', key: 'launch_site.site_name', sortable: false },
	{ title: 'Status', key: 'launch_success', sortable: false },
	{ title: 'Favorite', key: 'actions', sortable: false },
]
</script>

<template>
	<v-container>
		<div class="d-flex justify-space-between align-center mb-4">
			<h1 class="text-h5">Favorites</h1>
			<v-btn color="red" variant="text" @click="store.clearFavorites()">Clear All</v-btn>
		</div>

		<v-data-table
			:headers="headers"
			:items="store.favorites"
			:hide-default-footer="true"
			items-per-page="-1"
		>
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
