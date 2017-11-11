import React from 'react'
import Ken from '../picture/IMG_1280.JPG'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
var Infinite = require('react-infinite')

const Home = () => (
    <div class="flex-container">
      <div>
          <span class="cursor">Hello, I'm Ken Church</span>
        <div>
          <img src={Ken} alt=""/>
        </div>  
    
    
          <p class="cursor">Aspiring Web Developer</p> 
    </div>
        <div className="one"/>
          <article> 
          Thank you for visiting! I am very passionate about web-development and learing new skills.
          I have been on an exciting adventure diving into the world of web-dev, software development, and computer science.
          I am excited to share what I am capable of and how I can contribute to a team.
          </article>
    
</div>
  
)
const About = () => (
  <div className="two">
   
    <h2>About</h2>
      <article>
        Biltong beef ribs short loin frankfurter drumstick meatball picanha andouille tenderloin salami flank shank sirloin. Beef tail ham hock pork loin short loin flank. Cupim biltong shankle tail short loin. Tail pork loin 
        ball tip venison kevin. Chuck pastrami beef ribs swine flank jerky spare ribs, pig shank short loin venison chicken shankle.
        Short ribs pastrami brisket boudin. Beef ribs jowl beef, shoulder ground round frankfurter drumstick. Ball tip pork meatball, 
        Biltong beef ribs short loin frankfurter drumstick meatball picanha andouille tenderloin salami flank shank sirloin. Beef tail ham hock pork loin short loin flank. Cupim biltong shankle tail short loin. Tail pork loin 
        ball tip venison kevin. Chuck pastrami beef ribs swine flank jerky spare ribs, pig shank short loin venison chicken shankle.
        Short ribs pastrami brisket boudin. Beef ribs jowl beef, shoulder ground round frankfurter drumstick. Ball tip pork meatball, 
        pancetta strip steak cow frankfurter. Hamburger bacon picanha burgdoggen filet mignon. Cupim kevin prosciutto sirloin kielbasa rump short loin alcatra swine landjaeger. Sirloin pork belly kielbasa ham. 
        pancetta strip steak cow frankfurter. Hamburger bacon picanha burgdoggen filet mignon. Cupim kevin prosciutto sirloin kielbasa rump short loin alcatra swine landjaeger. Sirloin pork belly kielbasa ham. 
      </article>
    
  </div>
  
)
  
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div className="three">
    <h2>Topics</h2>
    <ul>
      <dl>
       <button2><Link to={`${match.url}/`}>
          Technologies
        </Link> 
        </button2>
      </dl>
      <dl>
        <button2><Link to={`${match.url}/about`}>
          about
        </Link>
        </button2>
      </dl>
      <dl>
        <button2>
        <Link to={`${match.url}/University of Pheonix BS in Information Technology 
        and Helio Training Bootcamp for Full-Stack Web Development`}>
          Education
        </Link>
        </button2>
      </dl>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>
        <ul>
          <dl>HTML/CSS</dl>
          <dl>GIT</dl>
          <dl>JavaScript/JSON</dl>
          <dl>React</dl>
          <dl>NodeJS</dl>
          <dl>Express</dl>
          <dl>RESTful APIs</dl>
          <dl>MongoDB</dl>
        </ul>
      </h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/topics">Education and Work Experience</Link></button>
      </ul>

    
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)


export default BasicExample