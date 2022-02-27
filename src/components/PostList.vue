<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { getPosts } from '../service/getPosts.js';

const posts = ref(null);
const keyword = ref('');

onMounted(async () => {
  posts.value = await getPosts();
});

const postsToShow = computed(() => {
  return posts.value?.filter(({ title }) => {
    const wordFilter = keyword.value.toLowerCase();
    return title.toLowerCase().includes(wordFilter);
  });
});

watch(postsToShow, (val, oldVal) => {
  console.log({ val, oldVal });
});
</script>

<template>
  <input type="search" v-model="keyword" />
  <ul>
    <li v-for="post in postsToShow" :key="post.id">{{ post.title }}</li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

li {
  padding: 0.25rem;
  margin: 0;
  width: 120px;
  height: 60px;
  background: #fefefe;
  overflow: hidden;
}
</style>
