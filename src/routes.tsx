import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import MealList from './pages/MealList';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={MealList} path="/" exact/>
        </BrowserRouter>
    )
}

export default Routes;