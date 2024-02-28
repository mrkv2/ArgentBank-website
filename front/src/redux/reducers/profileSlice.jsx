import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    userName: '',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setGetProfile: (state, action) => {
            const { email, firstName, lastName, userName } = action.payload.data;
            state.email = email;
            state.firstName = firstName;
            state.lastName = lastName;
            state.userName = userName;
        },
        setEditProfile: (state, action) => {
            state.userName = action.payload.userName;
        },
        resetProfile: () => {
            return initialState; // Ceci réinitialise l'état du profil à son état initial
        },
    },
});

export const { setGetProfile, setEditProfile, resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
