import type { Launches } from '~/types/launches'

export const useDialog = () => {
	const dialog = ref(false)
	const selectedLaunch = ref<Launches | null>(null)

	const openDialog = (item: Launches) => {
		selectedLaunch.value = item
		dialog.value = true
	}

	return { dialog, selectedLaunch, openDialog }
}
