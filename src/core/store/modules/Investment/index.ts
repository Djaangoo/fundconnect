import { ActionContext } from 'vuex'
import {
    IAllocation,
    IInvestment,
    IRootState
} from '../../../../model/interfaces'

type TStatus = {
    loaded: boolean
}

type TAllocationData = {
    y: number
    name: string
}
type TPerformanceData = [number, number]

export interface IState {
    investments: IInvestment[]
    currentInvestment: IInvestment
    status: TStatus
}

const Investment = {
    state: {
        investments: [],
        currentInvestment: {},
        status: {
            loaded: false
        }
    },
    mutations: {
        setInvestments(state: IState, payload: IInvestment[]): IState {
            state.investments = payload
            return state
        },
        setCurrentInvestment(state: IState, payload: IInvestment): IState {
            state.currentInvestment = payload
            return state
        },
        setStatus(state: IState, payload: boolean): IState {
            state.status.loaded = payload
            return state
        }
    },
    actions: {
        setInvestments(
            context: ActionContext<IState, IRootState>,
            investments: IInvestment[]
        ): void {
            context.commit('setInvestments', investments)
            context.commit('setStatus', true)
        },
        setCurrentInvestment(
            context: ActionContext<IState, IRootState>,
            investment: IInvestment
        ): void {
            context.commit('setCurrentInvestment', investment)
        },
        setStatus(
            context: ActionContext<IState, IRootState>,
            status: boolean
        ): void {
            context.commit('setStatus', status)
        }
    },
    getters: {
        prepareAllocations(state: IState): TAllocationData[] {
            if (state.currentInvestment._id) {
                return state.currentInvestment.value.AllocationCountry.map(
                    (allocation: IAllocation) => {
                        return {
                            name: allocation.Key,
                            y: allocation.Value
                        }
                    }
                )
            } else {
                return []
            }
        },
        preparePerformance(state: IState): TPerformanceData[] {
            if (state.currentInvestment._id) {
                return state.currentInvestment.value.Performance.map(
                    (perform) => {
                        return [Date.parse(perform.Date), perform.Value]
                    }
                )
            } else {
                return []
            }
        }
    }
}
export default Investment
