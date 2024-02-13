import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();
const initialState = {
  isCartOpen: false,
  isNavOpen: false,
  carsList: [],
  cart: [],
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

    case "carsList/fetch":
      return { ...state, carsList: action.payload };

    case "cart/add":
      if (!state.cart.length)
        return { ...state, cart: [{ ...action.payload, amount: 1 }] };

      return {
        ...state,
        cart: state.cart.map((p) => p.name).includes(action.payload.name)
          ? [...state.cart].map((p) => {
              if (p.name === action.payload.name) p.amount++;
              return p;
            })
          : [...state.cart, { ...action.payload, amount: 1 }],
      };

    case "product/increase":
      return {
        ...state,
        cart: [
          ...state.cart.map((p) => {
            if (p.name === action.payload) p.amount++;
            return p;
          }),
        ],
      };

    case "product/decrease":
      return {
        ...state,
        cart: [
          ...state.cart
            .map((p) => {
              if (p.name === action.payload && p.amount > 0) p.amount--;
              return p;
            })
            .filter((p) => p.amount > 0),
        ],
      };

    case "product/delete":
      return {
        ...state,
        cart: [...state.cart.filter((p) => p.name !== action.payload)],
      };

    case "cart/deleteAll":
      return { ...state, cart: [] };

    default:
      throw new Error("Unknown action");
  }
}

function CartProvider({ children }) {
  const [{ isCartOpen, isNavOpen, carsList, cart }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("../data/cars.json");
        const data = await res.json();
        dispatch({ type: "carsList/fetch", payload: data.cars });
      } catch (err) {
        alert(err);
      }
    }
    fetchCars();
  }, []);

  return (
    <CartContext.Provider
      value={{ isCartOpen, isNavOpen, carsList, cart, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  return useContext(CartContext);
}

export { CartProvider, useCartContext };
