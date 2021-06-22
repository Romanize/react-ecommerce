import Item from '../Item'

function ItemList({items, handleCart}) {
    return (
        <>
            {items.map(item => { //TODO-Find more popular products
                return <Item item={item} key={item.id} handleCart={handleCart}/>
            })
            }
        </>
    )
}

export default ItemList
