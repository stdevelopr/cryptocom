import React, {useState, createContext} from "react"

export const shopContext = createContext()

export default function ShopProvider({children}){
    const [items, setItems] = useState([])

    return (
        <shopContext.Provider value={{items, setItems}}>
            {children}
        </shopContext.Provider>
    )
}