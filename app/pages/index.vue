<script setup>
// Taletso Pabale-u25163885

    const { fetchPosts } = useStrapi()
    const posts = ref([])
    const loading = ref(true)
    const selectedCategory = ref('')
    const categories = ref([])

    const uniqueCategories = computed(() => {
    return [...new Set(posts.value.map(post => post.Category).filter(Boolean))]
    })

    const filteredPosts = computed(() => {
    if (!selectedCategory.value) return posts.value
    return posts.value.filter(post => post.Category === selectedCategory.value)
    })

    const filterByCategory = (category) => {
    selectedCategory.value = category
    }

    const loadPosts = async () => {
    loading.value = true
    posts.value = await fetchPosts()
    categories.value = uniqueCategories.value
    loading.value = false
    }

    await loadPosts()
</script>

<template>
    <div>
    <h1>Blog Posts</h1>
    <p class="text-muted">Explore our latest posts</p>

    <CategoryFilter 
        :categories="categories" 
        @filter="filterByCategory" 
    />

    <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading posts...</p>
    </div>

    <div v-else-if="filteredPosts.length === 0" class="empty-state">
        <p>No blog posts found in this category.</p>
    </div>

    <div v-else class="blog-grid">
        <BlogCard 
        v-for="post in filteredPosts" 
        :key="post.id" 
        :post="post" 
        />
    </div>
    </div>
</template>

<style scoped>
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--grey-900);
        margin-bottom: 0.5rem;
    }

    .text-muted {
        color: var(--grey-500);
        margin-bottom: 2rem;
    }

    .blog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    .loading {
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

    .empty-state {
        text-align: center;
        padding: 3rem;
        background-color: var(--white);
        border-radius: 0.5rem;
        color: var(--grey-500);
    }
</style>