<script setup>
import { ref, onMounted } from 'vue'
import CategoryCard from './../CategoryCard.vue'
import client from './../../library/ApiClient.js'
import SkeletonLoader from './../utils/SkeletonLoading.vue'

const categories = ref([])
let isLoading = ref(true);

async function getCategoriesData() {
    try {
        const response = await client.getCategoriesData();
        categories.value = response.data.data.data
        setTimeout(() => isLoading.value = false, 2000);
    } catch (error) {
        console.error(error)
    }
}

onMounted(() => {
    getCategoriesData()
})

</script>

<template>
    <div v-if="isLoading == false" class="container px-4 mx-auto my-16 md:px-12" id="categories">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <CategoryCard 
            v-for="category in categories" 
            :id="category.id" 
            :key="category.id" 
            :title="category.name"
            :count="category.products_count" 
            :image="category.thumbnails" />
        </div>
    </div>
    <div class="container px-4 mx-auto my-16 md:px-12 flex flex-row" v-else>
        <SkeletonLoader class="m-4 h-60 w-80 justify-center items-center text-gray-400"> </SkeletonLoader>
        <SkeletonLoader class="m-4 h-60 w-80 justify-center items-center text-gray-400"> </SkeletonLoader>
    </div>
</template>