import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protected = ({ component: Cmp, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (localStorage.getItem("token")) {
                return <Cmp {...props} />;
            } else {
                return <Redirect to="/login" />;
            }
        }}
    />
);

export default Protected;
