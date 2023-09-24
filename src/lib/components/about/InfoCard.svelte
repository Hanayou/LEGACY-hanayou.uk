<script lang="ts">
    import { fly, fade } from 'svelte/transition';

    // Icons
    import Location from '$lib/icons/Location.svelte';
    import GitHub from '$lib/icons/GitHub.svelte';
    import YouTube from '$lib/icons/YouTube.svelte';
    import LinkedIn from '$lib/icons/LinkedIn.svelte';
</script>

<div
    in:fly={{ delay: 0, duration: 500, y: 200}}
    class="grid place-items-center w-screen px-5 ">
    <div class="mockup-window shadow-xl bg-base-300 m-10 w-full max-w-4xl">
        <div
            in:fade={{ delay:250, duration: 500}}
            class="flex flex-col md:flex-row bg-base-200">
            <div class="flex flex-row justify-center md:flex-col md:justify-start order-4 md:order-1">
                <a href='https://github.com/Hanayou' target="_blank"><button class="btn join-item h-16 rounded-none"><GitHub width="2em" height="2em"/></button></a>
                <a href='https://www.linkedin.com/in/samuel-short/' target="_blank"><button class="btn join-item h-16 rounded-none"><LinkedIn width="2em" height="2em"/></button></a>
                <a href='https://www.youtube.com/@HanayouDev' target="_blank"><button class="btn join-item h-16 rounded-none"><YouTube width="2em" height="2em"/></button></a>
            </div>
            <div class="flex flex-col p-10 order-2">
                <div class="avatar justify-center">
                    <div class="w-48 rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2">
                        <img src="images/ProfilePhoto.png" />
                    </div>
                    
                </div>
                <div class="flex flex-row my-5 justify-center">
                    <Location width="2em" height="1.5em"/>
                    <p class="text-center">Northumberland, UK</p>
                </div>
            </div>
            <div class="flex flex-col p-10 pt-0 gap-7 order-3 md:p-10">
                <h1 class="text-4xl text-center md:text-left">Hi, I'm Sam.</h1>
                <p class="text-justify md:text-left">
                    I like to write these really long bits of text 
                    as my hobby, though for some people it may seem boring. 
                    I hope this is interesting to you - love ya x.
                </p>
                <div class="flex justify-center md:justify-start">
                    <button class="btn btn-primary line w-36">View Projects</button>
                </div>
            </div>
        </div>
    </div>
</div>