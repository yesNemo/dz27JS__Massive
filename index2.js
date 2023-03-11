function buyingProduct(){
    let nameProduct = 'milk';
    let productFound = false;
    shoppingList.forEach(item => {
        if (nameProduct === item.name){
            if (item.HaveThis){
                console.log("Цей товар вже був придбанний");
            }else {
                item.HaveThis = true;
                console.log("Відмічено як придбанний");
            }
            productFound = true;
        }
    });
    if (!productFound) {
        console.log("Такого товару не маємо!");
    }
}
let productName = 'milk';
const foundProduct = shoppingList.filter(item => item.name !== productName);
console.log(foundProduct)



// showListHaveThis(shoppingList);