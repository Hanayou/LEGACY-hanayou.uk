// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface Project {
			id: string;
			title: string;
			startDate: Date;
			endDate: Date;
			summary: string;
			content: string;
			published: boolean;
			tags: string[];
		}

		interface Tags {
			id: string;
			displayName: string;
			category: string;
		}
	}
}

export {};
