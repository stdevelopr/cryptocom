import React, { useContext } from 'react';
import {shopContext} from "../../shopContext"

function Checkout() {
    const {items,setItems} = useContext(shopContext)
    console.log("Items", items)
    return (
        <div>
           <header>Joias</header>
           <div className="main-content">
               <div className="container">
                   <div className="p-grid">
                       <div className="p-md-8 p-sm-6">
                            <div className="row-checkout-box">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th></th>
                                            <th>Preço</th>
                                            <th>Qtde</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                       </div>
                       <div className="p-md-4 p-sm-6">
                            <div className="row">
                                Resumo do pedido
                            </div>
                            <div className="row">
                                Resumo do pedido
                            </div>
                            <div className="row">
                                Resumo do pedido
                            </div>
                       </div>

                   </div>

               </div>
           </div>
        </div>
    )
}

export default Checkout
