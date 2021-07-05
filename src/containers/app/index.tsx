import React, { Suspense, lazy } from 'react';
import { Switch, Redirect, withRouter, Route } from 'react-router-dom';

import MainLayout from '../../components/layouts';
import Dashboard from "../home"
// const Dashboard = lazy(() => import('../home'));
import "./fontRoboto.css"

console.log("======+====================");

const Routes = (props: { location: any }) => {
    const path = props?.location?.pathname
    return (
        <MainLayout>
            <Switch>
                <Route
                    component={Dashboard}
                    exact
                    // layout={MainLayout}
                    path="/"
                />
                <Route
                    component={Dashboard}
                    exact
                    // layout={MainLayout}
                    path="/dashboard"
                />
            </Switch>
        </MainLayout>
    );
};

export default withRouter(Routes);
