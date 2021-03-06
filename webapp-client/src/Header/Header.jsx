import React from 'react'
import { GeneratedIdentifierFlags } from 'typescript'
import { Wrapper } from "./Header.styles"
import ReactRoundedImage from "react-rounded-image";


function Header({title}) {
    return (
        <Wrapper>
            <div className="logo-container">
                <div className="logo-img">
                <ReactRoundedImage image={"generated.jpg"} imageHeight="150" imageWidth="150" roundedColor="darkgoldenrod" roundedSize="8" borderRadius="100"/>
                </div>
                <div className="title" style={{margin: '-5px'}}> {title} </div>
            </div>
        </Wrapper>
    )
}

export default Header
