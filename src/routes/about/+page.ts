import type { PageLoad } from './$types';
import { language } from '$lib/stores/languageStore';

let lang: string;
language.subscribe((value) => {
    lang = value;
});

const en = {
    card: {
        greeting: "Hi, I'm Sam.",
        description: "I like to write these really long bits of text as my hobby, though for some people it may seem boring. I hope this is interesting to you - love ya x.",
        button: "View Projects"
    },
    workEducation: 'WORK・EDUCATION'
}

const jp = {
    card: {
        greeting: "サムです。",
        description: "ここに何を書けばいいのかわからないですが、とりあえず色々頑張りたいと思っております。",
        button: "プロジェクト検索"
    },
    workEducation: '職歴・学歴'
}

export const load = (async () => {
    return {
        // @ts-ignore
        // Ignored as TS throws string indexing error
        language: lang == 'en' ? en : jp
    };
}) satisfies PageLoad;