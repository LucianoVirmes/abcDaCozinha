import { Breadcrumb } from 'antd'
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

interface Props {
    routes: Route[]
}

const AbcBreadCrumb = (props: Props) => {

    function itemRender(route: Route, params: any, routes: Route[], paths: string[]) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.breadcrumbName}</span>
        ) : (
                <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
            );
    }

    return (
        <div className="abc-breadcrumb">
            <Breadcrumb itemRender={itemRender} routes={props.routes} />
        </div>
    )
}

export default AbcBreadCrumb;