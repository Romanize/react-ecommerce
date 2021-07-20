import { useContext } from 'react'
import firebase from "firebase/app";
import { db } from '../../firebase/firebase'
import { CartContext } from '../../contexts/CartContext'

const CheckoutForm = () => {

    const {cart, sumTotals, clear, items} = useContext(CartContext);

    const updateStock = async () => {        
        const batch = db.batch();

        const outOfStock = [];

        let productsRef = db.collection("products");

        cart.forEach(product => {
            const item = items.docs.find(item => item.id === product.id)

            if(item.data().stock >= product.quantity){
                batch.update(productsRef.doc(product.id), { stock: (product.stock - product.quantity) });
            } else {
                outOfStock.push(product)
            }
        })

        if(outOfStock.length === 0) {
            await batch.commit()
            return {status: 'OK'}
        } else {
            return {status: 'out of stock', outOfStock}
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
        e.preventDefault();

        const formValues = e.target;

        const buyer = {
            name: formValues['name'].value,
            telephone: formValues['tel'].value,
            email: formValues['email'].value,
        }

        const checkoutValidation = await updateStock()
        
        if(checkoutValidation.status === 'OK'){
            console.log(checkoutValidation)

            await checkout(buyer);

            formValues.reset();
            clear();
        } else {
            console.log(checkoutValidation)
        }

    }

    return (
        <form onSubmit={(e)=>getBuyer(e)}>
            <input type="text" name="name" placeholder="Name"/>
            <input type="tel" name="tel" placeholder="555-33333"/>
            <input type="email" name="email" placeholder="robert@test.com"/>
            <input type="submit" value="Checkout" />
        </form>
    )
}

export default CheckoutForm