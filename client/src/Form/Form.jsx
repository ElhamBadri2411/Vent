import React from "react";
import { useState } from "react";
import { createMessage } from "../api/api.js";
import { TextField, Button, Card, Typography } from "@mui/material/";

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
    <Card elevation={12} style={{width: "75%", padding: "2em"}}>
    <form autocomplete="on" onSubmit={handleSubmit}>
      <Typography variant="h1">Vent</Typography>
      <br />
      <br />
      <div style={{width: "80%"}}>
        <TextField
          name="title"
          onChange={(e) =>
            setFormMessage({ ...formMessage, title: e.target.value })
          }
          fullWidth
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
        fullWidth
        label="Message"
      />
      </div>

      <br />
      <br />
      <Button type="submit" value="Submit">Submit</Button>
      <Button onClick={clear}>clear</Button>
    </form>
    </Card>
  );
};

export default Form;
