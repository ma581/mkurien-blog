import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const LIKES_URL =
  "https://dwls26wexj.execute-api.us-east-2.amazonaws.com/staging/getLikes-staging";

export function Footer(props) {
  return (
    <div>
      <br></br>
      <br></br>
      <Like {...props} />{" "}
      <Button variant="light" href="https://twitter.com/mshokk">
        🐦 Follow me on Twitter
      </Button>
    </div>
  );
}

Footer.propTypes = {
  heading: PropTypes.string,
  articleId: PropTypes.number,
};

function Like(props) {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    fetch(`${LIKES_URL}?articleId=${props.articleId}`, {
      method: "GET",
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setLikes(res.likes);
      })
      .catch((err) => {
        console.error(err);
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

Like.propTypes = {
  articleId: PropTypes.number,
};
