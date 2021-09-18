import { Typography } from "@mui/material";
import React from "react";

function RenderMessage(props) {
    const { message } = props;

    return (
        <div>
            <Typography variant="h4">{message.title}</Typography>
            <br />
            <Typography variant="body1">{message.message}</Typography>
        </div>
    )
}

export default RenderMessage;
