import type { Launches } from '~/types/launches'

const query = gql`
	query getLaunches {
		launches {
			id
			mission_name
			launch_date_local
			launch_date_utc
			launch_site {
				site_name
			}
			rocket {
				rocket_name
			}
			details
			links {
				flickr_images
			}
			launch_success
		}
	}
`
export const useLaunches = () => {
	const { data } = useAsyncQuery<{ launches: Launches[] }>(query)
	const launches = computed(() => {
		const seen = new Set()
		return (data.value?.launches ?? []).filter((l) => {
			if (seen.has(l.id)) return false
			seen.add(l.id)
			return true
		})
	})

	const selectedYear = ref('') // <- Filter state

	const filteredLaunches = computed(() =>
		launches.value.filter((m) =>
			selectedYear.value
				? new Date(m.launch_date_utc).getFullYear().toString() === selectedYear.value
				: true,
		),
	)

	const availableYears = computed(() =>
		[...new Set(launches.value.map((l) => new Date(l.launch_date_utc).getFullYear().toString()))].sort(),
	)

	const sortOrder = ref<'asc' | 'dsc'>('asc')
	const sortedLaunch = computed(() => {
		const data = [...filteredLaunches.value]
		data.sort((a, b) => {
			const modifier = sortOrder.value === 'asc' ? 1 : -1

			const timeA = Date.parse(a.launch_date_utc)
			const timeB = Date.parse(b.launch_date_utc)
			return (timeA - timeB) * modifier
		})
		return data
	})

	return { selectedYear, availableYears, sortedLaunch, sortOrder }
}
