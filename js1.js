
var productName = document.getElementById("pname");
var productPrice = document.getElementById("pprice");

var mainBtn = document.getElementById("mainBtn");

var products;
if (localStorage.getItem("productsList") == null){ products=[]; }
else {
    products = JSON.parse( localStorage.getItem("productsList") ); 
    displayProducts();
}

function addProduct(){
    
    if(validInputs()){
        if(checkInputs()){ 
        var product = {
            name : productName.value,
            price: productPrice.value
        }
        console.log(product);
        products.push(product);

        localStorage.setItem("productsList" , JSON.stringify(products));

        displayProducts();
        }
        else{
            window.alert("please, all details are required..");
        }
    } 
    else {
        alert("Invalid Inputs , Please Make first letter Capital");
    }
}


function displayProducts(){
    var cartona2 = ``;
    for(var i=0; i<products.length; i++){
        cartona2 += ` <span> ${ products[i].name } </span>
                      <span> ${ products[i].price } </span>
                      <button onclick="displayUpdate(${i})"> update </button> 
                      <button onclick="deleteProduct(${i})"> delete </button> <br> <br>
                   `
    }
    
    document.getElementById("container").innerHTML = cartona2;
}
 

function checkInputs(){
    if (productName.value != ""  &&  productPrice.value != "")  return true;
    else  return false;
}


function deleteProduct(index){
    products.splice(index,1);
    localStorage.setItem("productsList" , JSON.stringify(products));
    displayProducts();
}



function searchProduct(term){ 
    cartona = ``;
    for(var i=0; i<products.length; i++){
        if( products[i].name.toLowerCase().includes(term) == true ){
            cartona += ` <span> ${ products[i].name } </span>
                          <span>` + products[i].price + `</span>
                          <button> update </button>
                          <button onclick="deleteProduct(${i})"> delete </button> <br>
                       `
        }
        else{
            
        }
    }
    document.getElementById("container").innerHTML = cartona;
}  






function displayUpdate(index){
    document.getElementById("update").innerHTML = ` New Name  : <input id="newName">
                                                    New Price : <input id="newPrice">
                                                    <button onclick="update(${index});" > Update </button>`;
} 


function update(index){
    if(document.getElementById("newName").value != ""){
        products[index].name  = document.getElementById("newName").value;
    }
    
    if(document.getElementById("newPrice").value != ""){
        products[index].price = document.getElementById("newPrice").value;
    }
    localStorage.setItem("productsList" , JSON.stringify(products));
    displayProducts();
}


function validInputs(){
    var regex = /^[A-Z][a-z]{2,8}/ ;
    if(regex.test( productName.value ) == true)
        return true;
    else
        return false;
}













