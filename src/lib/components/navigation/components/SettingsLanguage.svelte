<script lang="ts">
    import { page } from '$app/stores';
    import { invalidateAll } from '$app/navigation';
    import { error } from '@sveltejs/kit';

    // Stores
    import { language } from '$lib/stores/languageStore';

    // Icons
    import Translate from '$lib/icons/Translate.svelte';
    import FlagUK from '$lib/icons/FlagUK.svelte';
    import FlagJP from '$lib/icons/FlagJP.svelte';
  import type { SvelteComponent, SvelteComponentTyped, SvelteComponent_1 } from 'svelte';

    // Sets the language in the store when a new language is selected
    let setLanguage = function(lang: string): any {
        console.log(`Language ${lang} was clicked!`)
        if ($language === lang) {
            console.log(`Language already set to en`);
            return; // early return if already active language is selected
        }
        language.set(lang);
        invalidateAll(); // Called to ensure that all text UI elements are reloaded
        console.log(`Language set to: ${$language}`);
    };
</script>

<!-- Languages Button & Dropdown -->
<div class="dropdown dropdown-end">
    <label 
        tabindex="0" 
        class="btn btn-sm rounded-full outline outline-0">
        {#if $language === 'en'}
            <FlagUK />
        {:else if $language === 'jp'}
            <FlagJP />
        {/if}
        
        <Translate />
    </label>
    <!-- Language Dropdown -->
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <!-- English-->
        <li>
            <a
                on:click={() => setLanguage('en')}
                href={$page.url.pathname}>
                <FlagUK class="rounded-full"/>
                English
            </a>
        </li>
        <!-- Japanese -->
        <li>
            <a 
                on:click={() => setLanguage('jp')}
                href={$page.url.pathname}>
                <FlagJP class="rounded-full"/>
                日本語
            </a>
        </li>
    </ul>
</div>