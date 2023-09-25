<script lang="ts">
        // Langauge Props
        import { language } from '$lib/stores/languageStore';
        import { lang } from '$lib/translations/components/about/Skills';
        let langData = $language === 'en' ? lang.en : lang.jp;
</script>

<div class="divider max-w-4xl mx-auto my-10">{langData.divider}</div>
<div class="grid place-items-center w-screen px-5">
    <div class="flex flex-col items-center m-10 rounded-lg w-full max-w-4xl gap-5">
        <strong>{langData.programmingLanguages}</strong>
        <div class="flex flex-row flex-wrap gap-2 justify-center">
            <a href="/projects?tag=HTML5"><button class="btn rounded-full">HTML5</button></a>
            <a href="/projects?tag=CSS3"><button class="btn rounded-full">CSS3</button></a>
            <a href="/projects?tag=JavaScript"><button class="btn rounded-full">JavaScript</button></a>
            <a href="/projects?tag=TypeScript"><button class="btn rounded-full">TypeScript</button></a>
            <a href="/projects?tag=PHP"><button class="btn rounded-full">PHP</button></a>
            <a href="/projects?tag=Dart"><button class="btn rounded-full">Dart</button></a>
            <a href="/projects?tag=C++"><button class="btn rounded-full">C++</button></a>
            <a href="/projects?tag=C#"><button class="btn rounded-full">C#</button></a>
        </div>
        <div class="h-6"/>
        <strong>{langData.frameworksLibraries}</strong>
        <div class="flex flex-row flex-wrap gap-2 justify-center">
            <a href="/projects?tag=Svelte"><button class="btn rounded-full">Svelte</button></a>
            <a href="/projects?tag=HTML5"><button class="btn rounded-full">SvelteKit</button></a>
            <a href="/projects?tag=HTML5"><button class="btn rounded-full">TailwindCSS</button></a>
            <a href="/projects?tag=HTML5"><button class="btn rounded-full">NodeJS</button></a>
            <a href="/projects?tag=Flutter"><button class="btn rounded-full">Flutter</button></a>
        </div>
        <div class="h-6"/>
        <strong>{langData.platformsTool}</strong>
        <div class="flex flex-row flex-wrap gap-2 justify-center">
            <a href="/projects?tag=GCP"><button class="btn rounded-full">Google Cloud Platform</button></a>
            <a href="/projects?tag=GitHub"><button class="btn rounded-full">GitHub</button></a>
            <a href="/projects?tag=Unreal"><button class="btn rounded-full">Unreal Engine</button></a>
            <a href="/projects?tag=MSAzure"><button class="btn rounded-full">Microsoft Azure</button></a>
            <a href="/projects?tag=MSSharePoint"><button class="btn rounded-full">Microsoft SharePoint</button></a>
            <a href="/projects?tag=MSPowerPlatform"><button class="btn rounded-full">Microsoft Power Platform</button></a>
            <a href="/projects?tag=Nintex"><button class="btn rounded-full">Nintex Automation Platform</button></a>
        </div>
    </div>
</div>