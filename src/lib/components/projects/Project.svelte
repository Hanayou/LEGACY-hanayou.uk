<script lang="ts">
  import { db } from "$lib/firebase";
    import { getContext, onMount } from "svelte";
    import { fly } from "svelte/transition";

    let activeFilterTags: string[] = getContext('activeFilterTags');

    // Props
    export let index: number // from each loop
    export let project: App.Project;

    // Format start and end dates
    const startDateFormatted = project.startDate.toLocaleDateString('en-uk', {  year: "numeric", month: "short"});
    const endDateFormatted = project.endDate.toLocaleDateString('en-uk', {  year: "numeric", month: "short"});

    // Tags
    const tags: App.Tags[] = getContext('tags');
    const internalTagNames: string[] = getContext('internalTagNames');
    function toggleTag(tag: string): any {
        if (activeFilterTags.includes(tag)) {
            activeFilterTags = activeFilterTags.filter(function(e) { return e !== tag; });
        } else {
            activeFilterTags.push(tag);
        }
        activeFilterTags = activeFilterTags;
        console.log(activeFilterTags);
    }

    let modalId: string;
    onMount(() => {
        // modalId must be initialised onMount
        // Otherwise on first click, id of dialog element is null.
        modalId = `projectModal${index}`;
    });

    function getModal(): void {
        const modal = <HTMLDialogElement>document.getElementById(modalId);
        modal.showModal();
    };
</script>

<div 
    in:fly|global={{ x: -200, duration: 500, delay: index*100 }}
    class="w-full p-1">
    <div class="bg-base-300 rounded-3xl p-5 shadow-xl hover:scale-105 duration-200">
        <button on:click={getModal} class="w-full">
            <h2 class="text-xl md:text-left">{project.title}</h2>
            <p class="text-xs mt-2 md:text-left">{startDateFormatted}-{endDateFormatted}</p>
            <p class="text-sm md:text-left mt-3">
                {project.summary}
            </p>
        </button>
        <div class="divider p-0 my-2"/>
        <div class="flex flew-row flex-wrap gap-2">
            {#each project.tags as tag}
                <button
                    on:click={toggleTag(`${tag}`)}
                    class="bg-base-100 px-2 py-px rounded-full text-xs text-white"
                    class:bg-primary={ activeFilterTags.includes(tag) }>
                    {tags[internalTagNames.findIndex(v => v.includes(tag))].displayName}
        </button>
            {/each}
        </div>
    </div>
    <dialog id={modalId} class="modal">
        <div class="flex flex-col modal-box max-w-4xl max-h-4xl">
            <div class="flex flew-row justify-between">
                <div class="w-full">
                    <h3 class="font-bold text-xl">{project.title}</h3>
                    <p class="text-sm py-4">{startDateFormatted}-{endDateFormatted}</p>
                    <div class="flex flew-row flex-wrap gap-2">
                        {#each project.tags as tag}
                            <a href="/projects?tag={tag}"
                                on:click={toggleTag(`${tag}`)}
                                class="bg-base-300 px-2 py-px rounded-full text-xs text-white bg-primary"
                                class:bg-primary={ activeFilterTags.includes(tag) }>
                                {tags[internalTagNames.findIndex(v => v.includes(tag))].displayName}
                            </a>
                        {/each}
                    </div>
                </div>
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost">✕</button>
                <form>
            </div>
            <div class="divider"/>
            <div class="no-scrollbar overflow-y-scroll h-full scroll-shadows">
                <p class="text-xl">
                    {@html project.content}
                </p>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button class="cursor-default">close</button>
        </form>
    </dialog>
</div>