import { Content } from "../Content.js";
import { Image, Alert } from "react-bootstrap";

export function LearningSpanish() {
  return (
    <>
      <Content heading={"Learning Spanish in my free time"}>
        <Alert variant="secondary">
          TLDR; I changed the language on my phone to Spanish and I formed a
          habit of practicing with spaced-repetition for 15mins everyday.
        </Alert>
        {/* <Image
          src={require("../images/tortilla-cropped.jpg").default}
          fluid={true}
          rounded
        />
        <p>
          <i>Tortilla de Patatas I cooked recently. </i>
        </p> */}
        <p>
          Learning languages is fun, especially when you learn the funny sayings
          and insults of another culture! Here I share{" "}
          <a href="#hard" className="p-link">
            why I found it hard
          </a>{" "}
          and what I did to{" "}
          <a href="#easier" className="p-link">
            make it easier
          </a>
          . Hope this helps you on your language learning journey!
        </p>

        <h2 id="hard">Its hard work </h2>
        <p>
          Learning a new language takes years of practice. Its especially hard
          to work towards a goal that's years away.
        </p>
        <p>
          For me, the biggest challenges were:
          <ol>
            <li>
              <b>Prioritizing time regularly to learn.</b> Like everybody else,
              I'm busy with various things everyday. There's always something
              else to do.
            </li>
            <li>
              {" "}
              <b>The activation energy to actually do it.</b> Its just easier to
              just watch some Netflix. After a day of work, I just want to
              chill.{" "}
            </li>
          </ol>
          <h2 id="easier"> How I made it easier </h2>
        </p>
        <p>
          I made learning as automated and easy as possible. These baby steps
          improved my Spanish so that I was comfortable with causal conversation
          within a year. Here's what I did.
        </p>
        <h3>Using defaults</h3>
        <p>
          <b>I changed my phone's language to Spanish</b> (kudos to Rene). This
          change meant that I was automatically learning and practicing Spanish,{" "}
          <b>everytime I used my phone</b>. It might sound like a drastic
          change, but actually it's pretty easy to use your phone in another
          language. Most UI's are well designed these days, meaning you can
          easily guess the meaning of buttons in Apps (eg <i>Buscar aqui</i> on
          the search bar on Google Maps would be "Search here").
        </p>
        <h3>Forming habits</h3>
        <p>
          <b>
            I built a habit of using{" "}
            <a href="https://www.memrise.com/">Memrise</a> while commuting
            everyday
          </b>
          . Back in 2017, I was taking a train to a client's office everyday. By
          using this time, and forming a simple habit, I got small gains
          everyday (I highly recommend reading{" "}
          <a href="https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X">
            The Power of Habit
          </a>
          ). Memrise is a fantastic app. It uses spaced repetition, recordings
          of native speakers and it taught me phrases used everday in Spanish.
          Its learning algorithm will test you at the right timings to train
          your memory effectively. I cannot recommend it enough (its much better
          than Duolingo).
        </p>
      </Content>
    </>
  );
}
