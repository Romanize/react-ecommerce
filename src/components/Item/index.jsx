import './index.css'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Item({item, id}) {

    return (
        <div className="ItemCard">
            <div className='ItemCard__imgWrapper'>
                <div className="ItemCard__roundBox">
                    <img src={item.pictureURL} alt="" />
                </div>
            </div>
            <div className="ItemCard__bodyWrapper">
                <h3>{item.title}</h3>
                <p>{item.brand}</p>
                <div className="ItemCard__priceBox">
                    <h4>$ {item.price}</h4>
                    <Link to={`/item/${id}`}>
                        <IconButton >
                            <AddCircleIcon 
                                className="ItemCard__seeMoreButton"
                                style={{ fontSize: '2rem' }}
                            />
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item
