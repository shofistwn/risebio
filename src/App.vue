<script setup>
import data from '@/data.json'
import Profile from '@/components/Profile.vue'
import LinkList from '@/components/LinkList.vue'
import SocialMedia from '@/components/SocialMedia.vue'
</script>

<template>
  <main class="min-h-screen bg-slate-600 flex justify-center md:py-14">
    <div class="max-w-md w-full bg-white text-center px-8 py-14 md:rounded-md shadow">
      <Profile :profile="data.profile" />
      <SocialMedia :socialMedia="data.socialMedia" />
      <LinkList :links="data.linkList" />
    </div>
  </main>
</template>
