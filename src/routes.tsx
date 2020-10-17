import React from 'react';
import { BrowserRouter, match, Route } from 'react-router-dom';

import RecipeList from './pages/RecipeList';
import MealList from './pages/MealList';
import { Route as RouteInterface } from 'antd/lib/breadcrumb/Breadcrumb';
import { NewRecipe } from './pages/NewRecipe';
import AbcBreadCrumb from './components/AbcBreadCrumb';

interface AbcRoute extends RouteInterface {
    Component?: React.ReactNode
    name: string,
    path: string,
    render?: () => React.ReactNode
}

export const routesList: AbcRoute[] = [
    {
        breadcrumbName: "Refeições",
        Component: <MealList />,
        name: "Refeições",
        path: "/",
    },
    {
        breadcrumbName: "Jantares",
        render: () => <RecipeList title="Jantares" />,
        name: "Jantares",
        path: "/recipe"
    },
    {
        breadcrumbName: "Nova receita",
        name: "Nova receita",
        path: "/recipe/new-recipe",
        Component: <NewRecipe />
    }
]
     
const getPathWithoutParams = (path: string, params: any[]) => {
    if(params && Object.keys(params).length) {
        return Object.keys(params).reduce(
            (previusPath, param: any) => previusPath.replace(
                `:${param}`, params[param]
            ), path
        );   
    }
    return path;
}

const breadcrumbRoutes = (routeMatch: match<any>, routes: AbcRoute[]) => {
    const familyRoutes = routes.filter(({ path }) => routeMatch.path.includes(path));
    return familyRoutes
    .map(({ path, ...rest }) => ({
        path: getPathWithoutParams(path, routeMatch.params),
        ...rest
    })).map(({name, path}) => ({breadcrumbName: name, path}));
}

const Routes = () => {

    return (
        <BrowserRouter>
            {
                routesList.map(({ path, Component, render }, key) => (
                    <Route
                        key={key}
                        exact
                        path={path}
                        render={(props) => {
                            return (
                                <div>
                                    <AbcBreadCrumb routes={breadcrumbRoutes(props.match, routesList)} />
                                    {render ? render() : Component}
                                </div>
                            )
                        }}
                    />
                ))
            }

        </BrowserRouter>
    )
}

export default Routes;