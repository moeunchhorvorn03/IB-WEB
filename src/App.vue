<template>
  <div>
    <RouterView></RouterView>
  </div>
  <footer>

  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  created () {
        this.$store.dispatch('accounts/getAccounts')
    }
})
</script>