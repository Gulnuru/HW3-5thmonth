import { 
  legacy_createStore as createStore, 
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { counterReducer } from './counterReducer'
import { todosReducer } from './todosReducer'
import { BlankReducer } from './blankReducer'

const rootReducer = combineReducers({
    todos: todosReducer,
    counter: counterReducer,
    blank: BlankReducer,
})

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
