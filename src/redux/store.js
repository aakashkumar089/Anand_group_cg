import {configureStore, createSlice, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: () => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.products = state.products.push(action.payload);
    },
  },
});

export const {login, logout} = authSlice.actions;
export const {addToCart} = cartSlice.actions;

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  cart: cartSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const configStore = () => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  });

  let persistor = persistStore(store);
  return {store, persistor};
};
