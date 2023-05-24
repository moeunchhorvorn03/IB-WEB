<template>
    <section>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Virtual Account No</th>
                    <th>Parent Account No</th>
                    <th>Payment Name</th>
                    <th>Customer Ref No</th>
                    <th>Customer Description</th>
                    <th>Payment Type</th>
                    <th>Currency</th>
                    <th>Payment Status</th>
            </tr>
            </thead>
            <tbody>
                    <tr class="link" v-for="(account) in accounts" :key="account.id" @click="link(account.id)">
                            <AccountTableData 
                            :id="account.id"
                            :VirtualAccountNo="account.VirtualAccountNo"
                            :ParentAccountNo="account.ParentAccountNo"
                            :PaymentName="account.PaymentName"
                            :CustomerRefNo="account.CustomerRefNo"
                            :CustomerDescription="account.CustomerDescription"
                            :PaymentType="account.PaymentType"
                            :Currency="account.Currency"
                            :PaymentStatus="account.PaymentStatus"
                            />
                    </tr>
            </tbody>
            <div v-if="!accounts.length">
                <h1>No data</h1>
            </div>
        </table>
        <div class="items">
            {{ items }} 
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccountTableData from './AccountTableData.vue';
export default defineComponent({
    components: {
        AccountTableData
    },
    props: ["accounts"],
    methods: {
        link(accountId: Number) {
            this.$router.push("/home/VirtualAccountPaymentHistory/" + accountId);
        },
    },
    computed: {
        items(): string {
            if (this.accounts.length < 2) {
                return this.accounts.length + " item";
            }
            else {
                return this.accounts.length + " items";
            }
        },
    }
})
</script>

<style scoped>
.items {
    display: flex;
    align-items: center;
    border: 1px solid gray;
    padding: 10px;
    width: 97.5vw;
    margin-left: -14px;
    font-size: small;
    height: .5rem;
    
}
thead {
    background-color: rgb(226, 226, 226);
}
table {
    margin-top: 90px;
    width: 100%;
    height: 100px;
}


table, th {
    border: 1px solid rgb(156, 156, 156);
    border-collapse: collapse;
    padding: 3px;
    font-size: 20px;
    text-align: center;
}
</style>