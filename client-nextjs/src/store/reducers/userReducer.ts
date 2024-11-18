import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {  
  token: string | null;
}


const initialState: UserState = {
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});



export const { setToken, clearToken } = userSlice.actions;
export default userSlice.reducer;
