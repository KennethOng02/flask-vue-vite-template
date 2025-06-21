<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const message = ref('Loading...')

onMounted(async () => {
  try {
    const res = await axios.get('/api/hello')
    message.value = res.data.message
  } catch (error) {
    message.value = 'Failed to load message'
    console.error(error)
  }
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">API Test</h2>
      <p class="text-gray-600 text-lg">{{ message }}</p>
    </div>
  </div>
</template>
