import React from 'react'
import { useState } from 'react'

const imageSrc1="https://cdn.discordapp.com/attachments/727360261991956586/888995931511459880/among-us-impostor-of-the-vent-pack1.png"
const imageSrc2="https://cdn.discordapp.com/attachments/727360261991956586/888995943540748368/among-us-impostor-of-the-vent-pack2.png"

const Vent = () => {
    const [img, setImg] = useState(imageSrc1)

    return (
        <img src={img}
        style={{display: 'inline-block',
                maxWidth: '100px',
                width: 'auto',
                height: 'auto',
                paddingLeft: '1em',
                paddingRight: '1em',
                }} 
        onMouseEnter={() => {setImg(imageSrc2)}}
        onMouseLeave={() => {setImg(imageSrc1)}}/>
    )
}

export default Vent
