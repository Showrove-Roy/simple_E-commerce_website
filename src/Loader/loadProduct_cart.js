import { getShoppingCart } from "../utilities/fakedb";

export const loadProduct_cart = async () => {
  // get product
  const productData = await fetch("products.json");
  const products = await productData.json();

  //get card
  const savedCard = getShoppingCart();
  const initialCart = [];
  for (const id in savedCard) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = savedCard[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }
  return { products, initialCart };
};
