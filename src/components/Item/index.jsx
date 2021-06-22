import Counter from '../Counter'
import './index.css'

function Item({item, handleCart}) {

    return (
        <div className="ItemCard">
            <img src={item.pictureURL} alt="" />
            <h3>{item.title}</h3>
            <h5>{item.description}</h5> {/* Delete this */}
            <h3>{item.price}</h3>
            <div className="ItemCard__inputs">
                {/* <div className="ItemCard__inputs--buy"></div> */}
                <Counter stock={item.stock} id={item.id}/>
                <button onClick={()=> handleCart(item)}>BUY</button>
            </div>
        </div>
    )
}

export default Item
