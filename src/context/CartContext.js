import React, {useState, createContext} from 'react';

const cartCtx = createContext();

export default function CartContextProvider({children}) {
  const [cart, setCart] = useState ([]);

  function addItem (data, count) {
    const newItem = {
      ...data,
      count
    }

    if (isInCart(newItem.id)) {
      const findProduct = cart.find(data=> data.id === newItem.id)
      const productIndex = cart.indexOf(findProduct)
      const auxArray = [...cart]
      auxArray[productIndex].count += count
      setCart(auxArray)
    } else {
      setCart([...cart, newItem])
    }
  }

  function getTotalItemsInCart() {
    let totalItems = 0;
    cart.forEach((data) => {
      totalItems += data.count;
    });
    return totalItems;
  }

  function isInCart (id) {
    let found = cart.some((data) => data.id === id)
    return found;
  }

  function emptyCart () {
    return setCart ([])
  }

  function deleteItem(id) {
    return setCart(cart.filter(data => data.id !== id))
}

  function getItemPrice () {
    return cart.reduce((acc, data) => acc += data.price * data.count , 0)
  }


  return (
    <cartCtx.Provider value={{cart, addItem, getTotalItemsInCart, isInCart, emptyCart, deleteItem,getItemPrice}}> {children} </cartCtx.Provider>
  );
} 

export {cartCtx};