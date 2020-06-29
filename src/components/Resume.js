import React, {Component} from 'react'
import '../App.css';
// import { withRouter } from "react-router";

class Resume extends Component
{
    render(){
            
        return(
        
            <div>
                <h2> Sekou Dosso </h2>
                <ul> Bronx, NY 10467 | 646-925-2132 | sekou.dosso82@gmail.com | Github | Blog | LinkedIn </ul>
                <h2> FULL STACK  DEVELOPER </h2>
                <ul>
                    Experienced in Ruby, Ruby on Rails, JavaScript, React and Redux based programming and a <br></br>
                    background in Python and Java. Possess strong skills in team-building and project management that help <br></br>
                    some of my friends and I to develop some projects. With GitHub skills I’m able to develop many projects <br></br>
                    (for example HashtagGoals and Flat-gram) remotely. 

                </ul>

                <h2> TECHNICAL SKILLS </h2>
                <ul> Ruby, Rails, Javascript, React, Redux, Java, Python, AWS, Agile, SQL, PostgreSQL </ul>

                <h2> TECHNICAL PROJECTS </h2>
                <h3> HashtagGoals - 
                    <a href="https://github.com/WabaScript/HashtagGoals">  Github </a> |
                    <a href="https://www.youtube.com/watch?v=EcA23LmNkUw">   Demo </a>
                </h3>
                <ul>
                    HashtagGoal is a sharing goals app where users can sign in, post a goal they want to achieve <br></br>
                    or follow someone else's goal. The app front-end and back-end was built with Ruby and Rails.
                </ul>
                <ul>
                    <li>
                            Utilized bcript password hashing to store encrypted user information (back-end).
                    </li>
                    <li>
                            Login/logout ensures user identity so users can follow each other.
                    </li>
                    <li>
                            Post goal - using a RESTful route gives the user the ability to post a goal.
                    </li>
                    <li>
                        	Follow goals - using Active record models relationships allow users to follow each other.
                    </li>
                </ul>

                <h3> 
                    Flat-gram 
                    <a href="https://github.com/sekoudosso82/flat-gram-back-end"> Flat-gram back-end </a> - 
                    <a href="https://github.com/ghaxhaj/flat-gram">
                        Flat-gram front-end
                    </a>  | 
                    <a href="https://www.youtube.com/watch?v=ye7t2_nTtoQ">
                        Demo
                    </a>
                </h3>
                <ul>
                    Flat-gram is a social media app to keep Flatrion school students connected <br></br>
                    built with Rails (back-end) and React (front-end)
                </ul>
                <ul>
                    <li>
                        	Utilized JSON Web Tokens and localStorage to store encrypted user information <br></br> 
                            client-side and bcript password hashing to encrypt the password (back-end) in the database. <br></br>
                    </li>
                    <li>
                        	login/logout secure the app so that user information can be tracked.<br></br>
                    </li>
                    <li>
                        	Make a post allow user to interact with the app<br></br>
                    </li>
                    <li>
                        	Update profile and post gives the ability to users to maintain their information.<br></br>
                    </li>
                    <li>
                        	Delete account and post allow the users to clean their record in the database.<br></br>
                    </li>
                </ul>
               
<h3>
    Corona-Market - 
    <a href='https://github.com/sekoudosso82/corona-market-back-end'> back-end </a>  
    <a href='https://github.com/sekoudosso82/corona-market-front-end'> front-end </a>| 
    <a href='https://www.youtube.com/watch?v=ePgIJa6PkSg'> Demo </a>

</h3>
    <ul>
        Corona-market is an app for selling unused stuff built with Rails (back-end) <br></br>
        and React (front-end)
    </ul>
    <ul>
        <li>
            	Utilized JSON Web Tokens and localStorage to store encrypted user information client-side <br></br>
                 and bcript password hashing to encrypt the password (back-end) in the database. 
        </li>
        <li>
            	Signin/signout secure the app so that user information can be tracked.
        </li>
        <li>
            	Sell/buy an item allow user to interact with the app
        </li>
        <li>
            	Making an offer on an item gives the ability to the users to interact with others.
        </li>
        <li>
            	Update(account/item) or delete(account/item) allow the users to clean their record in the database.
        </li>
    </ul>


<h2> EXPERIENCE </h2>
<h3> Software Engineer      New York, NY </h3>
<ul>
    <p>  Software Engineer Student            01/2020</p>
    <li> building full stack web app. </li>
    <li> using Rails, React, Redux, PostgreSQL. </li>
</ul>

<h3> Web Developer     Abidjan, Ivory Coast </h3>
<ul>
    <p> Web Developer            01/20017--01/2019</p>
    <li> building website using HTML, CSS and javaScript. </li>
    <li> Familiar with Microsoft Access, PowerPoint, and Excel. </li>
</ul>

<h3> Express Market     Abidjan, Ivory Coast </h3>
<ul>
    <p> Manager            06/2007--11/2011</p>
    <li> Troubleshooting the cashier software. </li>
    <li> Familiar with Microsoft Access, PowerPoint, and Excel. </li>
</ul>
	
<h2> EDUCATION </h2>
<h4> Flatiron School    		 New York, NY </h4>
<ul>Full Stack Web Development, Ruby on Rails and JavaScript program 05/2020</ul> 

<h4> CUNY Lehman College     							      Bronx, NY </h4>
<ul> Bachelor in Computer Science       						      05/ 2019 </ul> 
    		      




                                                                                    


                
    
            </div>
        )
    } 
}     


    export default Resume;
    
