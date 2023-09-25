<script lang="ts">
    import { fly, fade } from 'svelte/transition';
</script>

<div
    in:fly={{ delay: 0, duration: 500, y: 200}}
    class="grid place-items-center w-screen px-5">
    <div class="mockup-window shadow-xl bg-base-300 m-10 w-full max-w-4xl">
        <div
            in:fade={{ delay:250, duration: 500}}
            class="flex flex-col md:flex-row bg-base-200 p-10">
            <form method="POST" class="flex flex-col w-full gap-5">
                <h1 class="text-xl text-center">Contact Form</h1>
                <!-- Name & Email -->
                <div class="flex flex-col md:flex-row gap-x-10 gap-y-5">
                    <!-- Name -->
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Name" class="input input-bordered w-full" />
                    </div>
                    <!-- Email -->
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Email" class="input input-bordered w-full" />
                    </div>
                </div>
                <!-- Message -->
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Message</span>
                    </label>
                    <textarea
                        name="message"
                        placeholder="Message..."
                        class="textarea textarea-bordered h-24">
                    </textarea>
                </div>
                <!-- Submit Button -->
                <button type="submit" class="btn btn-primary text-white mt-5">Submit</button>
            </form>
        </div>
    </div>
</div>