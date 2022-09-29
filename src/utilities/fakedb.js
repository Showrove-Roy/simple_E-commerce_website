// set shopping cart information to the local storage
const addCartToDB = (id) => {
  let shoppingCart = getShoppingCart();

  // check product quantity and set value
  let quantity = shoppingCart[id];
  if (quantity) {
    let newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  // ste data to the local storage
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
};

// get shopping cart
const getShoppingCart = () => {
  // create empty shopping cart
  let shoppingCart = {};

  // get shopping cart from local storage If have
  const storedCart = localStorage.getItem("shoppingCart");

  //check shopping cart to local storage and set value
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

// Remove from cart
const removeFromCart = (id) => {
  const storedCart = localStorage.getItem("shoppingCart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      // ste data to the local storage
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    }
  }
};

// Clear local storage
const clearCart = () => {
  localStorage.clear("shoppingCart");
};

export { addCartToDB, removeFromCart, clearCart, getShoppingCart};
