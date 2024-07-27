import User from "../types/User";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: User = {
    username: "",
    email: "",
    avatar: "",
    address: {
        street: "",
        city: "",
        zipCode: "",
        country: ""
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            return {...state, ...action.payload}
        },
        updateUser: (state, action: PayloadAction<Partial<User>>) => {
            return {...state, ...action.payload}
        },
        resetUser: () => initialState
    }
})

export const { 
    setUser, 
    updateUser, 
    resetUser } = userSlice.actions;

export default userSlice.reducer;