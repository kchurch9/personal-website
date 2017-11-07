import React from 'react'
import Ken from '../picture/IMG_1280.JPG'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const Home = () => (
  <div>
    
    <span>Hello I'm Ken Church</span>
    
      <p>Aspiring Web Developer
      </p>
      <div className="profile">
      <img src={Ken} alt=""/>
      </div>
        <article> 
          Bacon ipsum dolor amet pork venison ribeye sirloin, porchetta corned beef swine biltong pastrami. Doner kielbasa meatball jerky meatloaf capicola pork boudin 
          rump venison frankfurter shoulder. Prosciutto cow tenderloin, 
          pork ham hock turducken flank shankle. Shoulder short ribs 
          pastrami brisket andouille pork pork loin. Porchetta turducken corned beef frankfurter tongue 
          fatback. Biltong beef ribs short loin frankfurter drumstick meatball picanha andouille tenderloin salami flank shank sirloin. Beef tail ham hock pork loin short loin flank. Cupim biltong shankle tail short loin. Tail pork loin 
          ball tip venison kevin. Chuck pastrami beef ribs swine flank jerky spare ribs, pig shank short loin venison chicken shankle.
          Short ribs pastrami brisket boudin. Beef ribs jowl beef, shoulder ground round frankfurter drumstick. Ball tip pork meatball, 
          pancetta strip steak cow frankfurter. Hamburger bacon picanha burgdoggen filet mignon. Cupim kevin prosciutto sirloin kielbasa rump short loin alcatra swine landjaeger. Sirloin pork belly kielbasa ham. 
        </article>
        
  </div>
  
)

const About = () => (
  <div>
   
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
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/`}>
          Node.js
          React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/about`}>
          about
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Helio Stuff`}>
          Mongo DB
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
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