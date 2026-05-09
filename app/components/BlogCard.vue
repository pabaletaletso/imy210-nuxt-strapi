<script setup>
    defineProps({
    post: {
        type: Object,
        required: true
    }
    })
// Taletso Pabale-u25163885
</script>

<template>
    <article class="card">
    <div class="category-badge">{{ post.Category }}</div>
    <h3>
        <NuxtLink :to="`/blog/${post.Slug}`">{{ post.Title }}</NuxtLink>
    </h3>
    <p class="author">By {{ post.Author }}</p>
    <p class="snippet">{{ post.Snippet }}</p>
    <NuxtLink :to="`/blog/${post.Slug}`">Read more →</NuxtLink>
    </article>
</template>

<style scoped>
    .card {
        background-color: var(--white);
        border-radius: 0.5rem;
        padding: 1.5rem;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    }

    .category-badge {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background-color: var(--light-blue);
        color: var(--primary-blue);
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        align-self: flex-start;
    }

    h3 a {
        color: var(--grey-800);
        text-decoration: none;
        font-size: 1.25rem;
        transition: color 0.2s ease;
    }

    h3 a:hover {
        color: var(--primary-blue);
    }

    .author {
        color: var(--grey-500);
        font-size: 0.875rem;
    }

    .snippet {
        color: var(--grey-600);
        line-height: 1.5;
        margin: 0.5rem 0;
    }

    .read-more {
        font-weight: 500;
        font-size: 0.875rem;
        margin-top: auto;
        text-decoration: none;
        color: var(--primary-blue);
    }

    .read-more:hover {
        text-decoration: underline;
    }
</style>