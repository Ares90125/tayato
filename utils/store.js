import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {

  const [value, setValue] = React.useState([])

  const store = {
    search: [value, setValue],
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}