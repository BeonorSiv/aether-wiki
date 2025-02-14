import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router';

import App from '../App';

const AppRouter = () => {
    
    return (
        <div>
            <BrowserRouter >
                <Routes>
                    <Route index element={<App />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;
