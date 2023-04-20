import * as promptSync from "prompt-sync";
const prompt = promptSync();

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

let cart: Product[] = [];


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
