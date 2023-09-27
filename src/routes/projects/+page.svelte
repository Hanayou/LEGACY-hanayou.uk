<script lang="ts">
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  import Project from '$lib/components/projects/Project.svelte';

  import Search from '$lib/icons/Search.svelte';
  import { onMount } from 'svelte';

  let tags: string[];

  export let form;

  onMount(() => {
    tags = $page.url.searchParams.getAll('tag');
    console.log(tags);
  });

  let tests = [0,1,2,3,4,5];
</script>

<div class="grid place-items-center max-w-2xl m-auto">
  <form method="POST" class="w-full p-5 mt-10" use:enhance>
    {form?.test}
    <div class="flex flex-row input input-bordered w-full rounded-full focus-within:border-primary">
      <input 
        type="text"
        placeholder="Search..."
        bind:value={tags}
        class="input input-ghost focus:outline-none bg-transparent w-full"/>
      <button class="btn bg-transparent hover:bg-transparent border-none hover:scale-110 duration-100">
        <Search width="1.5em" height="1.5em"/>
      </button>
    </div>
  </form>
  <div class="divider w-full px-5">7 Results</div>
  <div class="flex flex-col gap-3">
    {#each tests as test, index}
      <Project index={index}/>
    {/each}
  </div>
</div>
