import styled from "styled-components"

export const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Charmonman&display=swap');
    display: flex;
    justify-content: center;
    /* font-family: Arial, Helvetica, sans-serif; */
    font-size: 30px;
    height: 200px;
    color: white;
    /* font-variant: petite-caps; */

    div {
        height: 150px;
        width: 100%;
        margin: 0px;
        padding: 0px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .logo-container {
        /* width: 60%; */
        padding: 10px;
        display: flex;
        height: 200px;
        /* padding: 20px; */
        /* background: linear-gradient(2deg, black, #da3232); */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* box-shadow: 0px 5px 5px 1px black */
    }

    .logo-img {
        z-index: 10
    }
    .title {
        color: black;
        font-family: 'Charmonman', cursive;
        /* background: #8e46467a */
    }
`