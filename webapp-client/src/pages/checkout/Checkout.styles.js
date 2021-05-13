import styled from "styled-components"
import IconButton from "@material-ui/core/IconButton"

export const Wrapper = styled.div`
   margin: 40px;
`

export const StyledButton = styled(IconButton)`
    position: fixed !important;
    z-index: 100;
    right: 20px;
    top: 20px;
    /* background-color: white;
    border: 1px solid black;
    &:hover {
        background-color: white;
    } */
`