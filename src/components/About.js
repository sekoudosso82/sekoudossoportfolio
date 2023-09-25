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
                        <h3> Full Stack Software Engineer | .NET | Java | Ruby on Rails | JavaScript | React | Redux </h3>
                        <p> As a junior Web Developer I built my first website using HTML and CSS just for fun in my undergrad years ,<br></br><br></br>
                            After my graduation for Bachelor in Computer Science in may 2019 I accelerate my learning on <br></br><br></br>
                            full stack development  
                            by completing a bootcamp for Software Engineering at Flatrion School in New York City in May 2020. 
                        </p>
                        <h2> Professional Summary </h2>
                        <p> I am a Full-stack ASP.NET developer with experience building web applications. I received 
                            my degree from CUNY Lehman College located in New York City. I love Computer Science 
                            from my community college so decide to go into IT from my first semester of Community 
                            college. I have been interested in coding and software development for some time since 
                            taking some coding classes as an undergraduate, and I have really enjoyed this field. 
                            I hope to become a senior developer in few years to mentor others. 
                        </p>
                        <p> Since deciding to shift careers, I have developed applications using both Node.js 
                            and C# in a .NET environment. I have an sp built responsive, dynamic, and flexible 
                            front ends using HTML, CSS, JavaScript, Razor Views, Express Handlebars, Angular, 
                            and React.  During my time at Revature, I have worked on several projects which 
                            expanded my skill set with both backend (including .NET, ASP.NET, Entity Framework, 
                            SQL, and SOA) and frontend technologies (HTML, CSS, JS, Typescript, and Angular). 
                            I've gained experience deploying my applications to the cloud making use of CI/CD 
                            tools, primarily Azure DevOps pushed to the Azure cloud. I've enjoyed collaborating 
                            with the other associations in my batch as we learn more about these technologies 
                            together and work collaboratively to build quality applications. It has been an 
                            excellent opportunity to learn more about different perspectives on coding as well 
                            as how to effectively communicate and plan within a team. For my latest project, 
                            I was a full-stack developer which involves facilitating the daily standup meetings 
                            and helping to resolve any blockers my teammates have. I look forward to applying 
                            all of my skills and prior experience in a position on your team.
                        </p>
                        <p>  I'm very quick to grasp new concepts and I have the passion for learning and drive to 
                            make a valuable contribution to a team. I am fully confident I can leverage my ability 
                            to pick up new software to be using it for projects very quickly. 
                        </p>
                    </div>
                </header>
    
            <main> 
                {/*  Work Experience  */}
        
                <h3> Work Experience </h3>
                <div>
                    <p>  01/01/2007 Manager at Express Market </p>
                    {/* <ul> */}
                        <li> debugin the store software to keep buniss runing </li> 
                        <li> manage small team </li>
                    {/* </ul> */}
                </div>

                <p>  I recently build my fisrt website just for fun <a href="https://www.mairieborotou.com">   www.mairieborotou.com</a></p>
                <p>I worked with some of my friends to build their websites, for example:</p>
                <p> <a href="http://www.berrybonds.studio"> www.berrybonds.studio/ </a> </p>
                <p> <a href="http://midnit3life.herokuapp.com/"> Midnit3life.herokuapp.com </a> </p>
         
        
        
                {/* <!-- // Education --> */}
       
                <h3>Education</h3>
                <p> The Flatrion School , New York, NY: Software Engineering Bootcamp, 2020-2020 </p>
                <p> Lehman College , Bronx, NY: Bachelor in Computer Science, 2017-2019 </p>
                <p> Bronx Community College , Bronx , NY: Associate in Computer Science, 2016</p>            
            
      
            </main>
    
            {/* Footer & contact info  */}
            <footer class="F-makeup">
                
                    <h2> Reach me </h2>
                        {/* <a href=>sekou.dosso82@gmail.com</a> */}
                        <a href= "https://twitter.com/twitter ">Twitter: Sekou Dosso</a>
                        <a href= "https://www.linkedin.com/in/sekou-dosso-8ab727a0/">LinkedIn: Sekou Dosso</a>
                        <a href= "https://www.facebook.com/SheaquiDeBorotou" >Facebook: Sekou Dosso</a>
                    <p>Copyright 2018 by Sekou Dosso</p>
            
            </footer>
 
                
    
            </div>
        )
    } 
}     


    export default About;
    
