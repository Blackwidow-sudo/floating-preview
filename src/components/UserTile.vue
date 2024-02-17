<template>
  <div
    class="flex flex-col gap-2 p-2 shadow-md bg-slate-200">
    <PreviewTooltip :open-delay="1000">
      <img
        class="w-full row-span-2 rounded"
        :src="user.picture.medium"
        alt="">
      <template #preview>
        <img
          :src="user.picture.large"
          alt="">
      </template>
    </PreviewTooltip>
    <div class="text-sm">
      <p>{{ user.name.first }}</p>
      <p>{{ user.name.last }}</p>
    </div>
  </div>
</template>

<script>
import PreviewTooltip from './PreviewTooltip.vue'

export default {
  name: 'UserTile',
  components: {
    PreviewTooltip
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
}
</script>