<script lang="ts">
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  import Project from '$lib/components/projects/Project.svelte';

  import Search from '$lib/icons/Search.svelte';
  import { onMount } from 'svelte';

  // Projects data returned in load / on form submission
  export let data;
  let projects: App.Project[] = data.projects;
  let filteredProjects = projects;

  // Tags
  let tags: App.Tags[] = data.tags;
  console.log(tags);
  let searchValue: string;

  let loading = false;

  onMount(() => {
    
  });

  function research() {
    loading = true; // Visual cue for search started
    filteredProjects = projects;
    filteredProjects = projects.filter((project) => {
      // Filtering based on title
      // Both search value and project title are converted to lower case as includes() is case-sensitive
      return project.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    loading = false;
  }

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
        placeholder="Search..."
        bind:value={searchValue}
        on:input={research}
        name="search"
        class="input input-ghost focus:outline-none bg-transparent w-full"/>
      <button class="btn bg-transparent hover:bg-transparent border-none hover:scale-110 duration-100">
        <Search width="1.5em" height="1.5em"/>
      </button>
    </div>
  </form>
  <div class="divider w-full px-5">{filteredProjects.length} Results</div>
  <div class="flex flex-col w-full gap-3">
    {#if loading}
      <span class="loading loading-infinity loading-lg mx-auto"></span>
      <p class="text-center">Downloading Projects...</p>
    {:else }
      {#each filteredProjects as project, index}
        <Project {project} {index}/>
      {/each}
    {/if}
  </div>
</div>
