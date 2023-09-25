<script lang="ts">
    import { fly, fade } from 'svelte/transition';

    export let langData = '';
</script>

<div class="divider max-w-4xl mx-auto my-10">WORK・EDUCATION</div>
<div class="grid place-items-center w-screen px-5 ">
    <div class="flex flex-col m-10 rounded-lg  w-full max-w-4xl gap-2">
        <div class="collapse collapse-arrow border border-base-300 bg-base-200">
            <input type="checkbox" class="peer"/>
            <div class="collapse-title text-xl font-medium">
                <h2>Freelance <span class="text-sm font-light">(Consultant)</span></h2>
                <p class="text-xs font-light text-primary">Newcastle, United Kingdom ・ 2023 - Current</p>
            </div>
            <div class="collapse-content"> 
                <p>
                    This was a great job that I was able to do for a while.
                </p>
            </div>
        </div>
        <div class="collapse collapse-arrow border border-base-300 bg-base-200">
            <input type="checkbox" class="peer"/>
            <div class="collapse-title text-xl font-medium">
                <h2>Northumbria University <span class="text-sm font-light">(BSc Computer Science)</span></h2>
                <p class="text-xs font-light text-primary">Newcastle, United Kingdom ・ 2019 - 2023</p>
            </div>
            <div class="collapse-content"> 
                <p>
                    This was a great job that I was able to do for a while.
                </p>
            </div>
        </div>
        <div class="collapse collapse-arrow border border-base-300 bg-base-200">
            <input type="checkbox" class="peer"/>
            <div class="collapse-title text-xl font-medium">
                <h2>Fukushima University <span class="text-sm font-light">(Exchange Year)</span></h2>
                <p class="text-xs font-light text-primary">Fukushima, Japan ・ 2022</p>
            </div>
            <div class="collapse-content"> 
                <p>
                    This was a great job that I was able to do for a while.
                </p>
            </div>
        </div>
        <div class="collapse collapse-arrow border border-base-300 bg-base-200">
            <input type="checkbox" class="peer"/>
            <div class="collapse-title text-xl font-medium">
                <h2>Synergi <span class="text-sm font-light">(Consultant・Devloper)</span></h2>
                <p class="text-xs font-light text-primary">Gateshead, United Kingdom ・ 2018 - 2022</p>
            </div>
            <div class="collapse-content"> 
                <p>
                    This was a great job that I was able to do for a while.
                </p>
            </div>
        </div>
        <!-- Nintex -->
        <div class="collapse collapse-arrow border border-base-300 bg-base-200">
            <input type="checkbox" class="peer"/>
            <div class="collapse-title text-xl font-medium">
                <h2>Nintex <span class="text-sm font-light">(Intern SE・Technical Evangelist)</span></h2>
                <p class="text-xs font-light text-primary">Melbourne, Australia ・ 2018</p>
            </div>
            <div class="collapse-content"> 
                <p>
                    This was a great job that I was able to do for a while.
                </p>
            </div>
        </div>
    </div>
</div>