import { Button } from "@mui/material";
import React from "react";
import { getMessage } from "../api/api";
import RenderMessage from "./RenderMessage";


class ViewMessage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: null
        }
    }

    getNewMessage = () => {
        let newMessagePromise = getMessage()
        newMessagePromise
            .then(res => {
                console.log(res)
                const message = res.data[0]
                this.setState({message})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { message } = this.state;

        return (
            <>
                <Button variant="contained" onClick={()=>{this.getNewMessage()}}
                style={{backgroundColor: "#404040", color: "#fff"}}>
                    View Post
                </Button>
                <br />
                <br />
                {message &&
                    <RenderMessage message={message} />
                }
            </>
        )
    }

}

export default ViewMessage