<script lang="ts">
    import type { PageData } from '../about/$types';
     
    // Components
    import InfoCard from '$lib/components/about/InfoCard.svelte';
    import WorkEducation from '$lib/components/about/WorkEducation.svelte';
    import Qualifications from '$lib/components/about/Qualifications.svelte';
    import Skills from '$lib/components/about/Skills.svelte';

    export let data: PageData;
</script>

<InfoCard langData={data.language.card}/>
<WorkEducation langData={data.language.workEducation}/>
<Qualifications />
<Skills />
