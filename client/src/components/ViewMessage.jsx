import { Button } from "@mui/material";
import React from "react";
import { getMessage } from "../api/api";


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
                <Button onClick={()=>{this.getNewMessage()}}>
                    View Post
                </Button>
                <br />
                {message &&
                    <>
                        {message.title}
                        <br />
                        {message.message}
                    </>
                }
            </>
        )
    }

}

export default ViewMessage