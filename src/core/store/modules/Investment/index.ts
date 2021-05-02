import { IInvestment } from "../../../../model/interfaces"

type TEntries = {
    investment: IInvestment[];
}

type TStatus = {
    loaded: boolean
}

export interface IState {
    entries: TEntries,
    status: TStatus,
 }

const Investment = {
    state: {
        entries: {
            investment: []
        },
        status: {
            loaded: false
        }
    },
    mutations: {
        setInvestment(state: IState, payload: IInvestment[]): IState {
            state.entries.investment = payload;
            return state;
        },
        setStatus(state: IState, payload: boolean ): IState {
            state.status.loaded = payload;
            return state;
        }
    },
    actions: {}
}
export default Investment
