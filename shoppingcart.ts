import * as promptSync from "prompt-sync";
const prompt = promptSync();

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

let cart: Product[] = [];

// Function to add product to cart
const addProduct = () => {
  const productId = parseInt(prompt("Product ID: "));
  const productName = prompt("Product Name: ");
  const productQuantity = parseInt(prompt("Product Quantity: "));
  const productPrice = parseInt(prompt("Product Price: "));

  cart.push({
    id: productId,
    name: productName,
    quantity: productQuantity,
    price: productPrice,
  });

  console.log("Product added successfully to the cart.");
};

// Function to remove product from cart
const removeProduct = (id: number): Product[] => {
  let isFound = false;
  const filteredCart = cart.filter((product) => {
    if (product.id === id) {
      isFound = true;
      console.log("Product removed from cart.");
      return false;
    }
    return true;
  });

  if (!isFound) console.log("Product with given id, not found.");

  return filteredCart;
};



// Function to update quantity of product with given id
const updateQuantity = (id: number): Product[] => {
  let isUpdated = false;
  const updatedCart = cart.map((product) => {
    if (product.id === id) {
      console.log("Current Quantity: ", product.quantity);
      const newQuantity = parseInt(prompt("Product New Quantity: "));
      product.quantity = newQuantity;
      isUpdated = true;
      console.log("Product quantity updated.");
      return updatedCart;
    }
  });
  if (!isUpdated) console.log("Product with given id, not found.");
  return cart;
};

const getCartList = () => {
  console.log(cart);
};


// Function to calculate total price
const calculateTotalPrice = () => {
  return cart.reduce((total, product) => {
    return total + product.price;
  }, 0);
};

// Function to search products by name
const searchByName = (name: string) => {
  let isFound = false;
  cart.map((product) => {
    if (product.name === name) {
      console.log("-----  Item Found!  -----");
      console.log("Product Name: ", product.name);
      console.log("Product ID: ", product.id);
      console.log("Product Quantity: ", product.quantity);
      console.log("Product Price: ", product.price);
      console.log("-------------------------");

      isFound = true;
    }
  });
  if (!isFound) console.log("Product Not Found!");
};


let stop = false;
while (!stop) {
  console.log(
    "0.Exit  1.Print Cart  2.Add Product  3.Remove Product  4.Update Quantity  5.Total Price  6.Empty Cart  7.Search By Name"
  );
  let option = parseInt(prompt("Option: "));

  switch (option) {
    case 0:
      stop = true;
      break;

    case 1:
      getCartList();
      break;

    case 2:
      addProduct();
      break;

    case 3:
      cart = removeProduct(parseInt(prompt("Enter Id to remove product: ")));
      break;

    case 4:
      cart = updateQuantity(parseInt(prompt("Enter Id to update Quantity: ")));
      break;

    case 5:
      const totalPrice = calculateTotalPrice();
      console.log("Total Price: ", totalPrice);
      break;

    case 6:
      cart = [];
      break;

    case 7:
      searchByName(prompt("Enter name to search: "));
      break;

    default:
      console.log("Invalid Option Encountered. Choose Wisely.");
  }
}
