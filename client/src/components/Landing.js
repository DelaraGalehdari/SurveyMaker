import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../images/hero_img.jpg";
import Payments from "./Payments";
import { connect } from "react-redux";
class Landing extends Component{
    renderContent(){
        switch (this.props.auth) {
            case null:
              return;
      
            case false:
              return (
                <li>
                  <a href="/auth/google">Login With Google
                  <i className="small left material-icons">input</i></a>
                </li>
              );
      
            default:
              return [
                <li key="2">
                <Payments />
              </li>,
              <li key="3" style={{margin:'0 10px'}}>
              Credits:{this.props.auth.credits}
            </li>,
                <li key="1">
                  <a href="/api/logout" style={{color:"#4801f1"}}>Logout</a>
                </li>,
               
              ];
          }
    }
    render(){

    return(
        <div>
<div style={{textAlign:"center"}}>
<img style={{marginTop:"3%"}} src={Hero}></img>
    <h3><b>Create Online Surveys, Quizzes</b></h3>
    <h6>Configure your own surveys to collect feedback,evaluation and comments.</h6>
    <Link
             to={this.props.auth ? "/surveys" : "/"} 
            
          >
    <button className="waves-effect waves-light btn blue" style={{marginTop:"3%"}}>Get Started</button>
    </Link>
</div>


</div>
    )
}
}
function mapStateToProps({ auth }) {
    return { auth: auth };
  }
  export default connect(mapStateToProps)(Landing);
