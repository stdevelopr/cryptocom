
import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
// import ProductService from '../service/ProductService';
import { Rating } from 'primereact/rating';
import { Wrapper } from "./DataView.styles"
import Item from "../../Item/Item"
import { ItemStyle1 } from "./Layouts/Item/ItemStyle1/ItemStyle1"


const DataViewComponent = ({ data, handleAddToCart }) => {
    const [products, setProducts] = useState(data);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' },
    ];

    // const productService = new ProductService();

    // useEffect(() => {
    //     productService.getProducts().then(data => setProducts(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const renderListItem = (data) => {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={data.img} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.title}</div>
                        <div className="product-description">{data.description}</div>
                        {/* <Rating value={data.rating} readOnly cancel={false}></Rating> */}
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{"OK"}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={false}></Button>
                        {/* <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span> */}
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (data) => {
        return (
            <div className="p-col-12 p-md-3 item-container">
                <ItemStyle1 data={data} handleAddToCart={handleAddToCart}/>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-6" style={{ textAlign: 'left' }}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} />
                </div>
                <div className="p-col-6" style={{ textAlign: 'right' }}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    }

    const header = renderHeader();

    return (
        <Wrapper>
            <div className="dataview-demo">
                <div className="card">
                    <DataView value={products} layout={layout} header={header}
                        itemTemplate={itemTemplate} paginator rows={9}
                        sortOrder={sortOrder} sortField={sortField} />
                </div>
            </div>
        </Wrapper>
    );
}

export default DataViewComponent