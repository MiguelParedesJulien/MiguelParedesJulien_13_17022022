import { BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Login from "pages/login/Login";
import LoginJWT from "utils/storage/LoginJWT";
import PropTypes from "prop-types";
import React from "react";
import { routes } from "router/routes";
import { SubRoutes } from "router/subRoutes";

const App = (props) => {
  // to log in the user using the JWT Token
  LoginJWT();

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>{routes.map((route, index) => (!props.connected && route.private ? <Login key={index} exact path={route.path} /> : <SubRoutes key={index} {...route} />))}</Switch>
        <Footer />
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    connected: state.user.connected,
  };
};

App.propTypes = {
  connected: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
