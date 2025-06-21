<script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  const users = ref([])
  const newUser = ref({
    name: '',
    email: '',
  })

  const fetchUsers = async () => {
    const res = await axios.get('/api/users')
    users.value = res.data
  }

  const addUser = async () => {
    const res = await axios.post('/api/users', newUser.value)
    users.value.push(res.data)

    newUser.value = {
      name: '',
      email: '',
    } // reset new user
  }

  const deleteUser = async (id) => {
    await axios.delete(`/api/users/${id}`) 
    users.value = users.value.filter(user => {
      return user.id !== id
    })
  }

  const updateEmail = async (id) => {
    await axios.put(`/api/users/${id}`, {
      email: 'updated email'
    })
    await fetchUsers() // Refetch the updated list
  }

  onMounted(fetchUsers) // get the users list from backend api
</script>

<template>
  <div>
    <h2>Users</h2>
    <form @submit.prevent="addUser">
      <input v-model="newUser.name" placeholder="Add user" required />
      <br />
      <input v-model="newUser.email" placeholder="User email" required />
      <br />
      <button>Add</button>
    </form>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        |
        <small>Email: {{ user.email }}</small>
        |
        <button @click="deleteUser(user.id)">Delete</button>
        |
        <button @click="updateEmail(user.id)">Update Email</button>
      </li>
    </ul>
  </div>
</template>
