<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/navigation/NavBar.svelte";
    import { fly } from "svelte/transition"
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
</script>

<div>
    <NavBar />
    <AnimatedRoute>
        <slot />
    </AnimatedRoute>
</div>