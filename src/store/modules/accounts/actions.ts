import axios from "axios"

export default {
    async getAccounts ({ commit }: any) {
            await axios.get('http://localhost:4000/accounts')
                .then((response) => {
                    commit('SET_ACCOUNTS', response.data)
                })
        },
    filterVAN ({commit}: any, search: any) {
        commit('filterByVAN', search)
    },
    filterPAN ({commit}: any, search: any) {
        commit('filterByPAN', search)
    },
    filterPN ({commit}: any, search: any) {
        commit('filterByPN', search)
    },
    filterCRN ({commit}: any, search: any) {
        commit('filterByCRN', search)
    },
    filterCD ({commit}: any, search: any) {
        commit('filterByCD', search)
    },
    filterPT ({commit}: any, search: any) {
        commit('filterByPT', search)
    },
    filterPS ({commit}: any, search: any) {
        commit('filterByPS', search)
    },
    filterC ({commit}: any, search: any) {
        commit('filterByC', search)
    }
}