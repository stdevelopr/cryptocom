import React from 'react'
import { GeneratedIdentifierFlags } from 'typescript'
import { Wrapper } from "./Header.styles"

function Header() {
    return (
        <Wrapper>
            <img src={"generated.jpg"} style={{height: '100px'}}/>
            <div>
                Joias
            </div>
        </Wrapper>
    )
}

export default Header
