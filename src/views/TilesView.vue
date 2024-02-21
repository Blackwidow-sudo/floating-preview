<template>
  <div class="flex flex-wrap">
    <div
      class="flex items-center justify-center cursor-pointer size-48 bg-slate-300 hover:bg-slate-400"
      @click="onClick">
      <span>Faltblatt</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TilesView',
  methods: {
    onClick() {
      this.$router.push({ name: 'leaflets' })
    }
  }
}
</script>