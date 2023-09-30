import { get, writable } from 'svelte/store';

function projectsStore() {
    const { set, update, subscribe } = writable<App.Project[]>([]);

    async function getProjects(): Promise<App.Project[]> {
        set([]); // reset to empty array

        // Get all projects via API into $projects store
        const pRes = await fetch('/api/projects').then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Request Failed');
        }).then((data) => {
            const projects = data as App.Project[];
            projects.forEach((project) => {
                update((projects) => {
                    return [...projects, project]; // Append parsed project onto the end of the projects store
                });
            });
        }).catch((error) => { console.log(error); });
        return get(projects);
    }

    return {
        subscribe,
        getProjects
    };
}

export const projects = projectsStore();