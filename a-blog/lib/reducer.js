import blogsReducer from "./features/blogs/blogsSlice";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    blogs : blogsReducer
})

export default rootReducer