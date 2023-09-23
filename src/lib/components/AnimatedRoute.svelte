<script lang="ts">
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";
</script>

{#key $page.url}
    <div transition:fly={{x: -100, duration: 250}}>
        <slot />
    </div>
{/key}