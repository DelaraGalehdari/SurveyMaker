import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
        </div>
        <div>
          <footer
            className="page-footer"
            style={{ backgroundColor: "#404040", marginTop: "2%",padding:'2%' }}
          >
            <div className="footer-copyright" style={{textAlign:'center'}}>© 2021 Copyright  Delara Galehdari
            <a class="grey-text text-lighten-4 right" href="http://delaragalehdari.altervista.org/">Delara.gi@gmail.com</a></div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}
export default connect(null, actions)(App);
