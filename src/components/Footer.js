import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
const LIKES_URL =
  "https://dwls26wexj.execute-api.us-east-2.amazonaws.com/staging/getLikes-staging";

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
  let articleId = 1;
  useEffect(() => {
    fetch(`${LIKES_URL}?articleId=${articleId}`, {
      method: "GET",
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((res) => {
          setLikes(res.likes);
        });
      } else {
        console.log(response);
      }
    });
  }, []);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <Button variant="light" onClick={handleClick} className="swipe">
      ❤️ {likes}
    </Button>
  );
}
