import React, {Component} from 'react'
import '../App.css';
// import { withRouter } from "react-router";

class Portfolio extends Component
{
    render(){
            
        return(
        
            <div>
               <div className='homeMainDiv'>
                    <div className='portfolioSubDiv'> 
                        <h4> corona-market</h4>
                        <p>                        
                            <a href='https://sekoudosso82.github.io/corona-market-front-end/'>web app link</a>
                            <a href='https://github.com/sekoudosso82/corona-market-front-end'>Frontend link</a>|
                            <a href='https://github.com/sekoudosso82/corona-market-back-end'>Backend link</a>|
                            <a href='https://www.youtube.com/watch?v=ePgIJa6PkSg'>video demo link</a>
                        </p>
                        <h4> Project description</h4>
                        <p>
                            Corona-market is an app for selling unused stuff built with Rails (back-end) 
                            and React (front-end)
                            Utilized JSON Web Tokens and localStorage to store encrypted user information
                            client-side and bcript password hashing to encrypt the password (back-end) 
                            in the database.

                        </p>
                        <ul >
                            <li className='textAlign'> Signin/signout secure the app so that user information can be tracked.</li>
                            <li className='textAlign'> Making an offer on an item gives the ability to the users to interact with others.</li>
                            <li className='textAlign'> Sell/buy an item allow user to interact with the app </li>
                            <li className='textAlign'> Update(account/item) or delete(account/item) allow the users to clean their record in the database.</li>
                        </ul>
                    </div>
                    <div className='portfolioSubDiv'> 
                        <h4> ironlady</h4>
                        <p>                        
                            <a href='https://sekoudosso82.github.io/ironlady/'>web app link</a>
                            <a href='https://github.com/sekoudosso82/ironlady'>Frontend link</a>|
                            <a href='https://github.com/sekoudosso82/ironladyback'>Backend link</a>|
                        </p>
                        <h4> Project description</h4>
                        <p>
                            ironlady is an ecommerce web app built with Rails (back-end) 
                            and React (front-end)
                            Utilized JSON Web Tokens and localStorage to store encrypted user information
                            client-side and bcript password hashing to encrypt the password (back-end) 
                            in the database.

                        </p>
                        <ul >
                            <li className='textAlign'> Signin/signout secure the app so that user information can be tracked.</li>
                            <li className='textAlign'> Making an offer on an item gives the ability to the users to interact with others.</li>
                            <li className='textAlign'> Sell/buy an item allow user to interact with the app </li>
                            <li className='textAlign'> Update(account/item) or delete(account/item) allow the users to clean their record in the database.</li>
                        </ul>
                    </div>

                    <div className='portfolioSubDiv'> 
                        <h4> flat-gram</h4>
                        <p>
                            <a href='https://github.com/ghaxhaj/flat-gram'>Frontend link</a>|
                            <a href='https://github.com/sekoudosso82/flat-gram-back-end'>Backend link</a>|
                            <a href='https://www.youtube.com/watch?v=ye7t2_nTtoQ'>video demo link</a>
                        </p>
                        <h4> Project description</h4>
                        <p>
                            Flat-gram is a social media app to keep Flatrion school students connected built with Rails (back-end) and React (front-end)
                            Utilized JSON Web Tokens and localStorage to store encrypted user information client-side and bcript password hashing to encrypt the password (back-end) in the database.
                        </p>
                        <ul >
                            <li className='textAlign'> 
                                login/logout secure the app so that user information can be tracked.
                            </li>
                            <li className='textAlign'> 
                                Make a post allow user to interact with the app
                            </li>
                            <li className='textAlign'> 
                                Update profile and post gives the ability to users to maintain their information.
                            </li>
                            <li className='textAlign'> 
                                Delete account and post allow the users to clean their record in the database.
                            </li>
                        </ul>
                    </div>
                    <div className='portfolioSubDiv'>
                        
                        <h4> HashtagGoal </h4>
                        <p>
                            <a href='https://the-goals-app.herokuapp.com/'>web app link</a>
                            <a href='https://github.com/WabaScript/HashtagGoals'>Github link</a>|
                            <a href='https://www.youtube.com/watch?v=EcA23LmNkUw'>video demo link</a>
                        </p>
                        <h4> Project description</h4>
                        <p>
                            HashtagGoal is a sharing goals app where users can sign in, post a goal they want 
                            to achieve or follow someone else's goal. The app front-end and back-end was 
                            built with Ruby and Rails.Utilized bcript password hashing to store encrypted 
                            user information (back-end).
                        </p>
                        <ul >
                            <li className='textAlign'> 
                                Login/logout ensures user identity so users can follow each other.
                            </li>
                            <li className='textAlign'> 
                                Post goal, using a RESTful route gives the user the ability to post a goal.
                            </li>
                            <li className='textAlign'> 
                                Follow goals, using Active record models relationships allow users to follow each other.
                            </li>
                        </ul>
                        
                    </div>
                    <div className='portfolioSubDiv'>  
                        <h4> Bank CLI app </h4>
                        <p>
                            <a href='https://github.com/sekoudosso82/banking_CLI'> Github link</a>|
                            <a href='https://www.youtube.com/watch?v=Ht6_VtugQA0'>video demo link</a>
                        </p>
                        <h4> Project description</h4>
                        <p>
                            Banking_CLI is pure command line app. Banking_CLI is fully built 
                            with Ruby. the users can deposit, transfert or withdraw money from 
                            their account through a command line interaction with the app.
                        </p>
                        <ul >
                            <li className='textAlign'> 
                                Login/logout ensures user identity so users access the right account.
                            </li>
                            <li className='textAlign'> 
                                User can make deposit, transfert money, withdraw and close his account.
                            </li>
                        </ul>
                        
                    </div>
                    <div className='portfolioSubDiv'>
                        
                        <h4> Best deal </h4>
                        <p>
                            <a href='https://github.com/sekoudosso82/Best-Deals'>Github link</a>
                            {/* <a href=''>video demo link</a> */}
                        </p>
                        <h4> Project description</h4>
                        <p>
                            Best-deal is an app where people can post an item, make a comment or make a 
                            make a review on other users post. the app purpose you to pratrice Javascript skill. this app is built with Rails (back-end) 
                            and JavaScript vanilla (front-end). 
                        </p>
                        <ul >
                            <li className='textAlign'> 
                                As a user you can login/logout.
                            </li>
                            <li className='textAlign'>
                                A user can comment an item and make a review on it. 
                            </li>
                            <li className='textAlign'> 
                                User can post an item or delete a previous post.
                            </li>
                            
                        </ul>
                        
                    </div>
                    <div className='portfolioSubDiv'>
                        
                        <h4> Sekou calendar </h4>
                        <p>
                            <a href='https://sekoudosso82.github.io/sekouschedule/'>web app link</a>
                            <a href='https://github.com/sekoudosso82/sekouschedule'>Github link</a>
                        </p>
                        <h4> Project description</h4>
                        <p>
                            I recently built and deployed this little web app to better organize my daily schedule.
                            The app is built with React, Redux (Frontend) and Rails (backend).
                        </p>
                    </div>
                    <div className='portfolioSubDiv'>
                        
                        <h4> School </h4>
                        <p>
                            <a href='https://github.com/sekoudosso82/School'>Github link</a>
                            
                        </p>
                        <h4> Project description</h4>
                        <p>I'm currently working on this project.</p>
                        <p>The full description will be upload very soon.</p>
                    </div>
                    <div className='portfolioSubDiv'>
                        
                        <h4> sekoudossoportfolio </h4>
                        <p>
                            <a href='https://github.com/sekoudosso82/sekoudossoportfolio'>Github link</a>
                            <a href='https://sekoudossoportfolio.netlify.app/portfolio'>Github link</a>

                        </p>
                        <h4> Project description</h4>
                        <p>I'm currently working on new project.</p>
                        <p>My porfolio will be upload very soon. I use to update it every 2 weeks.</p>
                    </div>

                </div>
            </div>
        )
    } 
}     


    export default Portfolio;
    
