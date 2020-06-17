import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../App.css';
// import { withRouter } from "react-router";

class Home extends Component
{
    render(){
            
        return(
        
            <div>
               <div className='homeMainDiv'>
                    <div className='homeSubDiv'> 
                        <header class="">
                            <div class="div2">
                                <h2> Hi, I'm Sekou Dosso </h2>
                                <h3> Full Stack Software Engineer | Developer | Ruby on Rails | JavaScript | React | Redux </h3>
                                <p> As a junior Web Developer I built my first website using HTML and CSS just for fun in my undergrad years ,<br></br><br></br>
                                    After my graduation for Bachelor in Computer Science in may 2019 I accelerate my learning on <br></br><br></br>
                                    full stack development  
                                    by completing a bootcamp for Software Engineering at Flatrion School in New York City in May 2020. 
                                </p>

                                <h2>  
                                    <NavLink  to='/resume'>read more</NavLink> 
                                </h2>
                            
                            </div>
                    </header>
                    </div>
                    <div className='homeSubDiv'>
                        <h3> <a href='https://github.com/sekoudosso82/sekoudossoportfolio'> sekoudossoportfolio </a> </h3>
                        <h3> <a href='https://github.com/sekoudosso82/my-to-do-list'> my-to-do-list </a> </h3>
                        <h3> <a href='https://github.com/sekoudosso82/School'> School </a> </h3>
                        <h3> <a href='https://github.com/sekoudosso82/corona-market-front-end'> Corona-market </a> </h3>
                        <h3> <a href='https://github.com/sekoudosso82/Best-Deals'> Best deal </a> </h3>
                        <h3> <a href='https://github.com/sekoudosso82/flat-gram-back-end'> Flatgram </a> </h3>
                        <h3> <a href='https://github.com/WabaScript/HashtagGoals'> HashtagGoal </a> </h3>
                        <h3> <a href='https://github.com/sekoudosso82/banking_CLI'> Bank CLI app </a>  </h3>
                    </div>
                    <div className='homeSubDiv'>Resume</div>
                    <div className='homeSubDiv'>
                        <div className='contactSubDiv'> 
                            <h3> <a href='mailto:sekou.dosso82@gmail.com'> Email Me</a> </h3>
                            <h3> <a href='https://www.linkedin.com/in/sekou-dosso-8ab727a0/'> LinkedIn </a> </h3>
                            <h3> <a href='https://twitter.com/Sheaquidiesel'> Twitter </a> </h3>
                            <h3> <a href='https://www.facebook.com/SheaquiDeBorotou'> Facebook </a> </h3>
                            <h3> <a href='https://www.instagram.com/sheaquidiesel/'> Instagram </a> </h3>
                            <h3> <a href='https://github.com/sekoudosso82'> Github </a> </h3>
                            <h3> <a href='https://medium.com/@sekou.dosso82_17502'> Medium </a> </h3>
                            <h3>  Phone: 646 925 2132 </h3>

                        </div>
                    </div> 
                </div> 
            </div>
        )
    } 
}     


    export default Home;
    
