import React, { useContext } from 'react';
import { shopContext } from "../../shopContext"
import { Grid } from '@material-ui/core';

function Checkout() {
    const { items, setItems } = useContext(shopContext)
    const list = [{
        amount: 1,
        description: "Descrição77",
        id: "41",
        img: "http://localhost:9000/my-bucket/joia.jpg",
        price: 199,
        title: "Produto7"
    },
    {
        amount: 2,
        description: "Descrição4",
        id: "43",
        img: "http://localhost:9000/my-bucket/joia.jpg",
        price: 199,
        title: "Produto3"
    }]
    const renderProducts = () => {
        const productList = list.map(item => {
            return (
                <tr key={item.id}>
                    <td>
                        <img src={item.img} style={{ height: '100px' }} />
                    </td>
                    <td>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                    </td>
                    <td>{item.price}</td>
                    <td>{item.amount}</td>
                    <td>{item.price * item.amount}</td>
                </tr>
            )
        })
        return productList
    }

    const renderTotal = () => {
        return (
            <table style={{width: '300px'}}>
                <thead>
                    <th>Resumo</th>
                    <th>Valor</th>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    <tr>
                        <td>Produtos</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>1000</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    return (
        <div>
            <header style={{height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{fontSize: 'larger'}}>
                Checkout
                </p>
            </header>
            <div className="main-content">
                <div className="container">
                    <div className="p-grid">
                        <div className="p-col-12">
                            <div className="row-checkout-box">
                                <table style={{ width: '100%' }}>
                                    <thead style={{ backgroundColor: 'aliceblue' }}>
                                        <tr>
                                            <th className="p-col-2">Produto</th>
                                            <th className="p-col-5"></th>
                                            <th>Preço</th>
                                            <th>Qtde</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: 'center' }}>
                                        {renderProducts()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="p-col-12" style={{border: '1px solid', textAlign: '-webkit-center'}}>
                            {renderTotal()}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Checkout
