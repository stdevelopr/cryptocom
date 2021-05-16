import styled from "styled-components"
export const Wrapper = styled.div`

.item{
    border: 1px solid lightblue;
    border-radius: 20px;
    padding: 0px;
}

.images {
    text-align: center;
    /* height: 100px; */
    padding-bottom: 120%;
    position: relative;
    /* background-color: red; */
}

.img-container {
    width: 100%;
    height: 100%;
    position: absolute;
}

img {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
}

.text {
    padding: 5%;
    font-size: 14px;
}

.title {
    font-weight: 600;
    margin: 0px;
}

.description {
    font-style: italic;
    margin: 0px;
}

.price {
    margin: 0px;
}

button {
    border-radius: 0px 0px 20px 20px;
    width: 100%;
    :hover {
        background-color: #30969638
    }
}
`