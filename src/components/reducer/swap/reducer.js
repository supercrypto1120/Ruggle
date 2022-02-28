import { bscLogo } from '../../../logo';
const initialState = {
  connectStatus: false,
  token1: {},
  token2: {},
}

export default function swapTokens(state = initialState, action) {
  switch (action.type) {
    case 'SET_INIT_TOKEN':
      return {
        ...state,
        token1: action.payload.token1,
        token2: action.payload.token2
      }
    case 'SWAP_TOKEN':
        let temp = state.token1;
        state.token1 = state.token2;
        state.token2 = temp;
        return {
            ...state
        }
    case 'WALLET_CONNECT_STATUS':
      return {
        ...state,
        connectStatus: action.payload.status
      }
    default:
      return state
  }
}