import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConnectionType } from '../../../connection'

const initialState: any = {
  selectedWallet: ConnectionType.INJECTED,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSelectedWallet: (state, action: PayloadAction<ConnectionType>) => {
      state.selectedWallet = action.payload
    },
  },
})

export const { setSelectedWallet } = counterSlice.actions

export default counterSlice.reducer

// export * as ActionCreators from './counter.actions'
