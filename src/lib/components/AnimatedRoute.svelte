<script lang="ts">
    import { page } from "$app/stores";
    import { fade } from "svelte/transition";
</script>

{#key $page.url}
    <div 
        in:fade={{duration: 0, delay: 0}}>
        <slot />
    </div>
{/key}