export interface Rockets {
	id: string
	name: string
	description: string
	first_flight: string
	height: {
		feet: number
		meters: number
	}
	diameter: {
		feet: number
		meters: number
	}
	mass: {
		kg: number
		lb: number
	}
	stages: number
}
