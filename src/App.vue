<template>
  <div class="contents">
    <nav class="px-4 bg-sky-200">
      <ul class="flex gap-1">
        <li
          v-for="(route, i) in routes"
          :key="i">
          <router-link
            :class="['block', 'px-4', 'py-2', 'hover:bg-sky-300', isCurrent(route) ? 'bg-sky-300' : '']"
            :to="route.path">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <main class="container mx-auto mt-6">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import UserTiles from './components/UserTiles.vue';
import { routes } from './router';

export default {
  components: {
    UserTiles
  },
  data() {
    return {
      routes
    }
  },
  methods: {
    isCurrent(route) {
      return this.$route.path === route.path
    }
  }
}
</script>
