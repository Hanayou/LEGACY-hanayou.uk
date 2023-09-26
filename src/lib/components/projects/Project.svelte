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
    <button on:click={getModal}>
        <div class="bg-base-300 rounded-3xl p-5 shadow-xl hover:scale-105 duration-200">
            <h2 class="text-xl">Super amazing Project number #17</h2>
            <p class="text-xs mt-2">2018-2023</p>
            <p class="text-sm text-justify mt-3">
                Ah yes, very good text.
                I do say, I do very much enjoy this section where we write all the text. It's very very good!
            </p>
            <div class="divider p-0 my-2"/>
            <div class="flex flew-row flex-wrap gap-2">
                <a href="#" class="bg-base-100 px-2 py-px rounded-full text-xs bg-primary">C++</a>
                <a href="#" class="bg-base-100 px-2 py-px rounded-full text-xs">Java</a>
                <a href="#" class="bg-base-100 px-2 py-px rounded-full text-xs">TypeScript</a>
                <a href="#" class="bg-base-100 px-2 py-px rounded-full text-xs">SvelteKit</a>
                <a href="#" class="bg-base-100 px-2 py-px rounded-full text-xs">Some other framework...</a>
            </div>
        </div>
    </button>
    <dialog id={modalId} class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <form>
            <h3 class="font-bold text-lg">Hello! I am {modalId}</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>Hello!!!
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</div>