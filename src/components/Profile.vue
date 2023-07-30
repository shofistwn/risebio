<script>
export default {
  props: {
    profile: Object
  }
}
</script>

<template>
  <div>
    <img :src="profile.photo" :alt="profile.name" class="mx-auto w-40 rounded-full" />
    <h1 class="text-4xl font-semibold capitalize mt-4">{{ profile.name }}</h1>
    <p class="text-slate-500 leading-relaxed mt-2">
      {{ profile.description }}
    </p>
  </div>
</template>
