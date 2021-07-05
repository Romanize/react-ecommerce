import './index.css'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Item({item}) {

    return (
        <div className="ItemCard">
            <div className='ItemCard__imgWrapper'>
                <div className="ItemCard__roundBox">
                    <img src={item.pictureURL} alt="" />
                </div>
            </div>
            <div className="ItemCard_bodyWrapper">
                <h3>{item.title}</h3>
                {/* <h5>{item.description}</h5> */}
                {/* <h3>{item.price}</h3> */}
                {/* <div className="ItemCard__inputs"> */}
                    {/* <div className="ItemCard__inputs--buy"></div> */}
                    {/* <Counter item={item}/> */}
                {/* </div> */}
                <Link to={`/item/${item.id}`}>
                    <IconButton >
                        <AddCircleIcon 
                            className="ItemCard__seeMoreButton"
                            style={{ fontSize: '2rem' }}
                        />
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default Item
