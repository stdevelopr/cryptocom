import styled from "styled-components"
export const Wrapper = styled.div`

.p-button-secondary {
    background-color: #309696;
}
.dataview-demo .item-container {
    padding: .4rem; 
    text-align: center;
}

.p-dataview-header {
    background-color: white;
}

.dataview-demo .p-dropdown {
    width: 14rem;
    font-weight: normal;
}

.dataview-demo .product-name {
    /* font-size: 1.5rem; */
    font-weight: 700;
}

.dataview-demo .product-description {
    margin: 0 0 1rem 0;
}

.dataview-demo .product-category-icon {
    vertical-align: middle;
    margin-right: .5rem;
}

.dataview-demo .product-category {
    font-weight: 600;
    vertical-align: middle;
}

.dataview-demo .product-list-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
}

.dataview-demo .product-list-item img {
    width: 150px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
}

.dataview-demo .product-list-item .product-list-detail {
    flex: 1 1 0;
}

.dataview-demo .product-list-item .p-rating {
    margin: 0 0 .5rem 0;
}

.dataview-demo .product-list-item .product-price {
    /* font-size: 1.5rem; */
    font-weight: 600;
    margin-bottom: .5rem;
    align-self: flex-end;
}

.dataview-demo .product-list-item .product-list-action {
    display: flex;
    flex-direction: column;
}

.dataview-demo .product-list-item .p-button {
    margin-bottom: .5rem;
}

.dataview-demo .product-grid-item {
    height: 100%;
    /* margin: .5em; */
    /* border: 1px solid #dee2e6; */
    /* padding: 1rem; */
    padding: .4em;
}

.dataview-demo .product-grid-item .card {
    height: 100%;
    /* margin: .5em; */
    border: 1px solid #dee2e6;
    padding: 1rem;
}

.dataview-demo .product-grid-item .product-grid-item-top,
    .dataview-demo .product-grid-item .product-grid-item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* .dataview-demo .product-grid-item .img-container {
    width: 75%;
    height: 80%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 2rem 0;
} */

.dataview-demo .product-grid-item img {
    width: 75%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 2rem 0;
}

.dataview-demo .product-grid-item .product-grid-item-content {
    text-align: center;
}

.dataview-demo .product-grid-item .product-price {
    font-size: 1.5rem;
    font-weight: 600;
}


.dataview-demo .carousel .product-item .product-item-content {
    /* border: 1px solid var(--surface-d); */
    border-radius: 3px;
    margin: .3rem;
    text-align: center;
    padding: 2rem 0;
}

.dataview-demo .carousel .product-item .product-image {
    width: 50%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dataview-layout-options .p-highlight{
    background: #963030;
    :hover{
        background: #BD3C3C;
    }
}

@media screen and (max-width: 576px) {
    .dataview-demo .product-list-item {
        flex-direction: column;
        align-items: center;
    }

    .dataview-demo .product-list-item img {
        width: 75%;
        margin: 2rem 0;
    }

    .dataview-demo .product-list-item .product-list-detail {
        text-align: center;
    }

    .dataview-demo .product-list-item .product-price {
        align-self: center;
    }

    .dataview-demo .product-list-item .product-list-action {
        display: flex;
        flex-direction: column;
    }

    .dataview-demo .product-list-item .product-list-action {
        margin-top: 2rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
}
`