<template>
	<v-app class="space-bg-global-2">
		<v-main>
			<v-container>
				<v-data-table :headers="headers" :items="launches">
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
			</v-container>
		</v-main>
	</v-app>
</template>
<script lang="ts" setup>
const { launches } = await useLaunches()

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
