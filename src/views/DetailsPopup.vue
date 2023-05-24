<template>
    <div class="main">
        <header>
                <h3>Virtual Account Payment History Details</h3>
                <button class="closeBtn"><span @click="close" class="material-symbols-outlined icon">close</span></button>
        </header>
        <hr>
        <AccountDetailItems 
        :id="account.id" 
        :VirtualAccountNo="account.VirtualAccountNo"
        :PaymentName="account.PaymentName"
        :CustomerRefNo="account.CustomerRefNo"
        :CustomerDescription="account.CustomerDescription"
        :PaymentType="account.PaymentType"
        :Currency="account.Currency"
        :PaymentStatus="account.PaymentStatus"
        />
    </div>
</template>

<script lang="ts">

import AccountDetailItems from '@/components/accountDetails/AccountDetailItems.vue';
import type account from '@/interface/account';
import { defineComponent } from 'vue';
export default defineComponent ({
    name: "DetailsPopup",
    props: ['id'],
    computed: {
        account() {
            const accounts = this.$store.state["accounts"]["accounts"];
            const data = accounts.find((account: account) => account.id == this.id);
            return data;
        }
    },
    methods: {
        close() {
            this.$router.push("/");
        }
    },
    components: { AccountDetailItems }
})
</script>

<style scoped>

.main {
    margin: 11% 12% 6% 12%;
    border: 2px solid;
}
.closeBtn {
    border: none;
    background-color: transparent;
}
.closeBtn:hover {
    background-color: rgb(231, 231, 231);
}
header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-bottom: 2px;
}
th {
    background-color: rgb(240, 240, 240);
}

table, td, th {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 3px;
    font-size: 15.3px;
}

</style>