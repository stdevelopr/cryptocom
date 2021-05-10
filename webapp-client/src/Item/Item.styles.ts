import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    button {
        border-radius: 0 0 20px 20px;
    }

    img {
        /* height: 250px;
        object-fit: cover; */
        width: auto;
        max-height: 200px;
        /* max-width: 200px; */
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }

    /* .content {
        height: 20%;
    } */
`