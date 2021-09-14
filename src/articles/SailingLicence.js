import { Page, Article } from "../Content.js";
import { Alert } from "react-bootstrap";

// export const NUDGE_BOOK_LINK =
//   "https://www.amazon.co.uk/Nudge-Improving-Decisions-Health-Happiness/dp/0141040017/ref=sr_1_1?dchild=1&keywords=nudge&qid=1628957465&sr=8-1";
// export const HABIT_BOOK_LINK =
//   "https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X";

export function SailingLicence() {
  const articleId = 3;

  return (
    <Page>
      <Article
        heading={"From zero to skippering sailing boats"}
        articleId={articleId}
      >
        <Alert variant="secondary">
          TLDR; 1. Get the RYA Day Skipper licence. 2. Get it Internationally
          Certified. 3. Get a Radio Licence. 4. Buy insurance!
        </Alert>
        <p>
          I love sailing and I recommend it to everyone! Everything you need to
          be able to become a licenced skipper free to rent boats anywhere in
          the world!
        </p>

        <ol>
          <li>
            <a href="#licence">Getting the RYA Day Skipper licence</a>
          </li>
          <li>
            <a href="#international">
              Getting the licence internationally certified
            </a>
          </li>
          <li>
            <a href="#radio">Get a radio licence</a>
          </li>
          <li>
            <a href="#insurance">Buy insurance!</a>
          </li>
        </ol>

        <h2 id="licence">Getting the RYA Day Skipper licence</h2>

        <p>
          This consits of two parts - theory and practical. The theory can be
          done through classroom lessons or via a self-learning online tool. I
          went for classroom lessons - there were 2hr classes every Monday after
          work for about 8 weeks. It was really interesting to learn more about
          the wind, tide, maps and sailing! The theory is completed with a
          theory exam (which most people pass).
          <br />
          The practical is a 5 day course where an experience skipper shows you
          the ropes and helps you practice all the common manouvers - parking,
          adjusting the sails, navigating, man-over-board. I managed to do mine
          over a weekend + a bank holiday weekend (so I didn't need to take any
          extra holiday). I did my course in Southampton, sailing to the Isle of
          Wight and around that region. The most exciting part was when our
          propellor got entangled with a mooring bouys line during strong tide,
          effectively trapping our boat. We had to wait till the tide weakend
          and our brave skipper dove under the boat and managed to unwind the
          tangled mooring line, freeing our prop! Note to self - always sail
          with at least one experience sailer!
        </p>
        <h2 href="#international">
          Getting the licence internationally certified
        </h2>
        <p>
          You need this to sail in the Mediterranean and pretty much anywhere
          else. Its a simple affair of paying ~£30 pounds for a RYA Membership
          for 1yr and filling a form alongside the memebership application to
          get your Day Skipper licence internationally certified. You end up
          getting a shiny certificate thats much more impressive than the Day
          Skipper licence itself.
        </p>

        <h2 href="#radio">Get a radio licence</h2>
        <p>
          Technically, the sailing vessel you are on should have at least one
          person who is certified with a radio license. Typically this is the
          skipper. Its a 2 day course - 1 day of lessons and the test on the
          following day.
        </p>

        <h2 href="#insurance">Buy insurance!</h2>
        <p>
          I highly recommend this to avoid having (unexpectedly) expensive
          holidays. There are 2 kinds of insurance.
        </p>
      </Article>
    </Page>
  );
}
