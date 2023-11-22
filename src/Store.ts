import { configureStore } from "@reduxjs/toolkit"
import Todoreduser from "./Feature/TodoSlice"
import Filtercolorstatus from "./Feature/Filtercolorstatus"


export const Store = configureStore({

    reducer: {

        Todo: Todoreduser,
        Filter: Filtercolorstatus

    }
})





// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch