let shoppingList = [
    {name:'cheese', amount:2, HaveThis:true, priceFor1:20},
    {name:'apples', amount:8, HaveThis:false, priceFor1:15},
    {name:'milk', amount:2, HaveThis:true, priceFor1:30},
    {name:'eggs', amount:20, HaveThis:false, priceFor1:3},
];

function showListHaveThis(shoppingList) {
    let shoppingListSort;
    let haveThisMassive=[];
    let dontHaveThisMassive=[];
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].HaveThis){
            haveThisMassive.push(shoppingList[i])
        }else {
            dontHaveThisMassive.push(shoppingList[i])
        }
    }
    shoppingListSort= haveThisMassive.concat(dontHaveThisMassive);
    console.log("Завдання 1.Нормальний список",shoppingList)
    // console.log("Завдання 1.Це вже купленний", haveThisMassive)
    // console.log("Завдання 1.Це ще не купленний",dontHaveThisMassive)
    console.log("Завдання 1.Відсортирований список", shoppingListSort)
    // return shoppingListSort;
}
function buyingProduct(){

    let nameProduct = document.getElementById('buyingProductInpute').value;
    let item = shoppingList.find(item => item.name === nameProduct);
        if (item){
            console.log("enter ONe")
            if (item.HaveThis){
                console.log("Завдання 2.Цей товар вже був придбанний")
            }else {
                item.HaveThis = true;
                console.log("Завдання 2.Відмічено як придбанний")
            }
        } else {
            console.log("Завдання 2.Такого товару не маємо!");
        }
}
// buyingProduct();

function deleteObject(){
    let productName = document.getElementById('deleteProductInpute').value;
   let checkProduct = shoppingList.find(item => item.name === productName)
    if (checkProduct){
        let foundProduct = shoppingList.filter(item => item.name !== productName);
        console.log("Завдання 3.Успішно видалено",foundProduct)
    }else {
        console.log("Завдання 3.Такого продукту немає")
    }
}
function addObject(){
let addingProduct = document.getElementById("addProductInpute").value;
// let addingProduct = "esggs.40.true.20";
    let productParts = addingProduct.split(".");
    let productAdd = (productParts[0])
    let amountAdd = parseInt(productParts[1])
    let haveOrNoAdd = (productParts[2])
    let priceForOneAdd = parseInt(productParts[3])
    let checkProduct = shoppingList.find(item => item.name === productAdd)
    if (checkProduct){
        console.log("Завдання 4.Такий товар вже є в списку. Оновленні його данні!")
        checkProduct.amount = checkProduct.amount + amountAdd;
        checkProduct.HaveThis = haveOrNoAdd;
        checkProduct.priceFor1 = priceForOneAdd;
    }else {
        console.log("Завдання 4.Добавленний новий продукт")
        shoppingList.push({
            name: productAdd,
            amount: amountAdd,
            HaveThis: haveOrNoAdd,
            priceFor1: priceForOneAdd,
        })
    }
}

