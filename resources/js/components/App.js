import React from 'react';
import ReactDOM from 'react-dom';
// import Sidebar from './Sidebar';
// import Topbar from './Topbar';
// import Product from './Product';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import Dashboard from './Dashboard';
import Routers from './routers';

import { Provider } from 'react-redux'
import store from "./store";
function App() {
    return (
        <div>
            <Routers />
        </div>

    )
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}><App /></Provider>
        , document.getElementById('root')
    );
}
