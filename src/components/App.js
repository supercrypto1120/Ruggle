import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './reducer/store';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// pages
import Dex from './pages/Dex';
import Home from './pages/Home';
import IDO from "./pages/IDO";
import PageOne from './pages/PageOne';
import NavBar from './component/NavBar';

export const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <NavBar />
                </div>
                <div className='app'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/page" element={<PageOne />} />
                        <Route path="/dex" element={<Dex />} />
                        <Route path="/IDO" element={<IDO />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    )
}
