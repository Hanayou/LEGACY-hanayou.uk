<script lang="ts">
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  import Project from '$lib/components/projects/Project.svelte';

  import Search from '$lib/icons/Search.svelte';
  import { onMount } from 'svelte';

  // Tags
  let tags: string[];
  let searchValue: string;

  // Projects data returned in load / on form submission
  export let data;
  const projects: App.Project[] = data.projects;

  let loading = false;

  onMount(() => {
    tags = $page.url.searchParams.getAll('tag');
  });

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
        name="search"
        class="input input-ghost focus:outline-none bg-transparent w-full"/>
      <button class="btn bg-transparent hover:bg-transparent border-none hover:scale-110 duration-100">
        <Search width="1.5em" height="1.5em"/>
      </button>
    </div>
  </form>
  <div class="divider w-full px-5">{projects.length} Results</div>
  <div class="flex flex-col w-full gap-3">
    {#if loading}
      <span class="loading loading-infinity loading-lg mx-auto"></span>
      <p class="text-center">Downloading Projects...</p>
    {:else }
      {#each projects as project, index}
        <Project {project} {index}/>
      {/each}
    {/if}
  </div>
</div>
