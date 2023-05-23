
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
                    <select name="virtual-account-number" id="virtual-account-number" v-model="virtualAccountNumber">
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
                    <input type="date" name="" id="" v-model="date">
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
            <form @submit.prevent="filteredaccounts()" class="searchby">
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
                    <input type="text" name="" id="" v-model="searchInput" @change="filback" >
                </div>
                <button class="search"><span class="material-symbols-outlined icon">search</span>Search</button>
            </form>
    </section>
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
                            <td>{{ account.id }}</td>
                            <td>{{ account.VirtualAccountNo }}</td>
                            <td>{{ account.ParentAccountNo }}</td>
                            <td>{{ account.PaymentName }}</td>
                            <td>{{ account.CustomerRefNo }}</td>
                            <td>{{ account.CustomerDescription }}</td>
                            <td>{{ account.PaymentType }}</td>
                            <td>{{ account.Currency }}</td>
                            <td>{{ account.PaymentStatus }}</td>
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

import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Filter',
    data () {
        return {
            activeClass: 'activeClass',
            virtualAccountNumber: '',
            ParentAccountNumber: '',
            date: new Date() as Date,
            period: null,
            searchBy: '',
            searchInput: ''
        }
    },
    computed: {
        items (): string {
            if(this.accounts.length < 2) {
                return this.accounts.length + ' item'
            }else {
                return this.accounts.length + ' items'
            }
        },
        accounts () {
            return this.$store.state.accounts.accounts
        },
        getDate () {
            let date_String: string = this.date.getFullYear() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getDate()
            return date_String
        },
    },
    methods: {
        link (accountId: Number) {
            this.$router.push('/home/VirtualAccountPaymentHistory/'+ accountId)
        },
//         Parent Account No
// Payment Name
// Customer Ref No
// Customer Description
// Payment Type
// Currency
// Payment Status
        filteredaccounts () {
            const dataSearch :any = {
               'Virtual Account No': 'accounts/filterVAN' ,
                'Payment Name':'accounts/filterPN',
                'Customer Ref No' : 'accounts/filterCRN',
                'Customer Description' : 'accounts/filterCD',
                'Payment Type':'accounts/filterPT',
                'Currency':'accounts/filterC',
                'Payment Status':'accounts/filterPS',
                'Parent Account No': 'accounts/filterPAN'

            }
            for (let key in dataSearch) {
                if(this.searchBy === key){ 
                    this.$store.dispatch(dataSearch[key], this.searchInput)
                }
            }



            // if(this.searchBy === 'Virtual Account No') {
            //     this.$store.dispatch('accounts/filterVAN', this.searchInput)
            //     this.searchInput = ''

            // } else if (this.searchBy === 'Payment Name') {
            //     this.$store.dispatch('accounts/filterPN', this.searchInput)
            //     this.searchInput = ''
            // } else if (this.searchBy === 'Customer Ref No') {
            //     this.$store.dispatch('accounts/filterCRN', this.searchInput)
            //     this.searchInput = ''
            // } else if (this.searchBy === 'Customer Description') {
            //     this.$store.dispatch('accounts/filterCD', this.searchInput)
            //     this.searchInput = ''
            // } else if (this.searchBy === 'Payment Type') {
            //     this.$store.dispatch('accounts/filterPT', this.searchInput)
            //     this.searchInput = ''
            // } else if (this.searchBy === 'Currency') {
            //     this.$store.dispatch('accounts/filterC', this.searchInput)
            //     this.searchInput = ''
            // } else if (this.searchBy === 'Payment Status') {
            //     this.$store.dispatch('accounts/filterPT', this.searchInput)
            //     this.searchInput = ''
            // } else if (this.searchBy === 'Parent Account No') {
            //     this.$store.dispatch('accounts/filterPAN', this.searchInput)
            //     this.searchInput = ''
            // }
        },
        filback () {
            this.$store.dispatch('accounts/getAccounts')
        }
    },
    watch: {
        searchInput(value) {
            if(value.searchInput === '') {
                this.filback()
            }
        }
    }
})
</script>

<style scoped>
.link > td:hover {
    cursor: pointer;
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

table, td, th {
    border: 1px solid rgb(156, 156, 156);
    border-collapse: collapse;
    padding: 3px;
    font-size: 15.3px;
    text-align: center;
}
header {
    display: flex;
    justify-content: space-between;
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
</style>