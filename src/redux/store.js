import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countryReducer from './reducers'

const store = createStore(countryReducer, applyMiddleware(thunk))

export default store