<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="navbar-center hidden lg:flex h-full">
    <ul class="menu menu-horizontal h-full p-0">
        <li class="h-full justify-center">
            <a 
                class="h-full py-4 rounded-none text-xl"
                class:activePage={$page.url.pathname === '/'}
                href="/">
                Home
            </a>
        </li>
        <li class="justify-center">
            <a 
                class="h-full py-4 rounded-none text-xl"
                class:activePage={$page.url.pathname === '/projects'}
                href="/projects">
                Projects
            </a>
        </li>
        <a 
            class="px-10 m-auto text-xl font-cenotaph bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500"
            href="/">
            <strong>&lt;Hanayou&gt;</strong>
        </a>
        <li class="justify-center">
            <a 
                class="h-full py-4 rounded-none text-xl"
                class:activePage={$page.url.pathname === '/about'}
                href="/about">
                About
            </a>
        </li>
        <li class="justify-center">
            <a 
                class="h-full py-4 rounded-none text-xl"
                class:activePage={$page.url.pathname === '/contact'}
                href="/contact">
                Contact
            </a>
        </li>
    </ul>
</div>