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
	const launches = computed(() => data.value?.launches ?? [])
	return { launches }
}
