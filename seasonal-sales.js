var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", listProducts);
// productsRequest.addEventListener("error", dataRequestFailed);

// List store products in div
function listProducts() {
    myObj = JSON.parse(event.target.responseText);
    console.log(myObj);
    var productsDiv = document.getElementById("products");
    for (var i = 0; i < myObj.products.length; i++) {
        productsDiv.innerHTML += `<h2>${myObj.products[i].name}</h2>
                                  <p>${myObj.products[i].price}</p>`;
    };
};
productsRequest.open("GET", "products.json");
productsRequest.send();


var seasonSelector = document.getElementById("seasons");

// seasonSelector.addEventListener("change", listProductDiscounts);
