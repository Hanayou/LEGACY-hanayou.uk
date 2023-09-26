<script lang="ts">
  import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    export let index: number;
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
    in:fly|global={{ x: -200, duration: 500, delay: 100*index }}
    class="w-full p-1">
    
        <div class="bg-base-300 rounded-3xl p-5 shadow-xl hover:scale-105 duration-200">
            <button on:click={getModal}>
                <h2 class="text-xl md:text-left">Super amazing Project number #17</h2>
                <p class="text-xs mt-2 md:text-left">2018-2023</p>
                <p class="text-sm text-justify mt-3">
                    Ah yes, very good text.
                    I do say, I do very much enjoy this section where we write all the text. It's very very good!
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
                <div>
                    <h3 class="font-bold text-xl">Project Title</h3>
                    <p class="text-sm py-4">2018-2023</p>
                    <div class="flex flew-row flex-wrap gap-2">
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs text-white bg-primary">C++</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">Java</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">TypeScript</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">SvelteKit</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">Some other framework...</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">Some other framework...</a>
                        <a href="#" class="bg-base-300 px-2 py-px rounded-full text-xs">Some other framework...</a>
                    </div>
                    <div class="divider"/>
                </div>
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost">✕</button>
                <form>
            </div>
            <div class="no-scrollbar overflow-y-scroll h-full scroll-shadows">
                <p class="text-4xl">
                    TEST TEST TESTT TEST TEST TT TEST TEST TEST TE
                </p>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button class="cursor-default">close</button>
        </form>
    </dialog>
</div>