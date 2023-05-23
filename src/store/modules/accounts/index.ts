
import type account from "@/interface/account"
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"



export default {
    namespaced: true,
    state: {
        accounts: [] as account[]
    },
    getters,
    actions,
    mutations
}