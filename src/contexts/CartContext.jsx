import { createContext, useState} from 'react'

export const CartContext = createContext()

export function CartContextComponent({children}) {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem =(product, quantity) => {
        const index = cart.findIndex(element => element.id === product.id) 
        
        if(index=== -1) setCart([...cart, {...product, quantity}])
        else {
            setCart(() => {
                cart[index].quantity=quantity
                return [...cart]
            })
        }
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}