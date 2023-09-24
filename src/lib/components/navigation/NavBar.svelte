<script lang="ts">
    import SmallNavLinks from './components/SmallNavLinks.svelte';
    import LargeNavLinks from './components/LargeNavLinks.svelte';
    import Settings from './components/Settings.svelte';
</script>

<!-- Navigation Bar -->
<div class="navbar fixed py-0 px-2 h-16 bg-base-100 drop-shadow-lg z-50">
    <SmallNavLinks /> <!-- When below lg media query size -->
    <LargeNavLinks />
    <Settings />
</div> <!-- Navigation Bar -->
