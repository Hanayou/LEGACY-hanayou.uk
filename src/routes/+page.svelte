<script lang="ts">
    import { language } from "$lib/stores/languageStore";
    import { fade } from "svelte/transition";

    const langToImg: {[lang: string]: string} = {
        en: 'uk',
        jp: 'japan'
    };
    $: img = langToImg[`${$language}`]; // reactively change bg image based on langauge setting

    let words = ['App', 'Game', 'Web', 'Mobile'];
    let wordIndex = 0;
    let word = "App";
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
                    <h2 class="text-5xl font-bold typing-erase text-center pb-2">{word}</h2>
                </div>
            </div>
            <h2 class="w-full text-center text-white text-3xl">Development</h2>
            <p class="my-10 text-white w-full">Welcome to my personal portfolio website.</p>
            <a href="/about" class="btn btn-primary">About Me</a>
        </div>
    </div>

    <footer class="absolute bottom-2 w-full">
        <p class="text-center text-white opacity-60">This site was lovingly crafted using Svelte 4 and SvelteKit.</p>
    </footer>
</div>

<style>
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


