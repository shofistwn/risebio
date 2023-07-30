<script>
import IconArrow from '@/components/icons/IconArrow.vue'

export default {
  props: {
    links: Object
  },
  components: {
    IconArrow
  }
}
</script>

<template>
  <div class="flex flex-col gap-y-4 mt-10">
    <a
      :href="link.link"
      target="_blank"
      class="font-medium flex justify-between items-center border-2 hover:bg-slate-950 hover:text-white hover:border-slate-950 rounded-full ps-5 pe-2 py-2"
      v-for="(link, index) of links"
      :key="index"
    >
      <div class="flex items-center gap-x-3">
        <span class="font-emoji text-2xl">{{ link.emoji }}</span>
        {{ link.text }}
      </div>
      <IconArrow />
    </a>
  </div>
</template>
