<script lang="ts">
    import MenuRounded from "$lib/icons/MenuRounded.svelte";
</script>

<div class="navbar-start">
    <div class="dropdown dropdown-start lg:hidden">
        <label tabindex="0" class="btn btn-sm rounded-full outline outline-0"><MenuRounded /></label>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
</div>
<div class="navbar-center lg:hidden">
    <div class="menu menu-horizontal">
        <a class="my-auto text-xl font-cenotaph bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500" 
        href="/">
        <strong>&lt;Hanayou&gt;</strong></a>
    </div>
</div>