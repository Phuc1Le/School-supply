if(!localStorage.Cart){
    localStorage.Cart = JSON.stringify([])
}
else{
    let Cart = JSON.parse(localStorage.Cart)
    let m = []
    for(let i =0;i<Cart.length;i++){
        if(!m.includes(Cart[i].pname)){
            var addtr = document.createElement("tr")
            var cartItem = document.querySelectorAll("tbody tr") 
            var content = '<tr><td><img src="'+Cart[i].pimg+'" alt="Vở" srcset="" width="100px" height="100px"><br><span class = "tiTle">'+Cart[i].pname+'</span></td><td><p><span class = "Price">'+Cart[i].pprice+'</span><sup>đ</sup></p></td><td><input type="number" value="1" min="1" style = "width: 30px; outline: none;" ></td><td style="cursor: pointer;"><span class = "del">Xóa</span></td></tr>'  
            addtr.innerHTML = content
            var cartTable = document.querySelector("tbody")
            cartTable.append(addtr)
        }
        m.push(Cart[i].pname)
    }
    cartTotal()
    deleteCart()
}

var btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnitem = event.target
        var product = btnitem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H3").innerText
        var productPrice = product.querySelector("span").innerText
        addCart(productPrice, productImg, productName)
    })
})
function addCart(productPrice, productImg, productName){
    let Cart = JSON.parse(localStorage.Cart);
    Cart.push({
        pname: productName,
        pimg: productImg,
        pprice: productPrice,
    });
    localStorage.Cart = JSON.stringify(Cart);
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".tiTle")
        if(productT[i].innerHTML == productName){
            alert("You have already bought this item")
            return
        }
    }
    var content = '<tr><td><img src="'+productImg+'" alt="Vở" srcset="" width="100px" height="100px"><br><span class = "tiTle">'+productName+'</span></td><td><p><span class = "Price">'+productPrice+'</span><sup>đ</sup></p></td><td><input type="number" value="1" min="1" style = "width: 30px; outline: none;" ></td><td style="cursor: pointer;"><span class = "del">Xóa</span></td></tr>'  
    addtr.innerHTML = content
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    cartTotal()
    deleteCart()
}
function cartTotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for(var i =0; i < cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".Price").innerHTML
        totalA = inputValue*productPrice
        totalC = totalC + totalA
    }
    var totalmoney = document.querySelector(".total span")
    totalmoney.innerHTML = totalC
    inputchange()
}
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var deleteT = document.querySelectorAll(".del")
        deleteT[i].addEventListener("click",function(event){
            var cartDelete = event.target.parentElement.parentElement
            
            var itemD = cartDelete.remove()
            cartTotal()
        })
    }
}
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i =0; i < cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            cartTotal()
        })
    }
}
function popFunction(){
    var popup = document.getElementById("cArt")
    popup.classList.toggle("show");
}