<script lang="ts">
    import { onMount } from 'svelte';
    import { themeChange } from 'theme-change';
    import { darkMode } from '$lib/stores/darkMode';
    import MenuRounded from '$lib/icons/MenuRounded.svelte';
    import Translate from '$lib/icons/Translate.svelte';
    import Settings from '$lib/icons/Settings.svelte';
    import Sun from '$lib/icons/Sun.svelte';
    import Moon from '$lib/icons/Moon.svelte';
  import { fade } from 'svelte/transition';

    onMount(() => {
        themeChange(false);
    });
</script>


<div class="navbar bg-base-100 drop-shadow-lg">
    <div class="navbar-start">
        <div class="dropdown w-100">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
            <MenuRounded height=2em width=2em/>
        </label>
            <ul tabindex="0" class="menu dropdown-content z-[1] shadow bg-base-100">
                <li><a class="my-auto text-xl">Home</a></li>
                <li><a class="my-auto text-xl">Projects</a></li>
                <li><a class="my-auto text-xl">About</a></li>
                <li><a class="my-auto text-xl">Contact</a></li>
            </ul>
        </div>
    </div>
    <div class="navbar-center lg:hidden">
        <div class="menu menu-horizontal">
            <a class="my-auto text-3xl font-cenotaph" href="/"><strong>&lt;</strong>Hanayou /<strong>&gt;</strong></a>
        </div>
    </div>
    <div class="navbar-center hidden lg:flex ">
        <ul class="menu menu-horizontal">
            <li><a class="my-auto text-xl py-0" href="/">Home</a></li>
            <li><a class="my-auto text-xl py-0" href="/projects">Projects</a></li>
            <a class="px-10 text-3xl font-cenotaph align-middle" href="/"><strong>&lt;</strong>Hanayou /<strong>&gt;</strong></a>
            <li><a class="my-auto text-xl py-0" href="/about">About</a></li>
            <li><a class="my-auto text-xl py-0" href="/contact">Contact</a></li>
        </ul>
    </div>
    <div class="navbar-end flex flex-row gap-3">
        <button class="btn btn-sm btn-circle btn-outline">
            <Translate />
        </button>
        <button class="btn btn-sm btn-circle btn-outline flex" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" on:click={() => { darkMode.set(!$darkMode); }}>
            {#key $darkMode}
                {#if $darkMode}
                    <Sun />
                {:else}
                    <Moon />
                {/if}
            {/key}
        </button>
    </div>    
</div>

