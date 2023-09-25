<script lang="ts">
  import { enhance } from '$app/forms';
    import type { PageData } from '../projects/$types';
    
    // export let data: PageData;
</script>

<h2>Projects</h2>
<form method="POST" use:enhance>
    <input type="text" name="testTxt"/>
    <button>Click Me!</button>
</form>