import React from 'react'
import Counter from './Counter'
import './index.css'

function ProductMainCard({product, buyProduct}) {

    return (
        <div className="ProductMainCard">
            <h3>{product.name}</h3>
            <h5>{product.color}</h5>
            <h3>{product.talla}</h3>
            <Counter stock={product.stock} id={product.id}/>
            <button onClick={()=> buyProduct(product)}>BUY</button>
        </div>
    )
}

export default ProductMainCard
