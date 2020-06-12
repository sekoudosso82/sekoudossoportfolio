import React, {Component} from 'react'
import '../App.css';
// import { withRouter } from "react-router";

class Home extends Component
{
    render(){
            
        return(
        
            <div>
               <div className='homeMainDiv'>
                <div className='homeSubDiv'> About</div>
                <div className='homeSubDiv'>Portfolio</div>
                <div className='homeSubDiv'>Blogs</div>
                <div className='homeSubDiv'>Contact</div>
                
               </div> 
                
                
    
            </div>
        )
    } 
}     


    export default Home;
    
