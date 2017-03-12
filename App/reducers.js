/**
 * Created by letqt on 12/3/17.
 */
import {types} from './actions'

const initState = {
  girls: []
}

// Get the data given by action and update the state
export function reducers(state = initState, action) {
  const {girls} = state
  const {payload} = action

  switch (action.type) {
    case types.FETCH_ALL:
      const girls = payload.girls
      return {girls}

    case types.EDIT:
      return {girls: []}

    default:
      return state
  }
}