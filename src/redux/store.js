import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import tableReducer from './Slices/tableSlice';
import settingsSlice from './Slices/settingsSlice';
import userSlice from './Slices/userSlice';
import tableSlice from './Slices/tableSlice';

const settingsPersistConfig = {
  key: 'settings',
  storage,
};

const userDataPersistConfig = {
  key: 'user',
  storage,
};

const tableDataPersistConfig = {
  key: 'table',
  storage,
};

const rootReducer = {
  table: persistReducer(tableDataPersistConfig, tableSlice),
  settings: persistReducer(settingsPersistConfig, settingsSlice),
  user: persistReducer(userDataPersistConfig,userSlice),
};

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
