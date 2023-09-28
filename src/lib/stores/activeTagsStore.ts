import { writable } from 'svelte/store';

function activeTagsStore() {
    const { set, update, subscribe } = writable<string[]>([]);

    function toggleTag(tag: string): any {
        update((tags) => {
            // If the tag is already active, disable it.
            if (tags.includes(tag)) {
                tags = tags.filter((t) => { return t !== tag; });
            } else {
                tags.push(tag); // Otherwise remove it
            }
            return tags;
        });
    }

    function resetTags() {
        set([]); // Resets tags back to empty array (non-selected)
    }

    return {
        subscribe,
        toggleTag,
        resetTags
    }
}

export const activeTags = activeTagsStore();