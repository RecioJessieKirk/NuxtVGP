<template>
	<v-container>
		<v-select v-model="selectedYear" :items="availableYears" clearable />
		<div class="d-flex justify-end">
			<v-btn-toggle v-model="sortOrder" mandatory>
				<v-btn value="asc" variant="outlined">ASC</v-btn>
				<v-btn value="dsc" variant="outlined">DSC</v-btn>
			</v-btn-toggle>
		</div>

		<v-data-table :headers="headers" :items="sortedLaunch">
			<template #[`item.launch_success`]="{ item }">
				<v-chip :color="item.launch_success ? 'green' : 'red'" size="small">
					{{ item.launch_success ? 'Success' : 'Failed' }}
				</v-chip>
			</template>
			<template #expanded-row="{ item }">
				<tr>
					<td :colspan="headers.length" class="pa-4">{{ item.mission_name }}</td>
				</tr>
			</template>
			<template #[`item.actions`]="{ item }">
				<v-btn
					:color="store.favorites.some((l) => l.id === item.id) ? 'yellow' : 'grey'"
					variant="text"
					@click="store.addFavorites(item)"
				>
					<template #prepend>
						<img src="../imgs/favorite.svg" alt="icon" class="btn-icon" />
					</template>
				</v-btn>
			</template>
		</v-data-table>
	</v-container>
</template>
<script lang="ts" setup>
const { selectedYear, availableYears, sortedLaunch, sortOrder } = await useLaunches()

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
