import React from 'react'

function Card({greeting, product}) {
    return (
        <div>
            <h2>{greeting}</h2>
            <h3>{product.name}</h3>
            <h5>{product.color}</h5>
            <h3>{product.talla}</h3>
        </div>
    )
}

export default Card
