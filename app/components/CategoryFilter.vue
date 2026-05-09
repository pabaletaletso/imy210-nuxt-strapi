<script setup>
    const props = defineProps({
    categories: {
        type: Array,
        required: true
    }
    })

    const selectedCategory = ref('')
    const emit = defineEmits(['filter'])

    const handleChange = () => {
    emit('filter', selectedCategory.value)
    }
// Taletso Pabale-u25163885
</script>

<template>
    <div class="filter-container">
    <label for="category" class="filter-label">Filter by Category:</label>
    <select 
        id="category" 
        v-model="selectedCategory" 
        @change="handleChange"
        class="filter-select"
    >
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
        </option>
    </select>
    </div>
</template>

<style scoped>
    .filter-container {
        background-color: var(--white);
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        margin-bottom: 1.5rem;
    }

    .filter-label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: var(--grey-700);
    }

    .filter-select {
        width: 100%;
        max-width: 300px;
        padding: 0.75rem;
        border: 1px solid var(--grey-300);
        border-radius: 0.375rem;
        font-size: 1rem;
        background-color: var(--white);
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .filter-select:focus {
        outline: none;
        border-color: var(--primary-blue);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
</style>