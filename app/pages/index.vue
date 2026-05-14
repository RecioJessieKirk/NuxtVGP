<template>
	<v-app class="space-bg-global">
		<v-main>
			<div class="d-flex align-center h-screen">
				<div class="d-flex justify-center">
					<img src="../imgs/astronaut.svg" alt="" srcset="" />
				</div>
				<div class="d-flex flex-column text-right justify-center" justify-content="center">
					<p class="font-weight-semibold text-display-small custom-title-large">
						SpaceX Project API
					</p>
					<p class="custom-subtitle-small">
						Your gateway to SpaceX launch data and mission details
					</p>
					<div class="d-flex justify-center ma-3">
						<button class="btn-start">Start Exploring</button>
					</div>
				</div>
			</div>
		</v-main>
	</v-app>
</template>
<style scoped>
.space-bg-global {
	background-image: linear-gradient(180deg, #000000 0%, #ffebcd 98.22%, #ffffff 130.96%);
}
.custom-title-large {
	font-size: 50px;
}

.custom-subtitle-small {
	font-size: 26px;
}

p {
	color: white;
}

button {
	background-color: #2b1e1a;
	font-size: 20px;
	color: white;
	padding: 10px 20px;
	border-radius: 16px;
}
</style>

<!-- <script lang="ts" setup>
const store = useCounter()
const selection = ref(0)
const query = gql`
	query getShips {
		ships {
			id
			name
			active
		}
	}
`
const { data } = useAsyncQuery<{
	ships: {
		id: string
		name: string
		active: boolean
	}[]
}>(query)
const ships = computed(() => data.value?.ships ?? [])
</script> -->
