import { defineComponent } from 'vue'
import { Store } from 'vuex'
import { IState } from './core/store/modules/Investment'

declare module '*.vue' {
    const Component: ReturnType<typeof defineComponent>
    export default Component
}
declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    investment: IState
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}