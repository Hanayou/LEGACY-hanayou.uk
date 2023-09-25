<script lang="ts">
    // Components
    import WorkEducationItem from './WorkEducationItem.svelte';

    // Langauge Props
    import { language } from '$lib/stores/languageStore';
    import { lang } from '$lib/translations/components/about/WorkEducation';
    let langData = $language === 'en' ? lang.en : lang.jp;
</script>

<div class="divider max-w-4xl mx-auto my-10">{langData.divider}</div>
<div class="grid place-items-center w-screen px-5 ">
    <div class="flex flex-col m-10 rounded-lg  w-full max-w-4xl gap-2">
        {#each langData.workEducationItems as item}
            <WorkEducationItem {...item}/>
        {/each}
    </div>
</div>