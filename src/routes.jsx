import { Redirect, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import { PageLoader } from "./components/common/PageLoader";
import { notFound } from "./components/common/404NotFound";
import HeaderComponent from "./components/common/Header";
import FooterComponent from "./components/common/Footer";
import { connect } from "react-redux";

import ReduxToastr from "react-redux-toastr";
import { useState, useEffect } from "react";

const LoadingComponent = () => {
  return <PageLoader />;
};

const BankComponent = loadable(() => import("./components/Banks"), {
  fallback: <LoadingComponent />,
});

const BankDetailComponent = loadable(() => import("./components/BankDetails"), {
  fallback: <LoadingComponent />,
});

const Login = loadable(() => import("./components/Login"), {
  fallback: <LoadingComponent />,
});

const PrivateRouteComponent = (props) => {
  const { component: Component, globalReducer, ...rest } = props;

  return (
    <>
      {localStorage.getItem("loggedInUser") ? (
        <Route
          {...rest}
          render={(props) => (
            <>
              <ReduxToastr
                timeOut={1000}
                newestOnTop={false}
                preventDuplicates
                position="top-center"
                getState={(state) => state.toastr} // This is the default
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
              />
              <div className="container-fluid main m-0 p-0">
                <HeaderComponent />
                {globalReducer.isLoading && <LoadingComponent />}
                <Component {...props} />
                <FooterComponent />
              </div>
            </>
          )}
        />
      ) : (
        <Redirect to={`${process.env.PUBLIC_URL}/login`} />
      )}
    </>
  );
};
const mapStateToProps = ({ globalReducer }) => ({
  globalReducer,
});

const PrivateRoute = connect(mapStateToProps, null)(PrivateRouteComponent);

export default (
  <div>
    <Switch>
      {/* <Route
        exact
        path={`${process.env.PUBLIC_URL}/`}
        component={(props) => <Header {...props} />}
      /> */}
      <PrivateRoute
        exact
        path={`${process.env.PUBLIC_URL}/try`}
        component={HeaderComponent}
      />
      <PrivateRoute
        exact
        path={`${process.env.PUBLIC_URL}/account-detail/:bankid`}
        component={BankDetailComponent}
      />
      <PrivateRoute
        exact
        path={`${process.env.PUBLIC_URL}/`}
        component={BankComponent}
      />
      <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
      <Route path="*" component={notFound} />
    </Switch>
  </div>
);
