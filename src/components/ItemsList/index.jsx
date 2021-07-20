import Item from '../Item'

function ItemList({items}) {

    return (
        <>
            {items.map(item => {
                return <Item item={item.data()} id={item.id} key={item.id}/>
            })
            }
        </>
    )
}

export default ItemList
