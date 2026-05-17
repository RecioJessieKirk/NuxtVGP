<template>
	<v-app-bar
		flat
		color="transparent"
		border="b"
		style="backdrop-filter: blur(8px); background: rgba(255, 245, 230, 0.85) !important"
		height="100"
	>
		<v-btn class="d-flex flex-row align-center me-6 text-none">
			<div class="d-flex flex-row align-center">
				<img src="../imgs/spaceXlogo.svg" style="width: 85px; height: 84px; margin-bottom: 10px" />
				<span class="font-weight-medium" style="font-size: 20px; margin-left: -40px">SpaceX</span>
			</div>
		</v-btn>

		<v-btn to="/launches-space-x" variant="text">Launches</v-btn>
		<v-btn to="/rockets-space-x" variant="text">Rockets</v-btn>
		<v-btn to="/favorites-space-x" variant="text">Favorites</v-btn>

		<v-spacer />
		<v-btn variant="outlined" class="text-none pa-5 align-center" height="65" width="135 ">
			<template #prepend>
				<img
					src="../imgs/devlogs.svg"
					alt="icon"
					class="btn-icon"
					style="height: 25px; width: 25px"
				/>
			</template>
			Devlogs
		</v-btn>
	</v-app-bar>
</template>
<style scoped></style>
