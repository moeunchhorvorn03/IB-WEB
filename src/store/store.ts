import {createStore} from 'vuex'
import accounts from './modules/accounts'
const store =  createStore({
    modules: {
        accounts
    }
})

export default store