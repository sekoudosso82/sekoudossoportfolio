import React, {Component} from 'react'
import '../App.css';
// import { withRouter } from "react-router";

class About extends Component
{
    render(){
            
        return(
        
            <div>
                 {/* Intro  */}
                <header class="">
                    <div class="div2">
                        <h2> Sekou Dosso </h2>
                        <h3> Full Stack Software Engineer | Developer | Ruby on Rails | JavaScript | React | Redux </h3>
                        <p> As a junior Web Developer I built my first website using HTML and CSS just for fun in my undergrad years ,<br></br><br></br>
                            After my graduation for Bachelor in Computer Science in may 2019 I accelerate my learning on <br></br><br></br>
                            full stack development  
                            by completing a bootcamp for Software Engineering at Flatrion School in New York City in May 2020. 
                        </p>
                       
                    </div>
                </header>
    
            <main> 
                {/*  Work Experience  */}
        
                <h3> Work Experience </h3>
                <p>  I recently build my fisrt website just for fun <a href="https://www.mairieborotou.com">   www.mairieborotou.com</a></p>
                <p>I worked with some of my friends to build their websites, for example:</p>
                <p> <a href="http://www.berrybonds.studio"> www.berrybonds.studio/ </a> </p>
                <p> <a href="http://midnit3life.herokuapp.com/"> Midnit3life.herokuapp.com </a> </p>
         
        
        
                {/* <!-- // Education --> */}
       
                <h3>Education</h3>
                <p> Bronx Community College , Bronx , New York: Associate in Computer Science, 2006</p>            
                <p> Lehman College , Bronx, New York: Bachelor in Computer Science, 2017-2019 </p>
            
      
            </main>
    
            {/* Footer & contact info  */}
            <footer class="F-makeup">
                
                    <h2> Reach me </h2>
                        {/* <a href=>sekou.dosso82@gmail.com</a> */}
                        <a href= "https://twitter.com/twitter ">Twitter: Sekou Dosso</a>
                        <a href= "#">LinkedIn: Sekou Dosso</a>
                        <a href= "#" >Facebook: Sekou Dosso</a>
                    <p>Copyright 2018 by Sekou Dosso</p>
            
            </footer>
 
                
    
            </div>
        )
    } 
}     


    export default About;
    
