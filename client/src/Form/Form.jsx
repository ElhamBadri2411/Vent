import React from "react";
import { useState } from "react";
import { createMessage } from "../api/api.js";
import { TextField, Button, Card, Typography } from "@mui/material/";
import Vent from "../components/Vent.jsx";

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
      <Vent />
      <Typography variant="h1" style={{display: 'inline-block'}}>V E N T</Typography>
      <Vent />
      <br/>
      <Typography variant="body1">Use this website to vent about whatever is in your mind, or confess your deepest darkest secrets. Click "View Post" to view a post another user made.</Typography>
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
      <Button variant="outlined" type="submit" value="Submit" style={{marginRight: '1em', color: '#404040', borderColor: '#404040'}}>Submit</Button>
      <Button onClick={clear} style={{marginLeft: '1em', color: '#404040'}}>clear</Button>
    </form>
    </Card>
  );
};

export default Form;
