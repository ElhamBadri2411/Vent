import { Typography, Card } from "@mui/material";
import React from "react";

function RenderMessage(props) {
    const { message } = props;

    return (
        <div>
            <Card borderRadius='15px' elevation={12} style={{width: "75%", padding: "2em"}}>
                <Typography variant="h4">{message.title}</Typography>
                <br />
                <Typography variant="body1" style={{whiteSpace: "pre-line"}}>{message.message}</Typography>
            </Card>
        </div>
    )
}

export default RenderMessage;
