<template>
    <div>
        <AccountFilter @submit-search="filteredaccounts" @input-change="filback" />
        <AccountTable :accounts="accounts" />
    </div>
</template>

<script lang="ts">
import AccountTable from '@/components/VirtualAccountPaymentHistory/AccountTable.vue'
import AccountFilter from '@/components/VirtualAccountPaymentHistory/AccountFilter.vue';
import accounts from '@/store/modules/accounts';
import { defineComponent } from 'vue';
export default defineComponent ({
    name: 'VirtualAccountPaymentHistory',
    components: {
        AccountFilter,
        AccountTable
    },
    emits: ['submit-search','input-change'],
    computed: {
        accounts () {
            return this.$store.state.accounts.accounts
        }
        // getDate () {
        //     let date_String: string = this.date.getFullYear() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getDate()
        //     return date_String
        // },
    },
    methods: {
        // Modify function filteredaccounts
        filteredaccounts (searchBy: string, searchInput: string) {
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
            for (const key in dataSearch) {
                if(searchBy === key){ 
                    this.$store.dispatch(dataSearch[key], searchInput)
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
        searchInput(value: any) {
            if(value.searchInput === '') {
                this.filback()
            }
        }
    }
})
</script>

<style scoped>

</style>