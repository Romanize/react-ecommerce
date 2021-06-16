import React from 'react'
import Card from '../../components/Card'

function ItemListContainer({products}) {

    return (
        <div>
            <Card greeting="Hello my Friend " product={products[0]}/>
            <Card greeting="Hello my Friend " product={products[1]}/>
        </div>
    )
}

export default ItemListContainer
