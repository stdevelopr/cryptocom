import Button from "@material-ui/core/Button"

//types
import { CartItemType } from "../App"
// styles
import { Wrapper } from "./Item.styles"

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart})=> (
    <Wrapper>
        <img src={item.img} alt={item.title}/>
        <div className="content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>R${item.price}</h3>
        </div>
        <Button onClick={()=> handleAddToCart(item)}>
            Comprar
        </Button>
    </Wrapper>
)

export default Item