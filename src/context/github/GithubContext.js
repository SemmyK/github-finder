import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
	//define initial state for the reducer
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	}

	//connect with githubReducer to be able to get current state and to dispatch actions to change state or part of state
	const [state, dispatch] = useReducer(githubReducer, initialState)

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
