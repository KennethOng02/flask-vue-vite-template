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
  <div>
    <h2>API Test</h2>
    <p>{{ message }}</p>
  </div>
</template>

