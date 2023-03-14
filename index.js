let shoppingList = [
    {name:'cheese', amount:2, HaveThis:true, priceFor1:20},
    {name:'apples', amount:8, HaveThis:false, priceFor1:15},
    {name:'milk', amount:2, HaveThis:true, priceFor1:30},
    {name:'eggs', amount:20, HaveThis:false, priceFor1:3},
];
const list = document.getElementById("shopping-list");
const listSort = document.getElementById("sortList")
function showListHaveThis() {
    list.innerHTML = "";
    let haveThisMassive = [];
    let dontHaveThisMassive = [];
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].HaveThis) {
            haveThisMassive.push(shoppingList[i]);
        } else {
            dontHaveThisMassive.push(shoppingList[i]);
        }
    }
    let shoppingListSort = haveThisMassive.concat(dontHaveThisMassive);
    for (let i = 0; i < shoppingListSort.length; i++) {
        const item = shoppingListSort[i];
        const li = document.createElement("div");
        li.innerHTML = `${item.name}  ${item.amount}шт  ${item.HaveThis ? "Куплено" : "Не куплено"} ${item.priceFor1}`;
        li.addEventListener("click", () => {
            item.HaveThis = !item.HaveThis;
            li.innerHTML = `${item.name}  ${item.amount}шт ${item.HaveThis ? "Куплено" : "Не куплено"} ${item.priceFor1}`;
        });
        list.appendChild(li);
    }
}
showListHaveThis(shoppingList);

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

function deleteObject() {
    let productName = document.getElementById('deleteProductInpute').value;
    let foundProduct = shoppingList.find(item => item.name === productName);
    if (foundProduct) {
        let index = shoppingList.indexOf(foundProduct);
        shoppingList.splice(index, 1);
        console.log("Завдання 3. Успішно видалено", shoppingList);
    } else {
        console.log("Завдання 3. Такого продукту немає");
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
let text = document.querySelector('.divShow');

document.addEventListener('keydown', (event) =>{
    if (event.ctrlKey && event.key === "e"){
        event.preventDefault();
        console.log("WORKING");
        let textArea = document.createElement('textarea');
        textArea.value = text.innerText;
        document.body.append(textArea);
    }
});


