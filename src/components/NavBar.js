import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
// import {About,Blog,Contact,Home,Portfolio} from './Index'

import '../App.css';
// import { withRouter } from "react-router";

class NavBar extends Component
{
    render(){
        return(
            <div className= "navBarDiv"> 
            
                <div className= "home navSubDiv">
                    <NavLink  to="/home">home</NavLink> </div>               
                <div className= "portfolio navSubDiv">
                    <NavLink  to='/portfolio'>portfolio</NavLink> </div>
                <div className= "blogs navSubDiv">
                    <NavLink  to='/resume'>resume</NavLink> </div>
                <div className= "about navSubDiv">
                    <NavLink  to='/about'>about</NavLink> </div>
                <div className= "contacts navSubDiv">
                    <NavLink  to="/contacts">contacts/blogs</NavLink> </div>
                
            </div>
        )
    } 
}     


export default NavBar;
    