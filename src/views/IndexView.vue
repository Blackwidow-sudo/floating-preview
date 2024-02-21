<template>
  <div>
    <h1 class="text-2xl font-semibold text-center">IndexView</h1>
    <div class="p-4 border rounded border-slate-500">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>