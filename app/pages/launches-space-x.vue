<template>
	<v-app class="space-bg-global-2">
		<v-main>
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
				</v-data-table>
				<!-- <div class="d-flex justify-end">
					<v-btn-toggle v-model="sortOrder" mandatory>
						<v-btn value="asc">ASC</v-btn>
						<v-btn value="desc">DSC</v-btn>
					</v-btn-toggle>
				</div> -->
			</v-container>
		</v-main>
	</v-app>
</template>
<script lang="ts" setup>
const { selectedYear, availableYears, sortedLaunch, sortOrder } = await useLaunches()
// const { selectedYear, availableYears, filteredLaunches, sortedLaunches, sortOrder } = await useLaunches()

const headers = [
	{ title: 'Rocket Name', key: 'rocket.rocket_name' },
	{ title: 'Mission Name', key: 'mission_name' },
	{ title: 'Launch Date', key: 'launch_date_local' },
	{ title: 'Launch Site', key: 'launch_site.site_name' },
	{ title: 'Status', key: 'launch_success' },
]
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
