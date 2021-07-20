import { createContext, useState, useEffect} from 'react';
import { db } from '../firebase/firebase'

export const CartContext = createContext()

export function CartContextComponent({children}) {

    const [cart, setCart] = useState([])

    const [items, setItems] = useState(null)

    useEffect(()=>{
        function fetchData(){
            db.collection("products").onSnapshot(docs => setItems(docs))
        }
    fetchData()
    },[])

    const addItem=(product, quantity) => {
        const index = cart.findIndex(element => element.id === product.id) 
        
        if(index=== -1) setCart([...cart, {...product.data(), id : product.id, quantity}])
        else {
            setCart(() => {
                cart[index].quantity=quantity
                return [...cart]
            })
        }
    }

    function clear(){
        setCart([])
    }

    function removeItem(id) {
        const filteredCart = cart.filter((item) => item.id !== id);
        setCart(filteredCart);
    }

    function sumTotals(){     
        const totalValue = cart.reduce((accum, element)=>{
            return (accum += (element.price * element.quantity))
        },0)
        return totalValue
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clear,
            sumTotals,
            items
        }}>
            {children}
        </CartContext.Provider>
    )
}