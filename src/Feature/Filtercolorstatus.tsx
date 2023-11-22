import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Typestate {

    status: string,
    colors: string[]

}

const initialState: Typestate = {

    status: "ALL",
    colors: []
}

// eslint-disable-next-line react-refresh/only-export-components
const Filtercolorstatus = createSlice({
    name: 'filter',
    initialState,
    reducers: {

        ADDCOLOR: (state, action: PayloadAction<string>) => {

            const color = action.payload

            if (!state.colors.includes(color)) {

                state.colors.push(color)
            } else {

                return {
                    ...state,
                    colors: state.colors.filter(li => li !== color)
                }
            }


        },
        ADDSTATUS: (state, action: PayloadAction<string>) => {

            const status1 = action.payload

            state.status = status1

        }
    }
})


export const { ADDCOLOR, ADDSTATUS } = Filtercolorstatus.actions
export default Filtercolorstatus.reducer