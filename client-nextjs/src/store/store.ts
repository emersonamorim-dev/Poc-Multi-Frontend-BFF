import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import userReducer from './slices/userSlice';  

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;

// Criação da store
const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,  
    },
    devTools: process.env.NODE_ENV !== 'production',  
  });

// Configuração do wrapper Redux
export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: false,  
});

export default makeStore;

