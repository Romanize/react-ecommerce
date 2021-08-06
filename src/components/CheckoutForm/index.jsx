import { useContext, useState } from 'react'
import firebase from "firebase/app";
import { db } from '../../firebase'
import { CartContext } from '../../contexts/CartContext';
import Loader from '../Loader';
import './index.css'

const CheckoutForm = () => {

    const {cart, sumTotals, clear, items} = useContext(CartContext);
    const [loading, setLoading] = useState(false)

    const updateStock = async () => {        
        const batch = db.batch();

        const outOfStock = [];

        let productsRef = db.collection("products");

        cart.forEach(product => {
            const item = items.docs.find(item => item.id === product.id)

            //Compare Stock with DB before proceeding
            if(item.data().stock >= product.quantity){
                batch.update(productsRef.doc(product.id), { stock: (product.stock - product.quantity) });
            } else {
                //If no stock, add to array.
                outOfStock.push(product)
            }
        })

        //If there are no products out of stock, proceed to update DB
        if(outOfStock.length === 0) {
            await batch.commit()
            return {status: 'OK'}
        } else {
            return {status: 'Out of stock', outOfStock}
        }
    }

    const checkout = async (buyer) => {
        const order = {
            buyer,
            items: cart,
            total: sumTotals(),
            orderedAt: firebase.firestore.FieldValue.serverTimestamp()
        }

        const response = await db.collection('orders').add(order);

        return response
    }

    const getBuyer = async (e) => {
        setLoading(true);
        e.preventDefault();

        const formValues = e.target;

        const buyer = {
            name: formValues['name'].value,
            telephone: formValues['tel'].value,
            email: formValues['email'].value,
        }

        const checkoutValidation = await updateStock()
        
        if(checkoutValidation.status === 'OK'){
            await checkout(buyer);
            setLoading(false)

            formValues.reset();
            clear();
            alert('Thanks for buying!')
        } else {
            //Show products out of stock
            alert(`Los siguientes productos se encuentran fuera de stock: ${checkoutValidation.outOfStock.join(', ')}`)
            setLoading(false)
        }

    }

    return (
        <form onSubmit={(e)=>getBuyer(e)} className="CheckoutForm">
            {loading && <Loader />}
            <h3>Completá tu compra</h3>
            <input type="text" name="name" placeholder="Name"/>
            <input type="tel" name="tel" placeholder="15-555-33333"/>
            <input type="email" name="email" placeholder="robert.martinez@example.com"/><br />
            <input type="submit" value="Checkout" />
        </form>
    )
}

export default CheckoutForm