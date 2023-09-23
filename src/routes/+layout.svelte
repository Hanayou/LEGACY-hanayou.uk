<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte";
    import { fly } from "svelte/transition"
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";

    let height: number; // initialised 
</script>

<!-- Fixed position NavBar component + div with fixed offset so content isn't stuck behind it-->
<NavBar bind:height></NavBar>
<div class="h-[{height}px]"/> <!-- TODO: Read the height from the DOM -->
<AnimatedRoute>
    <slot />
</AnimatedRoute>