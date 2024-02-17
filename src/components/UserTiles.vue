<template>
  <div class="grid grid-cols-8 gap-2 p-4">
    <UserTile
      v-for="item in users"
      :user="item" />
  </div>
</template>

<script>
import UserTile from './UserTile.vue'

export default {
  name: 'UserTiles',
  components: {
    UserTile
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    fetch('https://randomuser.me/api?results=50')
      .then(res => res.json())
      .then(data => {
        this.users = data.results
      })
  }
}
</script>