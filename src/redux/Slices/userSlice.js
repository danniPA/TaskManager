import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:"",
    username: "",
    login:false,
    id:0,
    availableTables:1,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logInAccount(state,action){
            const { name, username, login, id } = action.payload;
            state.name = name;
            state.username = username;
            state.login = login;
            state.id = id;
            state.availableTables = 10;
        },
        logOutAccount(state){
            state.name = "";
            state.username = "";
            state.login = false;
            state.id = 0;
        },
    },
})

// Action creators are generated for each case reducer function
export const { logInAccount,logOutAccount} = userSlice.actions

export default userSlice.reducer
