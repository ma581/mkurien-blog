import * as React from "react";
import { Input, Textarea } from "./Input";
import { Button, Alert } from "react-bootstrap";
const FEEDBACK_URL = "https://asfa.io/xqkeqvkq";

export default function Feedback(props) {
  const [message, setMessage] = React.useState("");

  const [serverState, setServerState] = React.useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  function onChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true, submitted: false, error: false });

    fetch(FEEDBACK_URL, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setServerState({
            submitting: false,
            submitted: true,
            error: false,
          });
          form.reset();
          setMessage("");
        } else {
          response.json().then((data) => {
            setServerState({
              submitting: false,
              submitted: true,
              error: data.error,
            });
          });
        }
      })
      .catch((err) => {
        console.error(`oh no ${err}`);
        setServerState({
          submitting: false,
          submitted: true,
          error: err,
        });
      });
  }

  return (
    <div style={{ backgroundColor: "#ecf0f1" }}>
      <br />
      <h5>A small favour</h5>
      <p className="text-tertiary">
        Was anything I wrote confusing or incorrect? Please let me know! Just
        write a few words below and I’ll be sure to fix it.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 space-y-4">
        <input
          type="hidden"
          value={`New comment on ${props.title}`}
          id={props.title}
          name="_subject"
          readOnly
        />
        <Textarea
          onChange={onChange}
          value={message}
          id="message"
          name="message"
          placeholder="What should I know?"
        ></Textarea>

        <div className="fill-space-2">
          <Input
            id="feedback-email"
            name="email"
            placeholder="(Optional) Email"
            type="email"
          />

          <Input
            id="twitter"
            name="twitter"
            placeholder="(Optional) Twitter handle"
            type="text"
          />
        </div>
        <div className="justify-end">
          <Button disabled={serverState.submitting || !message} type="submit">
            Send feedback
          </Button>
        </div>
        {serverState.submitted &&
          (serverState.error ? (
            <Alert variant="danger"> Oh no! That did not work :( </Alert>
          ) : (
            <Alert>Thanks for taking the time to leave a note!</Alert>
          ))}
      </form>
    </div>
  );
}
