<script setup>
    const searchQuery = ref('')
    const emit = defineEmits(['search'])

    const handleSearch = () => {
    emit('search', searchQuery.value)
    }
// Taletso Pabale-u25163885
</script>

<template>
    <div class="search-container">
    <input 
        v-model="searchQuery"
        type="text"
        placeholder="Search by title or author..."
        @input="handleSearch"
        class="search-input"
    />
    </div>
</template>

<style scoped>
    .search-container {
        margin-bottom: 2rem;
    }

    .search-input {
        width: 100%;
        padding: 0.875rem;
        font-size: 1.125rem;
        border: 1px solid var(--grey-300);
        border-radius: 0.5rem;
        transition: all 0.2s ease;
        background-color: var(--white);
    }

    .search-input:focus {
        outline: none;
        border-color: var(--primary-blue);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .search-input::placeholder {
        color: var(--grey-400);
    }
</style>