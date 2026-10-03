<template>
  <div>
    <header>
      <NuxtLink class="brand" to="/">Bloom & Root Nursery</NuxtLink>
      <nav><NuxtLink to="/">Home</NuxtLink><NuxtLink to="/about/">About</NuxtLink><NuxtLink to="/blog/">Blog</NuxtLink></nav>
    </header>
    <main><slot /></main>
    <footer>© Bloom & Root Nursery</footer>
  </div>
</template>
