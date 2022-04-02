import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {    // Componente
    const [cartList, setCartList] = useState([])

    const addToCart = (item) => {
        // Chequeo si existe el producto que quiero agregar a través de la ID
        const exist = cartList.find(game => game.id === item.id)
        if (exist) {
        // Si existe seteo el cartList, recorro el cartList con un map, comparo el id del producto que ya tengo con el que quiero agregar, si es verdadero incremento la cantidad con la cantidad ya existente.
            setCartList(
                cartList.map(game => 
                    game.id === item.id ? {...exist, cantidad: exist.cantidad + item.cantidad } : game
            )
        )
    } else {
        // Si no existe seteo el cartList y lo agrego junto a los demás productos que ya tengo
            setCartList([
                ...cartList,
                item
            ]);   
        }
    }

    function eliminateFromCartList(id) {
        // Elimino el producto por Id filtrando y quedandome con todos los que no tienen el id seleccionado
        const newCart = cartList.filter(product => product.id !== id)
        // Guardo el nuevo carrito
        setCartList(newCart)
    }

    // Elimino todos los productos del carrito 
    const clearCartList = (item) => {
        setCartList([])
    }

    return (
        <>
            <CartContext.Provider value={{
                cartList,                       // Por convención estados arriba y funciones abajo
                addToCart,
                eliminateFromCartList,
                clearCartList
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
} 

export default CartContextProvider