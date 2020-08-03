import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import anecdoteReducer from './reducers/anecdoteReducer.js'
import notificationsReducer from './reducers/notificationsReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
	anecdotes: anecdoteReducer,
	notification: notificationsReducer,
	filter: filterReducer
})

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store

