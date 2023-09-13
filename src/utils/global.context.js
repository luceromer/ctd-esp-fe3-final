import { createContext, useReducer } from "react"
import { dentistEndpoint } from "./endpoints"

export const initialState = { theme: "light", data: [], individualData: {} }

export const ContextGlobal = createContext(undefined)

export const globalStateReducer = (state, action) => {
  switch (action.type) {
    case "theme":
      const newState = state.theme === "dark" ? "light" : "dark"
      return { ...state, theme: newState }
    case "getAllData":
      return { ...state, data: action.payload }
    case "getIndividualData":
      return { ...state, individualData: action.payload }
    default:
      return state
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [globalStates, dispatch] = useReducer(globalStateReducer, initialState)
  const { theme, data, individualData } = globalStates

  const getAllData = (data) => {
    dispatch({ type: "getAllData", payload: data })
  }

  const getIndividualData = (individualData) => {
    dispatch({ type: "getIndividualData", payload: individualData })
  }

  const toggleTheme = (theme) => {
    dispatch({ type: "theme", payload: theme })
  }

  return (
    <ContextGlobal.Provider value={{ theme, data, individualData, toggleTheme, getAllData, getIndividualData }}>
      {children}
    </ContextGlobal.Provider>
  )
}
