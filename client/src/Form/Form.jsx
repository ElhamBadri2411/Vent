import React from "react";
import { useState } from "react";
import { createMessage } from "../api/api.js";
import { TextField, Button, Paper, Typography } from "@mui/material/";

const Form = () => {
  const [formMessage, setFormMessage] = useState({
    title: "",
    message: "",
  });

  const clear = () => {
    setFormMessage({
      title: "",
      message: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("running")

    if (formMessage.message === "" || formMessage.title === "") {
      console.log("empty message/title");
    } else {
      createMessage(formMessage);
      clear()
    }
  };

  return (
    <form autocomplete="on" onSubmit={handleSubmit}>
      <Typography variant="h2">Vent</Typography>
      <br />
      <br />
      <TextField
        name="title"
        onChange={(e) =>
          setFormMessage({ ...formMessage, title: e.target.value })
        }
        value={formMessage.title}
        label="Title"
      />
      <br />
      <br />

      <TextField
        name="message"
        onChange={(e) =>
          setFormMessage({ ...formMessage, message: e.target.value })
        }
        value={formMessage.message}
        multiline
        minRows={5}
        label="Message"
      />
      <br />
      <br />
      <Button type="submit" value="Submit">Submit</Button>
      <Button onClick={clear}>clear</Button>
    </form>
  );
};

export default Form;
