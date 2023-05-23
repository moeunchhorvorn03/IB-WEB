import type account from "@/interface/account"

export default {
    filteredAccounts (state: any){
        return state.accounts
    },
    storeData (state: any) {
        return state.accounts
    },
    account: (state:any) => (id: Number) => {
        return state.accounts.find((account:account) => account.id === id)
    }
}