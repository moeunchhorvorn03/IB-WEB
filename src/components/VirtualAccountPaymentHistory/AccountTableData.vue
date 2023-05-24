<template>
        <td>{{ id }}</td>
        <td>{{ VirtualAccountNo }}</td>
        <td>{{ ParentAccountNo }}</td>
        <td>{{ PaymentName }}</td>
        <td>{{ CustomerRefNo }}</td>
        <td>{{ CustomerDescription }}</td>
        <td>{{ PaymentType }}</td>
        <td>{{ Currency }}</td>
        <td>{{ PaymentStatus }}</td>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: ['VirtualAccountNo','ParentAccountNo','PaymentName','CustomerRefNo','CustomerDescription','PaymentType','Currency','PaymentStatus','id','']
})
</script>

<style scoped>
td {
    border: 1px solid rgb(156, 156, 156);
    border-collapse: collapse;
    padding: 3px;
    font-size: 18px;
    text-align: center;
}
td:hover {
    cursor: pointer;
    background-color: rgb(224, 224, 224);
}
</style>