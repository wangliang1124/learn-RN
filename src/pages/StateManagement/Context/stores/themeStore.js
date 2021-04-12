import { sleep } from '~/utils'

export const initialState = { theme: 'light' }

export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }
    default:
      return state
  }
}

export const toggleTheme = async (dispatch) => {
  await sleep(1000)

  dispatch({ type: 'changeTheme' })
}
