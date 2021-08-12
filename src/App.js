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
    <p><i>Tortilla de Patatas I cooked recently, yum.</i></p>
      <p>Learning languages is fun, especially when you learn the funny sayings and insults of another culture! 
        This blog post shares two key ideas: 
        <ol>
        <li><b>How I approached learning Spanish</b> - Some automation + spending ~15 mins a day (for about a year).</li>
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

      <p>I was too lazy to spend hours everyday learning from a book and too cheap to pay for lessons. 
        So I took baby steps that over a year improved my Spanish so I was comfortable with causal conversation. 
        Here's what I did:</p>
      <ol>
        <li>
          <b>I changed my phone's language to Spanish</b> (kudos to Rene). We spend a lot of time on our phones. 
          This change meant that I was automatically learning and practicing Spanish. Evertime I used my phone. It might sound like a drastic change, but actually it's pretty easy to use your phone in another language.
          Most UI's are well designed these days, meaning you can easily guess the meaning of buttons in Apps
          (eg <i>"Buscar aqui"</i> on the search bar on Google Maps would be "Search here").
        </li>
        <li>
          <b>I used <a href="https://www.memrise.com/">Memrise</a> while commuting everday</b>. In 2017, I was taking a train to a client's office everday. 
          On the train, I would play Memrise for about 15mins (after which I would scroll <a href="https://twitter.com/mshokk">Twitter</a> or read the BBC). 
          I built a habit of using it everday (I highly recommend reading <a href="https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X">The Power of Habit</a>). 
          Memrise is a fantastic app. It uses spaced repetition, recordings of native speakers and it taught me phrases used everday in Spanish. After learning a few words around a theme, 
         you immediately learn a sentence to string them together. Its learning algorithm will test you at the right timings to train your memory effectively. I cannot recommend it enough.
          Many of you might have used Duolingo but I found my experience of it quite lacking - the recordings sounded machine-generated abd the phrases I was learning were quite often useless
          (learning to say "The cat is blue" is not going to be very useful in daily conversation).
        </li>
      </ol>

      <h2 id="slang">Common slang and phrases</h2>

      <p>To help you sound like a native, here are some popular slang/phrases that you wouldn't find in a text book. (For some reason, <b>leche</b> is used in slang very often).</p>
      <p><b>Estoy flipando en colores</b> = Exclamation of surprise/astonishment. Eg a cousin of my partner actually said this to me (with her jaw dropping) 
      when we met for the first time and I spoke Spanish to her all causal like. </p>
      <p><b>🥚 Pisando huevos</b> = Going extremely slowly (literally stepping on eggs). Eg the car in front of you is going at a snails pace, you might retort <i>"Este coche esta pisando huevos".</i></p>
      <p><b>🥛 Cagando leches</b> = Going very fast (literally means sh**ting milk). Eg <i>"Este coche esta cagando leche".</i> </p>
      <p><b>Da una leche</b> = Hit something/someone (literally means give a milk) </p>

      <p><b>Del ano de la catapun</b> = Aaages ago (literally from the year of the catapun?). Eg whenever Abuela teaches me a (ancient, unused) phrase,
       my partner usually snorts and says <i>"No apprendas eso, es de la ano de la catapun".</i> </p>
      <p><b>Tirarse del plano</b> = Dive into. Eg if there was some delicious pudding, you might say Eg <i>"Voy a tirarse del plano a este postre".</i> </p>
      
      <p><b>No comerse un colin</b> = Unsuccessfull in getting with someone (literally means not eating a colin - a Spanish biscuit type thing).</p>
      
      <h2 id="insults">Mild insults</h2>
      <p>You can easily find or Google Translate your choice of insults, but it shows extra class if you can use the milder ones:</p>
      <p><b>Que le den morcillas</b> = Got **** yourself (literally means give them morcilla).</p>

      <p><b>Spanish</b> = Explanation </p>

      <h2>Common sayings</h2>
      <p>These are sayings I learnt from my partner's family (Extra points if you can guess which ones are from abuela/grandma) </p>
      <p><b>🐱 Gato escaldado, del agua fria huye</b> = Once burnt, twice shy (literally the burnt cat runs away from cold water).  </p>
      <p><b>🐑 Oveja que bala, bocada se pierda</b> = If there's hardly any chatting over a meal, this phrase can be said. Literally means the the bleating sheep loses a mouthful.  </p>
      <p><b>Spanish</b> = Explanation </p>

      <h2 id="bonus">Bonus phrases</h2>
      <p>Extra phrases if you're craving for more juicy titbits</p>
      <p><b>Spanish</b> = Explanation </p>
    </Content>
  </>)
}


function Contact() {
  return <h2 className="App-header">Contact</h2>;
}


export default App;
