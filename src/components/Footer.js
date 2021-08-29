import { Button } from "react-bootstrap";
import React, { useState } from "react";

export function Footer(props) {
  return (
    <div>
      <br></br>
      <br></br>
      <Like />{" "}
      <Button variant="light" href="https://twitter.com/mshokk">
        🐦 Follow me on Twitter
      </Button>
    </div>
  );
}

function Like(props) {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <Button variant="light" onClick={handleClick} className="swipe">
      ❤️ {likes}
    </Button>
  );
}
