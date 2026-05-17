<template>
	<v-app-bar
		flat
		color="transparent"
		border="b"
		style="backdrop-filter: blur(8px); background: rgba(255, 245, 230, 0.85) !important"
		height="100"
	>
		<v-btn class="d-flex flex-row align-center me-6 text-none" to="/" :ripple="false">
			<div class="d-flex flex-row align-center">
				<img src="../imgs/spaceXlogo.svg" style="width: 85px; height: 84px; margin-bottom: 10px" />
				<span class="font-weight-medium" style="font-size: 20px; margin-left: -40px">SpaceX</span>
			</div>
		</v-btn>

		<v-btn to="/launches-space-x" variant="text">Launches</v-btn>
		<v-btn to="/rockets-space-x" variant="text">Rockets</v-btn>
		<v-btn to="/favorites-space-x" variant="text">Favorites</v-btn>

		<v-spacer />
		<v-btn
			variant="outlined"
			style="margin-right: 50px"
			class="text-none d-flex align-center justify-center"
			height="65"
			width="145"
			href="https://www.notion.so/Apollo-Systems-Frontend-Exam-363c4d559eb380d591d4d7e75fea56ba?source=copy_link"
			target="_blank"
			@click.stop
		>
			<img
				src="../imgs/devlogs.svg"
				alt="icon"
				class="me-2"
				style="height: 25px; width: 25px; display: block"
			/>
			<span>Devlogs</span>
		</v-btn>
	</v-app-bar>
</template>
<style scoped></style>
