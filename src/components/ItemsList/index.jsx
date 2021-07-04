import Item from '../Item'

function ItemList({items}) {
    return (
        <>
            {items.map(item => { //TODO-Find more popular products
                return <Item item={item} key={item.id}/>
            })
            }
        </>
    )
}

export default ItemList
