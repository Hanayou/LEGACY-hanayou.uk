<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/navigation/NavBar.svelte";
    import { onMount } from "svelte";
    import { language } from "$lib/stores/languageStore";

    onMount(() => {
        // Called on first page load or full refresh
        // Refreshes the page from English to LocalStorage preferred langauge once running on client-side
        language.getLang();
    });
</script>

<div>
    <NavBar />
    <div class="pt-[64px]">
        <slot />
    </div>
</div>