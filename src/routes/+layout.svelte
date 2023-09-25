<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/navigation/NavBar.svelte";
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
    import { onMount } from "svelte";
    import { language } from "$lib/stores/languageStore";
  import { invalidateAll } from "$app/navigation";

    // Called on first page load or full refresh
    // Refreshes the page from English to LocalStorage preferred langauge once running on client-side
    async function onLocalStorageLoad() {
        await language.getLang();
        invalidateAll();
    }

    onMount(() => {
        onLocalStorageLoad();
    });
</script>

<div>
    <NavBar />
    <AnimatedRoute>
        <slot />
    </AnimatedRoute>
</div>