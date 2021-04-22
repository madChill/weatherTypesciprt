import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
type RouteWithLayoutType = {
  component: any,
  layout: any,
  path: string
}
const RouteWithLayout = withRouter((props: any) => {
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    props?.location?.pathname && <Route
      {...rest}
      render={(matchProps: any) => (
        // <Layout>
        <Component
          path={props?.location?.pathname}
          {...matchProps} />
        // </Layout>
      )}
    />
  );
});

export default (RouteWithLayout);
