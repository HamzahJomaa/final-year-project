import '../styles/globals.css'

import HeadComponent from "../components/HeadComponent";
import ScriptComponent from "../components/ScriptComponent";

import {Provider} from "react-redux";
import loadStore from "../redux/index";
import {PersistGate} from "redux-persist/integration/react";

const {store, persistor} = loadStore();

const Loading = () => (<div className="loading">
    <div className="loading-inner">
        <div className="loading-effect">
            <div className="object"></div>
        </div>
    </div>
</div>)

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={Loading} persistor={persistor}>
                <HeadComponent />
                <Component {...pageProps} />
                <ScriptComponent/>
            </PersistGate>
        </Provider>
    )
}

export default MyApp

