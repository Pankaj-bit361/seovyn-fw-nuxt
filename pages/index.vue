<script setup>
const { data: posts } = await useAsyncData("home-posts", () => queryContent("blog").sort({ date: -1 }).limit(6).find());
</script>

<template>
  <div>
    <h1>Bloom & Root Nursery</h1>
    <p class="tagline">Houseplants, patio plants and garden advice in Seattle</p>
    <p>Bloom &amp; Root is a neighborhood plant nursery in Ballard, Seattle. We sell houseplants, herbs, vegetable starts, pots and organic soil.</p>
    <p>Every plant comes with a care card that tells you how much light and water it needs. We deliver across Seattle.</p>
    <h2>From the blog</h2>
    <ul class="posts">
      <li v-for="post in posts" :key="post._path"><NuxtLink :to="post._path + '/'">{{ post.title }}</NuxtLink></li>
    </ul>
  </div>
</template>
