<script>
import IconGithub from '@/components/icons/IconGithub.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconWhatsApp from '@/components/icons/IconWhatsApp.vue'

export default {
  props: {
    socialMedia: Object
  },
  components: {
    IconGithub,
    IconTwitter,
    IconInstagram,
    IconLinkedIn,
    IconWhatsApp
  }
}
</script>

<template>
  <div class="flex justify-center gap-x-3 mt-4">
    <a :href="socialMedia.github" target="_blank">
      <IconGithub />
    </a>
    <a :href="socialMedia.twitter" target="_blank">
      <IconTwitter />
    </a>
    <a :href="socialMedia.instagram" target="_blank">
      <IconInstagram />
    </a>
    <a :href="socialMedia.linkedin" target="_blank">
      <IconLinkedIn />
    </a>
    <a :href="socialMedia.whatsapp" target="_blank">
      <IconWhatsApp />
    </a>
  </div>
</template>
