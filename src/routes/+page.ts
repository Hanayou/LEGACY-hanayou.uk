import type { PageLoad } from './$types';
import { language } from '$lib/stores/languageStore';

let lang: string;
language.subscribe((value) => {
    lang = value;
});

const en = {
    headline: 'Welcome to SvelteKit!',
    content: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
    buttonTxt: 'GET STARTED',
    objText: {
        objA: 'test1',
        objB: 'test2'
    }
}

const jp = {
    headline: 'SvelteKitへようこそ！',
    content: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
    buttonTxt: '未来へ一歩',
    objText: {
        objA: 'test1',
        objB: 'test2'
    }
}

export const load = (async () => {
    return {
        // @ts-ignore
        // Ignored as TS throws string indexing error
        language: lang == 'en' ? en : jp
    };
}) satisfies PageLoad;