// import React from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
// import auth from './auth';

import Headers from './Headers';
import Footer from './Footer';

import Main from './views/Main';
import Error from './views/Error';

function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<> <Headers /> <Main /> <Footer /> </>}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;