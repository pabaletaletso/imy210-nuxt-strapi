<script setup>
// Taletso Pabale-u25163885
</script>

<template>
    <header class="header">
    <div class="container">
        <nav class="nav">
        <div class="logo">
            <NuxtLink to="/">Blog Page</NuxtLink>
        </div>
        <div class="nav-links">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            <NuxtLink to="/search" class="nav-link">Search</NuxtLink>
        </div>
        </nav>
    </div>
    </header>
</template>

<style scoped>
    .header {
        background-color: var(--white);
        border-bottom: 1px solid var(--grey-200);
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
    }

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
    }

    .logo a {
        font-size: 1.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, var(--primary-blue), var(--primary-dark));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-decoration: none;
    }

    .nav-links {
        display: flex;
        gap: 2rem;
    }

    .nav-link {
        color: var(--grey-700);
        font-weight: 500;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .nav-link:hover {
        color: var(--primary-blue);
    }
</style>