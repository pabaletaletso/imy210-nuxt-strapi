<script setup>
// Taletso Pabale-u25163885
</script>

<template>
    <div>
    <Header />
    <main class="container">
        <slot />
    </main>
    </div>
</template>

<style scoped>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1.5rem;
    }
</style>