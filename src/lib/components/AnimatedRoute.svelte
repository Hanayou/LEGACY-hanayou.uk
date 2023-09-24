<script lang="ts">
    import { page } from "$app/stores";
    import { fade } from "svelte/transition";
</script>

{#key $page.url}
    <div 
        in:fade={{duration: 200, delay: 0}}
        class="pt-[64px]">
        <slot />
    </div>
{/key}