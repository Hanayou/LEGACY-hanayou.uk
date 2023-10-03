<script lang="ts">
    import type { PageData } from './$types';
    import { fly, fade } from 'svelte/transition';
    import { enhance } from '$app/forms';
    
    export let data: PageData;

    let submitting = false;
    let success = false;
</script>

<div
    in:fly={{ delay: 0, duration: 500, y: 200}}
    class="grid place-items-center p-2">
    <div class="mockup-window shadow-xl bg-base-300 m-10 max-w-sm w-full">
        <div
            in:fade={{ delay:250, duration: 500}}
            class="flex flex-col bg-base-200">
            <form method="POST" class="flex flex-col gap-5 p-5" action="?/submit"
                use:enhance={() => {
                    submitting = true;
        
                    return async ({ result, update }) => {
                        await update();
                        submitting = false;
                        if (result.type === "success") {
                            success = true;
                        }
                    };
                }}
                >
                <h1 class="text-xl text-center">Login</h1>

                <!-- Username & Password -->
                <div class="flex flex-col">
                    <!-- Uesrname -->
                    <div class="form-control">
                        <label class="label flex flex-col gap-2">
                            <span class="label-text text-left w-full">Username</span>
                            <input name="username" type="text" placeholder="Username" value='' required class="input input-bordered w-full"/>
                        </label>
                    </div>
                    <!-- Password -->
                    <div class="form-control">
                        <label class="label flex flex-col gap-2">
                            <span class="label-text text-left w-full">Password</span>
                            <input name="password" type="password" placeholder="Password" value='' required class="input input-bordered w-full" />
                        </label>
                    </div>
                    <button class="btn btn-primary mt-8 w-20 m-auto">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>