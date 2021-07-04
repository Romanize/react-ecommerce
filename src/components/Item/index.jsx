import './index.css'
import { Link } from 'react-router-dom'

function Item({item}) {

    return (
        <div className="ItemCard">
            <img src={item.pictureURL} alt="" />
            <h3>{item.title}</h3>
            <h5>{item.description}</h5> {/* Delete this */}
            <h3>{item.price}</h3>
            {/* <div className="ItemCard__inputs"> */}
                {/* <div className="ItemCard__inputs--buy"></div> */}
                {/* <Counter item={item}/> */}
            {/* </div> */}
            <Link to={`/item/${item.id}`}>Ver más</Link>
        </div>
    )
}

export default Item
