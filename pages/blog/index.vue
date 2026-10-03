<script setup>
useHead({ title: "Blog | Bloom & Root Nursery" });
const { data: posts } = await useAsyncData("blog-posts", () => queryContent("blog").sort({ date: -1 }).find());
</script>

<template>
  <div>
    <h1>Blog</h1>
    <ul class="posts">
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path + '/'">{{ post.title }}</NuxtLink> <span class="meta">{{ String(post.date).slice(0, 10) }}</span>
      </li>
    </ul>
  </div>
</template>
