import { setValue } from '.'
import { AppDispatch, RootState } from '../../configureStore'
import { decrementCounterValue, incrementCounterValue } from './counter.helpers'

// an action
export const updateCounterValue =
  (type: string) =>
  async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
    try {
      const store = getState()

      if (type === 'inc') {
        dispatch(setValue(incrementCounterValue(store.counter.value)))
      } else {
        dispatch(setValue(decrementCounterValue(store.counter.value)))
      }
    } catch (error) {
      console.error('Error: updateCounterValue() -', error)
    }
  }
