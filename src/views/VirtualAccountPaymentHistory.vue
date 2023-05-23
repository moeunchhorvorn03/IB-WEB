<template>
    <div>
        <VirtualAccount />
    </div>
</template>

<script lang="ts">
import VirtualAccount from '@/components/VirtualAccountPaymentHistory/VirtualAccount.vue';
import { defineComponent } from 'vue';
export default defineComponent ({
    name: 'VirtualAccountPaymentHistory',
    components: {
        VirtualAccount
    }
})
</script>

<style scoped>

</style>