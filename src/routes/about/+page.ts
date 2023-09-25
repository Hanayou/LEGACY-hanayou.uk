import type { PageLoad } from './$types';
import { language } from '$lib/stores/languageStore';
import type { lang } from '$lib/translations/components/about/InfoCard';

let activeLang: string;
language.subscribe((value) => {
    activeLang = value;
});

export const load = (async () => {
    return {
        // @ts-ignore
        // Ignored as TS throws string indexing error
    };
}) satisfies PageLoad;