export function setInitToken(tokens) {
  return {
    type: 'SET_INIT_TOKEN',
    payload: tokens,
  }
}

export function swapToken() {
    return {
        type: 'SWAP_TOKEN',
    }
}

export function walletConnectStatus(status) {
  return {
    type: 'WALLET_CONNECT_STATUS',
    payload: status
  }
}