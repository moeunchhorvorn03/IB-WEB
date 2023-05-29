
<template>
    <section class="section1">
        <header>
            <h1>Virtual Account Payment History</h1>
            <div class="guide">
                <span class="material-symbols-outlined">help</span>
                <span>Guide</span>
            </div>
        </header>
        <br>
            <div class="AccNum">
                <div class="select1">
                    <p>Virtual Account Number</p>
                    <select name="virtual-account-number" id="virtual-account-number" v-model="VirtualAccountNumber">
                        <option disabled value="">All</option>
                    </select>
                </div>
                <div class="select2">
                    <p>Parent Account Number</p>
                    <select name="parent-account-number" id="parent-account-number" v-model="ParentAccountNumber">
                        <option disabled value="">All</option>
                    </select>
                </div>
            </div>
            <br>
            <p>Period</p>
            <div class="period">
                <div>
                    <input type="date" name="" id="" v-model="firstDate">
                </div>
                <div class="box">
                    <input type="button" name="period" id="period" value="1 Week">
                    <input type="button" name="period" id="period" value="1 month">
                    <input type="button" name="period" id="period" value="3 months">
                    <input type="button" name="period" id="period" value="6 months">
                </div>
            </div>
            <br>
            <p>Search by</p>
            <form @submit.prevent="submit" class="searchby">
                <div>
                    <select name="" id="" v-model="searchBy">
                        <option disabled value="">Select</option>
                        <option value="Virtual Account No">Virtual Account No</option>
                        <option value="Parent Account No">Parent Account No</option>
                        <option value="Payment Name">Payment Name</option>
                        <option value="Customer Ref No">Customer Ref No</option>
                        <option value="Customer Description">Customer Description</option>
                        <option value="Payment Type">Payment Type</option>
                        <option value="Currency">Currency</option>
                        <option value="Payment Status">Payment Status</option>
                    </select>
                </div>
                <div class="input">
                    <input type="text" name="" id="" v-model="searchInput" @change="change" >
                </div>
                <button class="search"><span class="material-symbols-outlined icon">search</span>Search</button>
            </form>
            <br>
            <button @click="refresh">Refresh</button>
    </section>
</template>
  
<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Filter',
    data() {
        return {
            searchBy: '',
            searchInput: '',
            firstDate: '',
            seondDate: '',
            VirtualAccountNumber: '',
            ParentAccountNumber: ''
        }
    },
    methods: {
        refresh () {
            this.$store.dispatch('accounts/getAccounts')
            this.searchInput = ''
        },
        change () {
            this.$emit('input-change')
        },
        submit() {
            this.$emit('submit-search',this.searchBy, this.searchInput)
        }
    }
})
</script>

<style scoped>
.section1 {
    font-size: 20px;
}
.guide {
    display: flex;
    align-items: center;
    gap: 1px;
}
.activeClass {
    border-color: rgba(173, 113, 2, 0.486);
}
.box > input {
    background-color: white;
    border: 1.2px solid rgb(122, 122, 122);
    width: 6rem;
}
.box > input:active {
    border-color: rgb(224, 146, 0);
}
.searchby {
    display: flex;
    align-items: center;
    gap: 10px;
}
.icon {
    font-size:large;
    margin-right: 3px;
}
.search {
    text-align: center;
    padding: 5px 30px 5px 20px ;
    display: flex;
    align-items: center;
    background-color: rgba(255, 196, 0, 0.733);
    border: none;
}
.AccNum {
    display: flex;
    gap: 10px;
}
.period {
    display: flex;
    gap: 10px;
    align-items: center;
}
header {
    display: flex;
    justify-content: space-between;
}

</style>