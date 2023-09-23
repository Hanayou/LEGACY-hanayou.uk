<script lang="ts">
    import MenuRounded from '$lib/icons/MenuRounded.svelte';
    import Translate from '$lib/icons/Translate.svelte';
    import Settings from '$lib/icons/Settings.svelte';
    import { onMount } from 'svelte';
    import { themeChange } from 'theme-change';

    onMount(() => {
        themeChange(false);
    });
</script>


<div class="navbar bg-base-100 drop-shadow-lg">
    <div class="navbar-start">
        <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
            <MenuRounded height=2em width=2em/>
        </label>
            <ul tabindex="0" class="menu dropdown-content z-[1] shadow bg-base-100">
                <li><a>Home</a></li>
                <li><a>Projects</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    </div>
    <div class="navbar-center lg:hidden">
        <div class="menu menu-horizontal">
            <a class="my-auto text-3xl font-cenotaph" href="/">&lt;Hanayou /&gt;</a>
        </div>
    </div>
    <div class="navbar-center hidden lg:flex ">
        <ul class="menu menu-horizontal">
            <li><a class="text-xl py-0" href="/">Home</a></li>
            <li><a class="my-auto text-xl py-0" href="/projects">Projects</a></li>
            <a class="px-10 text-3xl font-cenotaph align-middle" href="/">&lt;Hanayou /&gt;</a>
            <li><a class="my-auto text-xl py-0" href="/about">About</a></li>
            <li><a class="my-auto text-xl py-0" href="/contact">Contact</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <button class="btn btn-sm btn-circle btn-outline">
            <Translate />
        </button>
        <button class="btn btn-sm btn-circle btn-outline" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
            <Settings />
        </button>
    </div>
</div>

