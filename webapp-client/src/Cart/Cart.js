import CartItem from "../CartItem/CartItem"
import Button from "@material-ui/core/Button"
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import {shopContext} from "../shopContext"
// styles
import { Wrapper } from "./Cart.styles"

// types
import { CartItemType } from "../App"

// type Props = {
//     cartItems: CartItemType[];
//     addToCart: (clickedItem: CartItemType) => void;
//     removeFromCart: (id: number) => void;
// }

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
    const {items,setItems} = useContext(shopContext)
    let history = useHistory();
    const checkout = (cartItems)=>{
        history.push('/checkout')
        setItems(cartItems)
    }
    return (
        <Wrapper>
            <h2>Suas compras</h2>
            {cartItems.length === 0 ? <p>Sem items no carrinho</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <Button className="checkout" onClick={()=> checkout(cartItems)}>Finalizar</Button>
        </Wrapper>
    )
}

export default Cart

