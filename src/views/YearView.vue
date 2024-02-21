<template>
  <div>
    <h1 class="text-xl text-center">
      {{ $route.params.year }}
    </h1>
    <div class="flex flex-wrap gap-2 p-4">
      <div
        v-for="(week, i) in weeks"
        class="flex items-center justify-center cursor-pointer size-48 bg-slate-300 hover:bg-slate-400"
        :key="i"
        @click="onClick(week)">
        <span>{{ week }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Years',
  computed: {
    weeks() {
      return Array.from({ length: 52 }, (_, k) => {
        const week = k + 1
        
        return week < 10 ? `KW 0${week}` : `KW ${week}`
      })
    },
  },
  methods: {
    onClick(week) {
      this.$router.push({ name: 'weeks', params: { week } })
    }
  }
}
</script>