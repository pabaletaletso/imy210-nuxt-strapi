<script setup>
// Taletso Pabale-u25163885

    const { fetchPosts } = useStrapi()
    const allPosts = ref([])
    const searchResults = ref([])
    const searchQuery = ref('')
    const searching = ref(false)

    const loadPosts = async () => {
    allPosts.value = await fetchPosts()
    }
    await loadPosts()

    const performSearch = (query) => {
    searchQuery.value = query
    searching.value = true
    
    setTimeout(() => {
        if (!query.trim()) {
        searchResults.value = []
        searching.value = false
        return
        }
        
        const lowerQuery = query.toLowerCase()
        searchResults.value = allPosts.value.filter(post => 
        post.Title.toLowerCase().includes(lowerQuery) ||
        post.Author.toLowerCase().includes(lowerQuery)
        )
        searching.value = false
    }, 300)
    }
</script>

<template>
    <div>
    <h1>Search Posts</h1>
    <p class="text-muted">Search by blog post title or author name</p>

    <SearchBar @search="performSearch" />

    <div v-if="searching" class="loading">
        <div class="spinner"></div>
        <p>Searching...</p>
    </div>

    <div v-else-if="searchQuery && searchResults.length === 0" class="empty-state">
        <p>No results found for "{{ searchQuery }}"</p>
    </div>

    <div v-else-if="searchResults.length > 0">
        <p class="results-count">Found {{ searchResults.length }} result(s) for "{{ searchQuery }}"</p>
        <div class="blog-grid">
        <BlogCard 
            v-for="post in searchResults" 
            :key="post.id" 
            :post="post" 
        />
        </div>
    </div>

    <div v-else class="search-prompt">
        <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p>Enter a title or author name to search</p>
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

    .search-prompt {
        text-align: center;
        padding: 4rem 2rem;
        background-color: var(--white);
        border-radius: 0.5rem;
        color: var(--grey-400);
    }

    .search-icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 1rem;
        color: var(--grey-300);
    }

    .results-count {
        margin-bottom: 1.5rem;
        padding: 0.75rem;
        background-color: var(--light-blue);
        border-radius: 0.375rem;
        color: var(--primary-blue);
        font-size: 0.875rem;
    }

    .blog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 2rem;
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