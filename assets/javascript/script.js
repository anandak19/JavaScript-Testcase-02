let price = 0;
let priceInput = document.getElementById("itemPrice");
let nameInput = document.getElementById("itemName");
let totalPriceElement = document.getElementById("total");

function updateTotal(amount) {
    totalPriceElement.innerHTML = price.toFixed(2);
}

function addItemToCart() {
    let currentPrice = parseFloat(priceInput.value);
    let currentProduct = nameInput.value;
    if(currentProduct){
        price += currentPrice;
        alert(`${currentProduct} is successfully added to the cart and the total amount is ${price}`);
        updateTotal(currentPrice);
        priceInput.value = "";
        nameInput.value = "";
    }else{
        alert("Enter the name of item")
    }

}
