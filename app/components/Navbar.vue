<template>
	<v-app-bar flat color="transparent" border="b" class="spacex-navbar">
		<v-btn class="d-flex flex-row align-center me-6 text-none" to="/" :ripple="false">
			<div class="d-flex flex-row align-center">
				<img src="../imgs/spaceXlogo.svg" class="spacex-logo" />
				<span class="spacex-title font-weight-medium">SpaceX</span>
			</div>
		</v-btn>

		<v-btn to="/launches-space-x" variant="text">Launches</v-btn>
		<v-btn to="/rockets-space-x" variant="text">Rockets</v-btn>
		<v-btn to="/favorites-space-x" variant="text">Favorites</v-btn>

		<v-spacer />
		<v-btn
			variant="outlined"
			class="spacex-devlogs text-none d-flex align-center justify-center"
			href="https://www.notion.so/Apollo-Systems-Frontend-Exam-363c4d559eb380d591d4d7e75fea56ba?source=copy_link"
			target="_blank"
			@click.stop
		>
			<img src="../imgs/devlogs.svg" alt="icon" class="img-devlogs d-print-block me-2" />
			<span>Devlogs</span>
		</v-btn>
	</v-app-bar>
</template>
<style scoped>
.spacex-logo {
	width: 5.3rem;
	height: 5.25rem;
	margin-bottom: 0.625rem;
}

.spacex-title {
	font-size: 1.25rem;
	margin-left: -2.5rem;
}

.spacex-navbar {
	backdrop-filter: blur(8px);
	background: rgba(255, 245, 230, 0.85) !important;
	height: 6.25rem;
}

.spacex-devlogs {
	margin-right: 3.125rem;
	height: 4rem;
	width: 9rem;
}

.img-devlogs {
	height: 1.5rem;
	width: 1.5rem;
}
</style>
