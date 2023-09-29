import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function langStore() {
    const { set, update, subscribe } = writable<string>('en');

    function setLang(lang: string) {
        if (browser)
        {
            set(lang);
            localStorage.setItem('langPref', lang);
        }
    }

    function getLang() {
        if (browser)
        {
            // Set store to langPref or 'en'
            const lang = localStorage.getItem('langPref') ?? 'en';
            set(lang);
            console.log(`Language retrieved from browser localStorage was: ${lang}`);
        }
    }

    return {
        subscribe,
        getLang,
        setLang
    }
}

export const language = langStore();