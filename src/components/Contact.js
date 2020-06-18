import React, {Component} from 'react'
import '../App.css';
// import { withRouter } from "react-router";

class Contact extends Component
{
    render(){
            
        return(
            <div>
                {/* <div className='homeSubDiv homeContactDiv'> */}
                        <h2> Contact and Blogs </h2>
                        {/* <div className='contactSubDiv'>  */}
                        <div className='homeContactSubDiv'>  
                            <h3> <a href='mailto:sekou.dosso82@gmail.com'> Email Me</a> </h3>
                        </div>
                        <div className='homeContactSubDiv'>  
                            <h3> <a href='https://www.linkedin.com/in/sekou-dosso-8ab727a0/'> LinkedIn </a> </h3>  
                        </div>
                        <div className='homeContactSubDiv'>  
                            <h3> <a href='https://twitter.com/Sheaquidiesel'> Twitter </a> </h3>    
                        </div>
                        <div className='homeContactSubDiv'>  
                            <h3> <a href='https://www.facebook.com/SheaquiDeBorotou'> Facebook </a> </h3>                             
                        </div>
                        <div className='homeContactSubDiv'>  
                            <h3> <a href='https://www.instagram.com/sheaquidiesel/'> Instagram </a> </h3>                            
                        </div>
                        <div className='homeContactSubDiv'>  
                        <h3> <a href='https://github.com/sekoudosso82'> Github </a> </h3>    
                        </div>
                        <div className='homeContactSubDiv'>  
                            <h3> <a href='https://medium.com/@sekou.dosso82_17502'> Medium </a> </h3>                             
                        </div>
                        <div className='homeContactSubDiv'>  
                            <h3>  Phone: 646 925 2132 </h3>                            
                        </div>


                        
                {/* </div>  */}
            </div>
        )
    } 
}     


    export default Contact;
    
