
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
                    <button v-for="tag in tags" @click="period = tag">{{ tag }}</button>
                </div>
            </div>
            <br>
            <p>Search by</p>
            <form @submit.prevent="submit" class="searchby">
                <div>
                    <select name="" id="" v-model="searchBy">
                        <option disabled value="">Select</option>
                        <option v-for="option in options" :value="option">{{ option }}</option>
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
            ParentAccountNumber: '',
            period: '1 Week',
            btnColor: 'rgb(224, 146, 0)',
        }
    },
    computed: {
        tags () {
            return ['1 Week', '1 month', '3 months', '6 months']
        },
        options () {
            return ['Virtual Account No','Parent Account No','Payment Name','Customer Ref No','Customer Description','Payment Type','Currency','Payment Status']
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
    },
    watch: {

    }
    
})
</script>

<style scoped>
.border-orange {
    border: 2px solid rgb(224, 146, 0);
}
button::before {
    background-color: white;
    border: 1.2px solid rgb(158, 158, 158);
}
button::after {
    border: 1.2px solid rgb(177, 139, 57);
    background-color: white;
}
.box {
    display: flex;
    gap: 9px;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  justify-content: center;
}
.box > button > input{
    clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  
}
.box > input {
    background-color: white;
}
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