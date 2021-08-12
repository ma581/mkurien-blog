import './App.css';
import { NavBar } from './Navbar';
import { Content } from './Content';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router className="body">
        <div>
          <Switch>
            <Route path="/articles">
              <Articles />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <Container>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <h1 className="header">Welcome!</h1>
          <p className="">These are early days so have a look instead at these interesting articles!</p>
          {/* <ul styles={{ "list-style": "none" }}> */}
          <a href="aliabdaal.com">Ali Abdaal's blog</a> - productivity, youtubing etc
          {/* </ul> */}
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  )
}

function Articles() {
  return (<Article />);
}

function Article() {
  return (<>
    <Content heading={"Learning Spanish in my free time"}>
    <Image src={require("./images/tortilla-cropped.jpg").default} fluid={true} rounded/>
    <p><i>Tortilla de Patatas I cooked recently. </i></p>
      <p>Learning languages is fun, especially when you learn the funny sayings and insults of another culture! 
        This blog post shares two key ideas: 
        <ol>
        <li><b>How I automated most of my learning</b> by using a default language on my phone and by building a habit.</li>
        <li><b>Fun slang and mild insults</b> - You just don't come across slang or phrases unless you've spent a significant amount of time with native speakers. 
        So here are some phrases I learnt while spending time with my partners family! 
        </li>
        </ol>
        Hope this helps you on your Spanish-learning journey!

</p>
      <ol>
        <li><a href="#approach">Learning approach</a></li>
        <li><a href="#slang">Common slang and phrases</a></li>
        <li><a href="#insults">Mild insults</a></li>
        <li><a href="#bonus">Bonus phrases</a></li>
      </ol>

      <h2 id="approach">Learning approach</h2>

      <p>I made learning as automated and easy as possible. These baby steps improved my Spanish so that I was comfortable with causal conversation within a year. 
        Here's what I did.</p>
      <ol>
        <li>
          <b>I changed my phone's language to Spanish</b> (kudos to Rene). This change meant that I was automatically learning and practicing Spanish, <b>everytime I used my phone</b>. 
          It might sound like a drastic change, but actually it's pretty easy to use your phone in another language.
          Most UI's are well designed these days, meaning you can easily guess the meaning of buttons in Apps
          (eg <i>Buscar aqui</i> on the search bar on Google Maps would be "Search here").
        </li>
        <li>
          <b>I built a habit of using <a href="https://www.memrise.com/">Memrise</a> while commuting everyday</b>. Back in 2017, I was taking a train to a client's office everyday. 
          By using this time, and forming a simple habit, I got small gains everyday (I highly recommend reading <a href="https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X">The Power of Habit</a>). 
          Memrise is a fantastic app. It uses spaced repetition, recordings of native speakers and it taught me phrases used everday in Spanish. Its learning algorithm will test you at the right timings to train your memory effectively. I cannot recommend it enough (its much better than Duolingo).
        </li>
      </ol>

      <h2 id="slang">Common slang and phrases</h2>

      <p>To help you sound like a native, here are some popular slang/phrases that you wouldn't find in a text book. (For some reason, <b>leche</b> is used in slang very often).</p>
      <p><b>Que chulo/commo mola! (how cool)</b> = Cool! eg when you hear about this blog, one might exclaim <i>Que chulo!</i></p>
      <p><b>Quinto culo (fifth buttock)</b> = In the middle of nowhere/far away. eg When you explain where your Spanish partner's family live <i>"Esta en el quinto culo"</i> </p>

      <p><b>🌈 Estoy flipando en colores (I'm flipping in colours)</b> = Exclamation of surprise/astonishment. Eg a cousin of my partner actually said this to me (with her jaw dropping) 
      when we met for the first time and I spoke Spanish to her all casual like. </p>
      <p><b>🥚 Pisando huevos (stepping on eggs/balls)</b> = Going extremely slowly. Eg the car in front of you is going at a snails pace, you might retort <i>"Este coche esta pisando huevos".</i></p>
      <p><b>🥛 Cagando leche (sh**ting milk)</b> = Going very fast. Eg <i>Este coche esta cagando leche.</i> </p>
      <p><b>👊🏼 Da una leche/lata (give a milk/tin)</b> = Hit something/someone</p>

      <p><b>Del ano de la catapun (From the year of the catapun?)</b> = Aaages ago. Eg whenever Abuela teaches me a (ancient, unused) phrase,
       my partner usually snorts and says <i>"No apprendas eso, es de la ano de la catapun".</i> </p>
      <p><b>Tirarse del plano</b> = Dive into. Eg if there was some delicious pudding, you might say Eg <i>Voy a tirarse del plano a este postre.</i> </p>
      <p><b>Ponerse de mosca (to become a fly)</b> = Get enraged. </p>

      <p><b>No comerse un colin (not eating a colin)</b> = Unsuccessfull in getting with someone.</p>
      
      <h2 id="insults">Mild insults</h2>
      <p>You can easily find or Google Translate your choice of insults, but it shows extra class if you can use the milder ones:</p>
      <p><b>Que le den morcillas (give them morcilla)</b> = Got **** yourself.</p>
      <p><b>Panoli</b> = Explanation </p>
      <p><b>Golfo</b> = Explanation </p>
      <p><b>Pringi/Pringado</b> = Explanation </p>

      <h2>Fun sayings</h2>
      <p>These are sayings I learnt from my partner's family (Extra points if you can guess which ones are from La Abuela/grandma) </p>
      <p><b>🐱 El Gato escaldado, del agua fria huye</b> = Once burnt, twice shy (literally the burnt cat runs away from cold water).  </p>
      <p><b>🐑 Oveja que bala, bocada se pierda</b> = If there's hardly any chatting over a meal, this phrase can be said. Literally means the the bleating sheep loses a mouthful.  </p>
      <p><b>Spanish</b> = Explanation </p>

      <h2 id="bonus">Bonus phrases</h2>
      <p>Extra phrases if you're craving for more juicy titbits</p>
      <p><b>Estas commo un tren</b> = You're hot (literally means you're like a train). Eg When I met La Abuela for the first time, my partner thought this was a great line to tell her</p>
    </Content>
  </>)
}


function Contact() {
  return <h2 className="App-header">Contact</h2>;
}


export default App;
