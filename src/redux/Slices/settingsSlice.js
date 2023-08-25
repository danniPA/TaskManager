import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme:"Light",
    language:"English"
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        themeSwitch(state,action){
            state.theme=action.payload;
        },
        languageSwitch(state,action){
            state.language=action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {themeSwitch,languageSwitch } = settingsSlice.actions

export default settingsSlice.reducer
