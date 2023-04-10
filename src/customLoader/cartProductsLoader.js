
import { getShoppingCart } from "../utilities/fakedb";

let productsLoader = async () => {
  let loadedProducts = await fetch('products.json');
  let products = await loadedProducts.json();

  // if the cart is in the database, you must use async await
  let storedCart = getShoppingCart();
  let savedCart = [];


  // run the for in loop inside the storedCart object to find the stored products using id
  for (let id in storedCart) {
    let addedProducts = products.find(pd => pd.id === id);

    if (addedProducts) {
      let quantity = storedCart[id];
      addedProducts.quantity = quantity;
      // store the added products with updated quantity to the saved cart array
      savedCart.push(addedProducts);
    }
  }
  return savedCart;
  // return [products, savedCart];
  // return {products, cart: savedCart};

}

export default productsLoader;
