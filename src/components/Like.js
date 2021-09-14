import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export function Like(props) {
  const [likes, incrementLikes] = useLikes(props.articleId);
  function handleClick() {
    incrementLikes(props.articleId);
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

function useLikes(articleId) {
  const LIKES_URL =
    "https://dwls26wexj.execute-api.us-east-2.amazonaws.com/staging/articles";

  const INCREMENT_LIKES_URL =
    "https://dwls26wexj.execute-api.us-east-2.amazonaws.com/staging/incrementLikesForArticle";

  const [likes, setLikes] = useState(0);
  useEffect(() => {
    fetch(`${LIKES_URL}?articleId=${articleId}`, {
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

  function incrementLikes(articleId) {
    setLikes(likes + 1);

    fetch(`${INCREMENT_LIKES_URL}?articleId=${articleId}`, {
      method: "POST",
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
    });
  }

  return [likes, incrementLikes];
}
