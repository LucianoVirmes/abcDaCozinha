import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RecipeList from './pages/RecipeList';
import MealList from './pages/MealList';
import { Route as RouteInterface } from 'antd/lib/breadcrumb/Breadcrumb';

interface RenderComponentProps {

}

interface AbcRoute extends RouteInterface {
    component?: React.ComponentType,
    name: string,
    path: string,
    render?: (props: RenderComponentProps) => React.ReactNode
}

export const routesList:AbcRoute[] = [
    {   
        breadcrumbName: "Refeições",
        component: MealList,
        name: "",
        path: "/",
    },
    {
        breadcrumbName: "Jantares",
        render: () => <RecipeList title="Jantares" />,
        name: "Jantares",
        path: "/recipe"
    }
]

const Routes = () => {
    return (
        <BrowserRouter>
            {
                routesList.map(route => (
                    <Route component={route.component} path={route.path} name={route.name} render={route.render} exact />
                ))
            }

        </BrowserRouter>
    )
}

export default Routes;