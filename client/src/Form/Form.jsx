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
    if ((formMessage.message = "")) {
      console.log("empty message");
    } else {
      createMessage({ formMessage });
    }
  };

  return (
    <form autocomplete="on" onSubmit={handleSubmit}>
      <Typography>Welcome message</Typography>

      <Typography>Write a message</Typography>
      <TextField
        name="title"
        onChange={(e) =>
          setFormMessage({ ...formMessage, title: e.target.value })
        }
        value={formMessage.title}
        label="Title"
      />

      <TextField
        name="message"
        onChange={(e) =>
          setFormMessage({ ...formMessage, message: e.target.value })
        }
        value={formMessage.message}
        label="Message"
      />

      <Button type="submit" value="Submit">Submit</Button>
      <Button onClick={clear}>clear</Button>
    </form>
  );
};

export default Form;
