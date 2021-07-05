import React, { Suspense, lazy } from 'react';
import { Switch, Redirect, withRouter, Route } from 'react-router-dom';

import MainLayout from '../../components/layouts';

const Dashboard = lazy(() => import('../home'));
import "./fontRoboto.css"

const Routes = (props: { location: any }) => {
    const path = props?.location?.pathname
    return (
        <MainLayout>
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
        </MainLayout>
    );
};

export default withRouter(Routes);
