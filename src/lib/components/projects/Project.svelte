<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    // Props
    export let index: number // from each loop
    export let project: App.Project;

    // Format start and end dates
    const startDateFormatted = project.startDate.toLocaleDateString('en-uk', {  year: "numeric", month: "short"});
    const endDateFormatted = project.endDate.toLocaleDateString('en-uk', {  year: "numeric", month: "short"});

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
            <a href="/projects?tag=C++" class="bg-base-100 px-2 py-px rounded-full text-xs text-white bg-primary">C++</a>
            <a href="#" class="bg-base-100 px-2 py-px rounded-full text-xs">Java</a>
            <a href="#" class="bg-base-100 px-2 py-px rounded-full text-xs">TypeScript</a>
            <a href="#" class="bg-base-100 px-2 py-px rounded-full text-xs">SvelteKit</a>
            <a href="#" class="bg-base-100 px-2 py-px rounded-full text-xs">Some other framework...</a>
        </div>
    </div>
    <dialog id={modalId} class="modal">
        <div class="flex flex-col modal-box max-w-4xl max-h-4xl">
            <div class="flex flew-row justify-between">
                <div class="w-full">
                    <h3 class="font-bold text-xl">{project.title}</h3>
                    <p class="text-sm py-4">{startDateFormatted}-{endDateFormatted}</p>
                    <div class="flex flew-row flex-wrap gap-2">
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs text-white bg-primary">C++</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">Java</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">TypeScript</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">SvelteKit</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">Some other framework...</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">Some other framework...</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">Some other framework...</a>
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