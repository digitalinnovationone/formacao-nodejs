//Quais ações meu carrinho pode fazer?

//CASOS DE USO
//-> ✅adicionar item ao carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}
//-> ✅deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1){
        userCart.splice(index,1);
    }
}
//->✅ remover um item do carrinho
async function removeItem(userCart, item) {

    //1. Encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //2. Caso não encontre o item
    if(indexFound == -1){
        console.log("Item não encontrado");
        return;
    }
    //3. item > 1 subtrair um item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }
    //4. item = 1 deletar o item
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }

}
//-> ✅calcular o valor total dos itens no carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL: ");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`💵Total: ${result}`);
}
//-> ✅display pra mostrar os itens no carrinho
async function displayCart(userCart) {
    console.log("Shopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index +1}. ${item.name} - R$ ${item.price} | ${item.quantity} X | Subtotal= ${item.subtotal()}`);
    });
}
async function cleanCart(userCart) {
    userCart.length = 0;
    console.log("Todos itens foram removidos!!");    
}


export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart,
    cleanCart,
}