import * as cartServices from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem('hotwheels ferrari', 20.99, 1);
const item2 = await createItem('hotwheels lamborghini', 39.99, 3);

//adicionado 2 itens ao carrinho
await cartServices.addItem(myCart,item1);
await cartServices.addItem(myCart,item2);

//removendo 1 da quantidade de item
//await cartServices.removeItem(myCart, item2);
//await cartServices.removeItem(myCart, item2);

//limpar o carrinho, remover todos os itens
await cartServices.cleanCart(myCart);

//display do carrinho
await cartServices.displayCart(myCart);


//deletado 2 itens do carrinho
// await cartServices.deleteItem(myCart, item2.name)
// await cartServices.deleteItem(myCart, item1.name)



await cartServices.calculateTotal(myCart);


