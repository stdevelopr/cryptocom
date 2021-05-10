import React from 'react'
import { Wrapper } from './ItemStyle1.styles'
import Button from "@material-ui/core/Button"
export const ItemStyle1 = ({ data, handleAddToCart }) => {
    return (
        <Wrapper>
            <div className="item">

                <div className="images">
                    <div className="img-container">
                        <picture>
                            <img src={data.img} />
                        </picture>
                    </div>
                </div>
                <div className="text">
                    <p className="title">{data.title}</p>
                    <p className="description">{data.description}</p>
                    <p className="price">R$ {data.price}</p>
                </div>
                <Button onClick={()=>handleAddToCart(data)}>Comprar</Button>
            </div>
        </Wrapper>
    )
}
