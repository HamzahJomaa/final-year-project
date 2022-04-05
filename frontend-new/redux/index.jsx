import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/Profile"
import {
    persistStore,
    persistReducer,
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
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
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

    })
    const persistor = persistStore(store)
    return { store, persistor }
}