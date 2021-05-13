import { useState } from "react"
import { useQuery } from "react-query"
import Item from "./Item/Item"
import Cart from "./Cart/Cart.js"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { Wrapper, StyledButton } from "./App.styles"
import Drawer from "@material-ui/core/Drawer"
import LinearProgress from "@material-ui/core/LinearProgress"
import Grid from "@material-ui/core/Grid"
import AddShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import Badge from "@material-ui/core/Badge"
import DataView from "./components/DataView/DataView"
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import { AddShoppingCartIcon } from "@material-ui/icons"

//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  img: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('http://172.17.0.1:8000/products')).json()
}

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)

  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0)

  const handleAddToCart:any = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id == clickedItem.id)
      if (isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 } : item
        ))
      }

      return [...prev, { ...clickedItem, amount: 1 }]
    })
  }
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {
        if (item.id == id) {
          if (item.amount == 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }]
        } else {
          return [...ack, item]
        }
      }, [] as CartItemType[])
    ))
  }

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong...</div>
  return (
    <div className="App">
      <Header/>
      <Wrapper>
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color='error'>
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
        <DataView data={data} handleAddToCart={handleAddToCart}/>
        {/* <Grid container spacing={3}>
          {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid> */}
        <Footer/>
      </Wrapper>
    </div>
  );
}

export default App;
