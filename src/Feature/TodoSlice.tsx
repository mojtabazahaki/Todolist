/* eslint-disable react-refresh/only-export-components */

import { createSlice, nanoid, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export interface Todo {

    id: string,
    task: string,
    completed: boolean,
    color: string
}
export interface Listtodo {

    Loding: string,
    Todostate: { [key: string]: Todo; }
}

const initialState: Listtodo = {
    Loding: "isloding",
    Todostate: {}

}

export const fechtata = createAsyncThunk("fechdata/todo",
    async () => {

        return await axios.get(" http://localhost:3000/todo")
            .then(res => res.data
            )

    }
)
export const posttodos = createAsyncThunk("fechpost/todo",
    async (nametodo: string) => {

        await axios.post<Todo>(`http://localhost:3000/todo`, {
            id: nanoid(),
            task: nametodo,
            completed: false,
            color: "red",
        }

        )


    }
)




const TodosReducer = createSlice({

    name: "Todos",

    initialState,


    extraReducers(builder) {
        builder.addCase(fechtata.pending, (state) => {
            state.Loding = "isloding"
        })
        builder.addCase(fechtata.fulfilled, (state, action: PayloadAction<Todo[]>) => {
            state.Loding = "noloder"
            const todos = action.payload

            todos.forEach((todo: Todo) => {

                state.Todostate[todo.id] = todo

            })
        })

    },

    reducers: {

        ADDTODO: (state, action: PayloadAction<string>) => {

            const todoName: string = action.payload;
            const id = nanoid()
            state.Todostate[id] = { id: id, color: "", completed: false, task: todoName }
        },

        TOGGLETOD: (state, action: PayloadAction<string>) => {

            const todoId: string = action.payload;
            state.Todostate[todoId].completed = !state.Todostate[todoId].completed
        },
        DELETTODO: (state, action: PayloadAction<string>) => {

            const todoId: string = action.payload;
            delete state.Todostate[todoId]
        },
        ADDCOLORTODO: {
            reducer(state, action: PayloadAction<{ id: string, color: string }>) {

                const { id, color } = action.payload

                state.Todostate[id].color = color

            },
            prepare(idtodo, color) {

                return {

                    payload: {
                        id: idtodo,
                        color
                    }
                }
            }
        }
    }

})






export const { ADDTODO, TOGGLETOD, DELETTODO, ADDCOLORTODO } = TodosReducer.actions

export default TodosReducer.reducer