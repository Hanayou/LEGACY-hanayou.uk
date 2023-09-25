<script lang="ts">
    import type { PageData } from '../about/$types';
     
    // Components
    import InfoCard from '$lib/components/about/InfoCard.svelte';
    import WorkEducation from '$lib/components/about/WorkEducation.svelte';

    export let data: PageData;
</script>
<!-- About Info Card -->
<InfoCard langData={data.language.card}/>
<!--  Work/Education Experience Divider -->
<WorkEducation langData={data.language.workEducation}/>

<!--  SKILLS Divider -->
<div class="divider max-w-4xl mx-auto my-10">SKILLS</div>


