import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer, TRootReducer } from "./rootReducer";

// Persist config
const persistConfig = {
  key: "pixel",
  storage: storage,
  whitelist: ["auth"], // Add the reducers you want to persist
  blacklist: [], // Add the reducers you do not want to persist
};

// Create persisted reducer
const reducer = persistReducer<TRootReducer>(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: true,
      serializableCheck: false,
    }),
});

// Persistor
const persistor = persistStore(store);

export { store, persistor };
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
