import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/Profile"
import {
    persistStore,
    persistReducer
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
    version: 1,
    debug: true,
}

const persistedProfileReducer = persistReducer(persistConfig, profileReducer)


export default () => {
    const store = configureStore({
        reducer: {
            profile: persistedProfileReducer,
        }
    })
    const persistor = persistStore(store)
    return { store, persistor }
}