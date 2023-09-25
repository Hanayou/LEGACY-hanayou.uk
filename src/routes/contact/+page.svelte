<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { enhance } from '$app/forms';

    // Langauge Props
    import { language } from '$lib/stores/languageStore';
    import { lang } from '$lib/translations/contact/contact';
    $: langData = $language === 'en' ? lang.en : lang.jp;

    export let form;

    let submitting = false;
    let success = false;

    let msg = "";
    const msgLengthMax = 1000;
    $: msgLength = msgLengthMax - msg.length;
</script>

<div
    in:fly={{ delay: 0, duration: 500, y: 200}}
    class="grid place-items-center w-screen px-5">
    <div class="mockup-window shadow-xl bg-base-300 m-10 w-full max-w-4xl">
        <div
            in:fade={{ delay:250, duration: 500}}
            class="flex flex-col md:flex-row bg-base-200 p-10">
            <form method="POST" class="flex flex-col w-full gap-5" action="?/submit"
                use:enhance={() => {
                    submitting = true;
        
                    return async ({ result, update }) => {
                        await update();
                        submitting = false;
                        if (result.type === "success") {
                            success = true;
                            setTimeout(() => {
                                success = false;
                            }, 3000); // Shows success alert for 3 seconds
                        }
                    };
                }}
                >
                <h1 class="text-xl text-center">{langData.contactForm}</h1>

                {#if success}
                <div
                    in:fly={{x: -500, duration: 200 }}
                    out:fade={{duration: 200}}
                    class="alert alert-success">
                    <span class="">{langData.successAlert}</span>
                </div>
                {/if}
                {#if form?.error}
                <div class="alert alert-error">
                    <p class="error text-white">{form?.error}</p>
                </div>
                {/if}

                <!-- Name & Email -->
                <div class="flex flex-col md:flex-row gap-x-10 gap-y-5">
                    <!-- Name -->
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">{langData.name}</span>
                        </label>
                        <input name="name" type="text" placeholder="{langData.name}" value='' required class="input input-bordered w-full"/>
                    </div>
                    <!-- Email -->
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">{langData.email}</span>
                        </label>
                        <input name="email" type="email" placeholder="{langData.email}" value='' required class="input input-bordered w-full" />
                    </div>
                </div>

                <!-- Message -->
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">{langData.message}</span>
                    </label>
                    <textarea
                        name="message"
                        placeholder="{langData.message}..."
                        required
                        bind:value={msg}
                        class="textarea textarea-bordered h-24" />
                        <p class="text-right text-xs mt-2">{langData.charactersRemaining}: {msgLength}</p>
                </div>

                <!-- Submit Button -->
                <button 
                    class="btn btn-primary text-white mt-5"
                    class:btn-disabled={submitting}>{submitting ? `${langData.buttonSubmitting}...` : `${langData.buttonSubmit}`}
                </button>
            </form>
        </div>
    </div>
</div>


