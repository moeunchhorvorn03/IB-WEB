export default {
    SET_ACCOUNTS (state: any, data: any) {
        state.accounts = data
    },
    filterByVAN (state: any, search: any) {
        state.accounts = state.accounts.filter((account: any) => account.VirtualAccountNo.includes(search))
    },
    filterByPAN (state: any, search: any) {
        state.accounts = state.accounts.filter((account: any) => account.ParentAccountNo.includes(search))
    },
    filterByPN (state: any, search: any) {
        state.accounts = state.accounts.filter((account: any) => account.PaymentName.toLowerCase().includes(search.toLowerCase()))
    },
    filterByCRN (state: any, search: any) {
        state.accounts = state.accounts.filter((account: any) => account.CustomerRefNo.includes(search))
    },
    filterByCD (state: any, search: any) {
        state.accounts = state.accounts.filter((account: any) => account.CustomerDescription.toLowerCase().includes(search.toLowerCase()))
    },
    filterByPT (state: any, search: any) {
        state.accounts = state.accounts.filter((account: any) => account.PaymentType.toLowerCase().includes(search.toLowerCase()))
    },
    filterByC (state: any, search: any) {
        state.accounts = state.accounts.filter((account: any) => account.Currency.toLowerCase().includes(search.toLowerCase()))
    },
    filterByPS (state: any, search: any) {
        state.accounts = state.accounts.filter((account: any) => account.PaymentStatus.toLowerCase().includes(search.toLowerCase()))
    }
}