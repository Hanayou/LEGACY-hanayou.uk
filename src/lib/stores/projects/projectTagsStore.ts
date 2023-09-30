import { writable } from 'svelte/store';

function tagsStore() {
    const { set, update, subscribe } = writable<App.Tags[]>([]);

    async function getTags(): Promise<App.Tags[]> {
        set([]); // reset to empty array

        // Get all tags via API into tags array
        const tRes = fetch('/api/projectTags').then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Request Failed');
        }).then((data) => {
            const tagsRes = data as App.Tags[];
            tagsRes.forEach((tag) => {
                update((tags) => {;
                    return  [...tags, tag];
                })
            })
        }).catch((error) => { console.log(error); });
        return [];
    }
    
    return {
        subscribe,
        getTags
    };
}

export const tags = tagsStore();