<script lang="ts">  
    import { fade } from "svelte/transition";

    // Langauge Props;
    import { language } from "$lib/stores/languageStore";
    import { lang } from '$lib/translations/root';
    $: langData = $language === 'en' ? lang.en : lang.jp;

    const langToImg: {[lang: string]: string} = {
        en: 'uk',
        jp: 'japan'
    };
    $: img = langToImg[`${$language}`]; // reactively change bg image based on langauge setting

    

    // langData is null before page generation
    // This ensures that the english default can be read until langData is available to switch to
    $: words = langData.devTypes ?? ['App', 'Game', 'Web', 'Mobile'];
    let wordIndex = 0;
    let word = "App";
    // Changese the word for devType every 4 seconds
    let wordTimer = setInterval(() => {
        if (wordIndex < words.length-1) { wordIndex++; } // Increment index by one
        else { wordIndex = 0; } // Reset at end of words array
        word = words[wordIndex];
    }, 4000);
</script>

<div 
transition:fade={{duration: 250}}
class="hero min-h-[calc(100vh-64px)]" 
style="background-image: url(images/{img}.jpg); transition: 0.25s;">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center">
        <div class="max-w-lg w-screen">
            <div class="flex flex-row justify-center w-full">
                <div class="typewriter w-full text-white">
                    <h2 class="text-5xl font-bold typing-erase text-center pb-2 textShadow">{word}</h2>
                </div>
            </div>
            <h2 class="w-full text-center text-white text-3xl textShadow">{langData.development}</h2>
            <p class="my-10 text-white w-full textShadow">{langData.introMsg}</p>
            <a href="/about" class="btn btn-primary shadow-lg">{langData.button}</a>
        </div>
    </div>

    <footer class="absolute bottom-2 w-full">
        <p class="text-center text-white opacity-60">{langData.footer}</p>
    </footer>
</div>

<style>
    .textShadow {
        text-shadow: 2px 2px 4px #000;
    }

    .typewriter {
        max-width: auto;
        display: flex;
        justify-content: center;
    }

    .typewriter h2 {
        font-size: 1.875em;
        font-weight: 500;
        max-width: min-content;
        overflow: hidden;
        white-space: nowrap; /* Keeps the content on a single line */
    }

    .typing-erase {
        animation: 
            typing-erase 2s infinite alternate
    }

    /* The type and erase effect */
    @keyframes typing-erase {
        100% { width: 100% }
        0% { width: 0% }
    }
</style>


