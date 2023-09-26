import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import '../App.css';
// import { withRouter } from "react-router";

class Home extends Component
{
    render(){
            
        return(
        
            <div>
               <div className='homeMainDiv second'>
                    <div className='homeSubDiv portfolioAbouthomeDiv'> 
                        <header class="">
                            <div class="div2">
                                {/* <h2> About Me </h2> */}
                                <h2> Hi, I'm Sekou Dosso </h2>
                                <h3> Full Stack Software Engineer | Developer | Ruby on Rails | JavaScript | React | Redux </h3>
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

                                <h3>  
                                    <NavLink  to='/resume'>read more</NavLink> 
                                </h3>
                            
                            </div>
                    </header>
                    </div>
                    <div className='homeSubDiv portfolioAbouthomeDiv'>
                        {/* <h3> Projects </h3> */}
                        <div>   
                                    <NavLink className='homeFullPortfolioSubDiv' to='/portfolio'>Go to Full Portfolio</NavLink> 
                        </div>
                        
                        <div className='homePortfolioSubDiv'>  
                            <h3 className='portfolioTextAlign'> <a href='https://sekoudosso82.github.io/'> mairie borotou </a> </h3>
                        </div>
                        <div className='homePortfolioSubDiv'>  
                            <h3 className='portfolioTextAlign'> <a href='https://sekoudosso82.github.io/ironlady/'> ironlady </a> </h3>
                        </div>

                        <div className='homePortfolioSubDiv'>  
                                                    <h3 className='portfolioTextAlign'> <a href='https://sekoudossoportfolio.netlify.app/'> sekoudossoportfolio </a> </h3>
                            {/* <h3 className='portfolioTextAlign'> <a href='https://github.com/sekoudosso82/sekoudossoportfolio'> sekoudossoportfolio </a> </h3> */}
                        </div>
                        <div className='homePortfolioSubDiv'> 
                        <h3 className='portfolioTextAlign'> <a href='https://sekoudosso82.github.io/sekouschedule/'> Sekou calendar </a> </h3>
                            {/* <h3 className='portfolioTextAlign'> <a href='https://github.com/sekoudosso82/my-to-do-list'> my-to-do-list </a> </h3> */}
                        </div>
                        <div className='homePortfolioSubDiv'> 
                            <h3 className='portfolioTextAlign'> <a href='https://github.com/sekoudosso82/School'> School </a> </h3>
                        </div>
                        <div className='homePortfolioSubDiv'>
                            <h3 className='portfolioTextAlign'> <a href='https://sekoudosso82.github.io/corona-market-front-end/'> Corona-market </a> </h3>    
                        </div>
                        <div className='homePortfolioSubDiv'>      
                            <h3 className='portfolioTextAlign'> <a href='https://github.com/sekoudosso82/Best-Deals'> Best deal </a> </h3>
                        </div>
                        <div className='homePortfolioSubDiv'>       
                            <h3 className='portfolioTextAlign'> <a href='https://github.com/sekoudosso82/flat-gram-back-end'> Flatgram </a> </h3>
                        </div>
                        <div className='homePortfolioSubDiv'>      
                            <h3 className='portfolioTextAlign'> <a className='' href='https://the-goals-app.herokuapp.com/'> HashtagGoal </a> </h3>
                            {/* <h3 className='portfolioTextAlign'> <a className='' href='https://the-goals-app.herokuapp.com/'> HashtagGoal </a> </h3> */}
                        </div>
                        <div className='homePortfolioSubDiv'>       
                            <h3 className='portfolioTextAlign'> <a href='https://github.com/sekoudosso82/banking_CLI'> Bank CLI app </a>  </h3>
                        </div>
                        
                        

                    </div>
                    <div className='homeSubDiv'>
                    <h2>   
                                    <NavLink className='homeFullPortfolioSubDiv' to='/resume'>Go to Full resume</NavLink> 
                    </h2>
                        {/* <h2> Resume</h2> */}
                        {/* <h2> Update Coming Soon</h2> */}
                    </div>
                    <div className='homeSubDiv homeContactDiv'>
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


                        {/* </div> */}
                    </div> 
                </div> 
            </div>
        )
    } 
}     


    export default Home;
    
