import {LEVEL_THREE_NEW, LEVEL_THREE_RESET, LEVEL_THREE_RESET_ACTIVE} from '../actions/level-three'

const initialState = false

export const levelThree = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_THREE_NEW): {
      return action.level
    }
    case (LEVEL_THREE_RESET): {
      return initialState
    }
    case (LEVEL_THREE_RESET_ACTIVE): {
      return false
    }
    default:
      return state
  }
}

export const levelThreeActive = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_THREE_NEW): {
      return true
    }
    case (LEVEL_THREE_RESET_ACTIVE): {
      return false
    }
    default:
      return state
  }
}
