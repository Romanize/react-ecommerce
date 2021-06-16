import React from 'react'
import ProductMainCard from '../../components/ProductMainCard'
import './index.css'

function ProductsContainer({ products, greeting, buyProduct }) {

    const productCardsList = products.map(product => { //TODO-Find more popular products
        return <ProductMainCard buyProduct={buyProduct} product={product} key={product.id}/>
    })

    return (
        <div>
            <h1>{greeting}</h1> {/*TODO-Remove this and div container*/}
            <div className='favProductsContainer'>
                {productCardsList}
            </div> 
        </div>
    )
}

export default ProductsContainer
