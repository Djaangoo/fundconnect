import { createStore } from 'vuex'
import Investment from './modules/Investment'

export default createStore({
    modules: {
        investment: {
            namespaced: true,
            ...Investment
        }
    }
})
