<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte";
    import { fly } from "svelte/transition"
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
</script>

<NavBar></NavBar>
<AnimatedRoute>
    <slot />
</AnimatedRoute>