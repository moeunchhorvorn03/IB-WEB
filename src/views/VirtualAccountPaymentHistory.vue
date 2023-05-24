<template>
    <div>
        <VirtualAccountFilter 
        @submit-search="filteredaccounts()"
        @input-change="filback"
        />
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
        <VirtualAccountFilter />
    </div>
</template>

<script lang="ts">
import VirtualAccountFilter from '@/components/VirtualAccountPaymentHistory/VirtualAccountFilter.vue';
import { defineComponent } from 'vue';
export default defineComponent ({
    name: 'VirtualAccountPaymentHistory',
    components: {
        VirtualAccountFilter
    },
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
        // getDate () {
        //     let date_String: string = this.date.getFullYear() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getDate()
        //     return date_String
        // },
    },
    methods: {
        link (accountId: Number) {
            this.$router.push('/home/VirtualAccountPaymentHistory/'+ accountId)
        },
        // Modify function filteredaccounts
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

            // Original statements

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


table, td, th {
    border: 1px solid rgb(156, 156, 156);
    border-collapse: collapse;
    padding: 3px;
    font-size: 15.3px;
    text-align: center;
}

</style>