<script lang="ts">
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  import Project from '$lib/components/projects/Project.svelte';
  import Search from '$lib/icons/Search.svelte';

  import { projects } from '$lib/stores/projects/projectsStore'
  import { tags } from '$lib/stores/projects/projectTagsStore';
  import { activeTags } from '$lib/stores/activeTagsStore.js';

  let filteredProjects: App.Project[] = [];
  let loading = false; // Boolean to show loading icon
  let searchValue = "";
  activeTags.resetTags(); // Reset on page load

  // Add query params to activeFilterTags
  const url = $page.url;
  if (url.searchParams.get('tag')) { activeTags.toggleTag(url.searchParams.get('tag') as string); }
  
  function filterSearch() {
    loading = true; // Visual cue for search started
    filteredProjects = $projects;
    filteredProjects = $projects.filter((project) => {
      // Both search value and project title are converted to lower case as includes() is case-sensitive
      return project.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    filteredProjects = filteredProjects.filter((project) => {
      return $activeTags.every((v) => project.tags.includes(v));
    });

    loading = false;
  }

  $: $activeTags, filterSearch();

  // Langauge Props;
  import { language } from "$lib/stores/languageStore";
  import { lang } from '$lib/translations/projects/projects';
  import { onMount } from 'svelte';
  $: langData = $language === 'en' ? lang.en : lang.jp;

  // Called in the await block for Project Components below
  // Required to ensure filteredProjects is set after projects get loaded
  async function preLoad(): Promise<void> {
    await projects.getProjects().then(() => {
      filteredProjects = $projects;
      filterSearch();
    });
  }

  onMount(() => {
    tags.getTags(); // Tags store initialisation
  })

</script>

<div class="grid place-items-center max-w-2xl m-auto">
  <form method="POST" class="w-full p-5 mt-10" use:enhance={() => {
    loading = true;

    return async ({ result, update }) => {
        await update({ reset: false});
        loading = false;
    };
}}>
    <div class="flex flex-row input input-bordered w-full rounded-full focus-within:border-primary">
      <input 
        type="text"
        placeholder="{langData.search}..."
        bind:value={searchValue}
        on:input={filterSearch}
        name="search"
        class="input input-ghost focus:outline-none bg-transparent w-full"/>
      <button class="btn bg-transparent hover:bg-transparent border-none hover:scale-110 duration-100">
        <Search width="1.5em" height="1.5em"/>
      </button>
    </div>
  </form>
  <div class="flex flex-row justify-start gap-3 w-full px-10">
    <span class="flex-shrink-0">{langData.filters}: </span>
    <div class="flex flex-row flex-wrap gap-3">
      {#each $activeTags as tag}
        <button
          on:click={activeTags.toggleTag(`${tag}`)}
          class="px-2 py-px rounded-full text-xs text-white bg-primary">
            {tag}
        </button>
      {/each}
    </div>
  </div>
  <div class="divider w-full px-5">{filteredProjects.length} {langData.results}</div>
  <div class="flex flex-col w-full gap-3 p-3">
    {#await preLoad()}
      <span class="loading loading-infinity loading-lg mx-auto"></span>
      <p class="text-center">Downloading Projects...</p>
    {:then}
      {#each filteredProjects as project, index}
        <Project {project} {index}/>
      {/each}
    {:catch error}
      <p class="text-center text-xl">An error has occured: {error}</p>
    {/await}
  </div>
</div>
