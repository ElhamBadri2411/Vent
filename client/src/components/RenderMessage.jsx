import { Typography, Card } from "@mui/material";
import React from "react";

function RenderMessage(props) {
    const { message } = props;

    return (
        <div>
            <Card borderRadius='15px'>
                <Typography variant="h4">{message.title}</Typography>
                <br />
                <Typography variant="body1">{message.message}</Typography>
            </Card>
        </div>
    )
}

export default RenderMessage;
