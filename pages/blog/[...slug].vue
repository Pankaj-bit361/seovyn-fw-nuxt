<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <p class="meta">{{ String(doc.date).slice(0, 10) }}</p>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>
