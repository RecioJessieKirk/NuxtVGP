<template>
	<v-container>
		<v-select v-model="selectedYear" :items="availableYears" clearable />
		<div class="d-flex justify-end">
			<v-btn-toggle v-model="sortOrder" mandatory @update:model-value="console.log(sortOrder)">
				<v-btn value="asc" variant="outlined" stacked>
					<img src="../imgs/launches.svg" class="asc-icon" />
					Ascending
				</v-btn>
				<v-btn value="dsc" variant="outlined" stacked>
					<img src="../imgs/launches.svg" class="asc-icon dsc-icon" />
					Descending
				</v-btn>
			</v-btn-toggle>
		</div>

		<v-data-table
			:headers="headers"
			:items="sortedLaunch"
			:hide-default-footer="true"
			items-per-page="-1"
			hover
			@click:row="(_: { _: Launches }, { item }: { item: Launches }) => openDialog(item)"
		>
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
					@click.stop="store.addFavorites(item)"
				>
					<template #prepend>
						<img src="../imgs/favorite.svg" alt="icon" class="btn-icon" />
					</template>
				</v-btn>
			</template>
		</v-data-table>

		<v-dialog v-model="dialog" max-width="500">
			<v-card class="pa-4">
				<v-card-title>{{ selectedLaunch?.mission_name }}</v-card-title>
				<v-card-text>
					<p>{{ selectedLaunch?.details ?? '--' }}</p>
				</v-card-text>
				<v-card-actions>
					<v-btn @click="dialog = false">Close</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>
<script lang="ts" setup>
import type { Launches } from '~/types/launches'

const { selectedYear, availableYears, sortedLaunch, sortOrder } = await useLaunches()
const { dialog, selectedLaunch, openDialog } = await useDialog()

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
<style>
.v-data-table th {
	font-weight: 700 !important;
}
.v-data-table,
.v-data-table__wrapper,
.v-table__wrapper {
	background: transparent !important;
}

.asc-icon {
	width: 1.25rem;
	height: 1.25rem;
}

.dsc-icon {
	transform: rotate(180deg);
}
</style>
