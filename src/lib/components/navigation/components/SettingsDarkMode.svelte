<script lang="ts">
    import { onMount } from 'svelte';
    import { themeChange } from 'theme-change';

    // Stores
    import { darkMode } from '$lib/stores/darkMode';

    // Icons
    import Sun from '$lib/icons/Sun.svelte';
    import Moon from '$lib/icons/Moon.svelte';

    onMount(() => {
        themeChange(false);  // Documentation says this must be called onMount()
    });
</script>

<!-- Dark Mode Toggle Button -->
<button 
class="btn btn-sm btn-circle btn-outline flex"
data-toggle-theme="dark,light"
data-act-class="ACTIVECLASS" on:click={() => { darkMode.set(!$darkMode); }}>
{#key $darkMode}
    {#if $darkMode}
        <Sun />
    {:else}
        <Moon />
    {/if}
{/key}
</button>