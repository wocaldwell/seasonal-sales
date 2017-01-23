var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", listProducts);
// productsRequest.addEventListener("error", dataRequestFailed);

// List store products in div
function listProducts() {
    myObj = JSON.parse(event.target.responseText);
    console.log(myObj);
    var productsDiv = document.getElementById("products");
    for (thing in myObj) {
        productsDiv.innerHTML += "<h2>" + myObj.products.name + "</h2>";
    };
};
productsRequest.open("GET", "products.json");
productsRequest.send();


var seasonSelector = document.getElementById("seasons");

// seasonSelector.addEventListener("change", listProductDiscounts);
