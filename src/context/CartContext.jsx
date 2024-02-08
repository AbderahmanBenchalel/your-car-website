import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const initialState = {
  isCartOpen: false,
  isNavOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/toggle":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
        isNavOpen: !state.isCartOpen ? false : state.isNavOpen,
      };

    case "nav/toggle":
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
        isCartOpen: !state.isNavOpen ? false : state.isCartOpen,
      };
    default:
      throw new Error("Unknown action");
  }
}

function CartProvider({ children }) {
  const [{ isCartOpen, isNavOpen }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ isCartOpen, isNavOpen, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  return useContext(CartContext);
}

export { CartProvider, useCartContext };
