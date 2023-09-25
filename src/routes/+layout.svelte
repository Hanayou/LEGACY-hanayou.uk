<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/navigation/NavBar.svelte";
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
    import { onMount } from "svelte";
    import { language } from "$lib/stores/languageStore";

    onMount(() => {
        language.getLang();
    });
</script>

<div>
    <NavBar />
    <AnimatedRoute>
        <slot />
    </AnimatedRoute>
</div>