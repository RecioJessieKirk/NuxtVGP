import type { Launches } from '~/types/launches'

export const useFavorites = defineStore('favorites', {
	state: () => ({
		favorites: [] as Launches[],
	}),
	actions: {
		addFavorites(launch: Launches) {
			if (!this.favorites.find((l) => l.id === launch.id)) {
				this.favorites.push(launch)
			}
		},
		removeFavorites(id: string) {
			this.favorites = this.favorites.filter((l) => l.id !== id)
		},
		clearFavorites() {
			this.favorites = []
		},
	},
})
