import type { Rockets } from '~/types/rockets'

const query = gql`
	query getRocket {
		rockets {
			id
			name
			description
			first_flight
			height {
				meters
			}
			diameter {
				meters
			}
			mass {
				kg
			}
			stages
		}
	}
`

export const useRockets = () => {
	const { data } = useAsyncQuery<{ rockets: Rockets[] }>(query)
	const rockets = computed(() => data.value?.rockets ?? null)

	return { rockets }
}
