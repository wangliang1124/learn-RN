import PropTypes from 'prop-types'
import React, { createContext, useContext, useReducer } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ reducer, initialState, children }) => (
  <ThemeContext.Provider value={useReducer(reducer, initialState)}>{children}</ThemeContext.Provider>
)

ThemeProvider.propTypes = {
  /**
   * @return {React.Node}
   */
  children: PropTypes.node.isRequired,

  /**
   * Object containing initial state value.
   */
  initialState: PropTypes.shape({}).isRequired,

  /**
   *
   * @param {object} state
   * @param {object} action
   */
  reducer: PropTypes.func.isRequired,
}

export function getState() {
  return useContext(ThemeContext)
}
