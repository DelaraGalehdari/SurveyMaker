import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import Logo from "../images/Logo.png";

class Header extends Component {
  state = {};
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      default:
        return [
          <li key="2">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits:{this.props.auth.credits}
          </li>,
          <li key="1">
            <a href="/api/logout" >
              Logout
            </a>
          </li>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div
          className="nav-wrapper"
          style={{ backgroundColor: "black" }}
        >
          <Link to="/" className="left brand-logo">
            <img src={Logo} alt="Logo" width="80%" style={{marginLeft:'2%'}} />
          </Link>
          <ul className="right" style={{marginRight:'2%'}}>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

//define map state
function mapStateToProps({ auth }) {
  return { auth: auth };
}
export default connect(mapStateToProps)(Header);
