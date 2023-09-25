<script lang="ts">
    import Translate from '$lib/icons/Translate.svelte';
    import Graduate from '$lib/icons/Graduate.svelte';
</script>

<!--  QUALIFICATIONS Divider -->
<div class="divider max-w-4xl mx-auto my-10">QUALIFICATIONS</div>
<div class="grid place-items-center w-screen px-5">
    <div class="flex flex-col m-10 rounded-lg w-full max-w-xl gap-5">
        <div class="flex flex-row align-center">
            <div class="p-5">
                <Translate width="2em" height="2em"/>
            </div>
            <div class="align-center w-full p-1.5 pl-5">
                <h2 class="text-2xl">BSc CompSci w/ Games (1st Class Honours)</h2>
                <p class="my-2">Graduated from Northumbria University's BSc Computer Science with Games Development course with first class honours.</p>
            </div>
            
        </div>
        <div class="flex flex-row align-center">
            <div class="p-5">
                <Graduate width="2em" height="2em"/>
            </div>
            <div class="align-center w-full p-1.5 pl-5">
                <h2 class="text-2xl">JLPT N2</h2>
                <p class="my-2">Independently studied for and passed the JLPT N2 (Japanese Langauge Proficiency Test) in December 2018, with plans to take the JLPT N1 in the near future.</p>
            </div>
            
        </div>
    </div>
</div>