<template>
  <div>
    <h1 class="text-xl font-semibold text-center">LeafletsView</h1>
    <div class="flex flex-wrap gap-2 p-4 border border-black rounded">
      <div
        v-for="(year, i) in years"
        class="flex items-center justify-center cursor-pointer size-48 bg-slate-300 hover:bg-slate-400"
        :key="i"
        @click="onClick(year)">
        <span>{{ year }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leaflet',
  computed: {
    /**
     * Years since 2011
     * 
     * @returns {number[]}
     */
     years() {
      const currentYear = new Date().getFullYear()

      return Array.from({ length: currentYear - 2011 }, (_, k) => k + 2011)
    }
  },
  methods: {
    onClick(year) {
      this.$router.push({ name: 'year', params: { year } })
    }
  }
}
</script>