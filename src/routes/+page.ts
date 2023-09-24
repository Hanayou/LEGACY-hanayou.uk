import type { PageLoad } from './$types';
import { language } from '$lib/stores/languageStore';

let lang: string;
language.subscribe((value) => {
    lang = value;
});

interface Languages {
    en: string;
    jp: string;
}

const greetings: Languages = {
    en: 'Welcome to SvelteKit!',
    jp: 'SvelteKitへようこそ！',
};

export const load = (async () => {
    console.log(`Load function language: ${lang}`);
    return {
        // @ts-ignore
        // Ignored as TS does not allow returning Writable<String> 
        greeting: greetings[lang ?? 'en']
    };
}) satisfies PageLoad;