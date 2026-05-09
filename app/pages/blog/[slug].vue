<script setup>
// Taletso Pabale-u25163885

    import { marked } from 'marked'

    const route = useRoute()
    const { fetchPostBySlug } = useStrapi()

    console.log('useStrapi loaded:', useStrapi())
    const post = ref(null)
    const loading = ref(true)

    const formattedDate = computed(() => {
    if (!post.value?.createdAt) return ''
    return new Date(post.value.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    })

    const renderedContent = computed(() => {
    if (!post.value?.Content) return ''
    return marked(post.value.Content)
    })

    const loadPost = async () => {
    loading.value = true
    const slug = route.params.slug
    console.log('Looking for slug:', slug) // Add this
    post.value = await fetchPostBySlug(slug)
    console.log('Found post:', post.value) // Add this
    loading.value = false
    }

    await loadPost()
</script>

<template>
    <div v-if="loading" class="loading">
    <div class="spinner"></div>
    <p>Loading post...</p>
    </div>

    <article v-else-if="post" class="blog-post">
    <div class="post-header">
        <div class="category-badge">{{ post.Category }}</div>
        <h1>{{ post.Title }}</h1>
        <div class="post-meta">
        <span class="author">By {{ post.Author }}</span>
        <span class="date">{{ formattedDate }}</span>
        </div>
    </div>

    <div class="post-content" v-html="renderedContent"></div>

    <div class="post-footer">
        <NuxtLink to="/" class="btn-back">← Back to all posts</NuxtLink>
    </div>
    </article>

    <div v-else class="error-state">
    <h2>Post Not Found</h2>
    <p>The blog post you're looking for doesn't exist.</p>
    <NuxtLink to="/" class="btn-back">Return Home</NuxtLink>
    </div>
</template>

<style scoped>
    .blog-post {
        max-width: 800px;
        margin: 0 auto;
        background-color: var(--white);
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    }

    .post-header {
        padding: 2rem;
        border-bottom: 1px solid var(--grey-200);
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
        margin-bottom: 1rem;
    }

    .post-header h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        line-height: 1.2;
        color: var(--grey-900);
    }

    .post-meta {
        display: flex;
        gap: 1rem;
        color: var(--grey-500);
        font-size: 0.875rem;
    }

    .post-meta .author {
        font-weight: 500;
        color: var(--primary-blue);
    }

    .post-content {
        padding: 2rem;
        font-size: 1.125rem;
        line-height: 1.8;
        color: var(--grey-700);
    }

    .post-content h1, 
    .post-content h2, 
    .post-content h3 {
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        color: var(--grey-800);
    }

    .post-content p {
        margin-bottom: 1.25em;
    }

    .post-content ul, 
    .post-content ol {
        margin: 1em 0;
        padding-left: 2em;
    }

    .post-content li {
        margin: 0.5em 0;
    }

    .post-content code {
        background-color: var(--grey-100);
        padding: 0.2em 0.4em;
        border-radius: 0.25rem;
        font-family: monospace;
        font-size: 0.9em;
    }

    .post-content pre {
        background-color: var(--grey-900);
        color: var(--grey-100);
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        margin: 1.5em 0;
    }

    .post-content pre code {
        background: none;
        padding: 0;
    }

    .post-content blockquote {
        border-left: 4px solid var(--primary-blue);
        padding-left: 1rem;
        margin: 1.5em 0;
        color: var(--grey-600);
        font-style: italic;
    }

    .post-footer {
        padding: 2rem;
        border-top: 1px solid var(--grey-200);
        text-align: center;
    }

    .btn-back {
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: var(--grey-200);
        color: var(--grey-700);
        text-decoration: none;
        border-radius: 0.375rem;
        transition: all 0.2s ease;
    }

    .btn-back:hover {
        background-color: var(--grey-300);
        transform: translateY(-1px);
    }

    .loading, .error-state {
        text-align: center;
        padding: 3rem;
    }

    .spinner {
        width: 40px;
        height: 40px;
        margin: 0 auto 1rem;
        border: 3px solid var(--grey-200);
        border-top-color: var(--primary-blue);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    .error-state {
        background-color: var(--white);
        border-radius: 0.5rem;
        max-width: 500px;
        margin: 0 auto;
    }

    .error-state h2 {
        color: var(--grey-800);
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        .post-header h1 {
            font-size: 1.75rem;
        }
        
        .post-content {
            font-size: 1rem;
            padding: 1.5rem;
        }
        
        .post-header {
            padding: 1.5rem;
        }
    }
</style>