import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id: "",
    token: ""
};

const profileReducer = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action) => action.payload,
    },
});

export const { setProfile, addNewFollower, removeFollow, updateLang } =
    profileReducer.actions;
export default profileReducer.reducer;