import { AxiosInstance } from 'axios'
import { defineComponent } from 'vue'
import { Store } from 'vuex'
import { IRootState } from './model/interfaces'

declare module '*.vue' {
    const Component: ReturnType<typeof defineComponent>
    export default Component
}
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<IRootState>
        axios: AxiosInstance
    }
}
