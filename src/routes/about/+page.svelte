<script lang="ts">
    import type { PageData } from '../about/$types';
     
    // Components
    import InfoCard from '$lib/components/about/InfoCard.svelte';

    export let data: PageData;
</script>

<!-- About Info Card -->
<InfoCard />
<!--  SKILLS Divider -->
<div class="divider m-10">SKILLS</div>

