export interface Launches {
	id: string
	mission_name: string
	launch_date_local: string
	launch_date_utc: string
	launch_site: {
		site_name: string
	}
	rocket: {
		rocket_name: string
	}
	details: string
	links: {
		flickr_images: string[]
	}
	launch_success: boolean
}
