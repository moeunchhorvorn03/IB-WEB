export default {
    async getAccounts ( context: any ) {
        try {
            await fetch('http://localhost:4000/accounts')
                .then(response => response.json())
                .then((accounts)=> {
                    context.commit('SET_ACCOUNTS', accounts)
                })
            } catch (error) {
                console.error('There was an error!', error)
            }
        },

    filterVAN ( context: any, search: string ) {
        context.commit('filterByVAN', search)
    },
    filterPAN ( context: any, search: string ) {
        context.commit('filterByPAN', search)
    },
    filterPN ( context: any, search: string ) {
        context.commit('filterByPN', search)
    },
    filterCRN ( context: any, search: string ) {
        context.commit('filterByCRN', search)
    },
    filterCD ( context: any, search: string ) {
        context.commit('filterByCD', search)
    },
    filterPT ( context: any, search: string ) {
        context.commit('filterByPT', search)
    },
    filterPS ( context: any, search: string ) {
        context.commit('filterByPS', search)
    },
    filterC ( context: any, search: string ) {
        context.commit('filterByC', search)
    }
}