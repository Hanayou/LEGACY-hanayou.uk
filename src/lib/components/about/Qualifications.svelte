<script lang="ts">
    import Translate from '$lib/icons/Translate.svelte';
    import Graduate from '$lib/icons/Graduate.svelte';
    import type { SvelteComponent } from 'svelte';

    // icon key-pair mapping
    const icons: {[iconId: number]: any} = {
        1: Graduate,
        2: Translate
    };


    // Langauge Props
    import { language } from '$lib/stores/languageStore';
    import { lang } from '$lib/translations/components/about/Qualifications';
    let langData = $language === 'en' ? lang.en : lang.jp;
</script>

<!--  QUALIFICATIONS Divider -->
<div class="divider max-w-4xl mx-auto my-10">{langData.divider}</div>
<div class="grid place-items-center w-screen px-5">
    <div class="flex flex-col m-10 rounded-lg w-full max-w-xl gap-5">
        {#each langData.qualifications as item}
            <div class="flex flex-row align-center">
                <div class="p-5">
                    <svelte:component  this={icons[item.icon]} width="2em" height="2em"/>
                </div>
                <div class="align-center w-full p-1.5 pl-5">
                    <h2 class="text-2xl">{item.title}</h2>
                    <p class="my-2">{item.content}</p>
                </div>
            </div>
        {/each}
    </div>
</div>