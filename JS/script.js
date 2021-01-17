/// get element
let addToCart = document.querySelectorAll('.add_cart');
let removeProduct = document.querySelector('#product-list');
let clearCart = document.getElementById('clear_cart')
// console.log(addToCart)

//products array (optional)

let products = [
    {
        name: 'Red Nike',
        tag: 'Nike',
        price: 120
    },
    {
        name: 'Nike Blue',
        tag: 'Nike',
        price: 100
    },
    {
        name: 'Reebok White',
        tag: 'Reebok',
        price: 80
    }

]
//add event listener
for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', addProduct)
}
removeProduct.addEventListener('click', removeProductFromCart);
clearCart.addEventListener('click', removeAllProduct)

//function 
function addProduct(e) {
    let cartProduct = e.target.parentElement
    // console.log(m)
    // console.log(`${cartProduct.childNodes[1].textContent}`)
    // console.log(`${cartProduct.childNodes[5].textContent} `)
    let list = document.getElementById('product-list')
    let row = document.createElement('tr');
    row.style.background = "#f5f5dc"
    row.innerHTML = `
      <td>${cartProduct.childNodes[1].textContent}</td>
      <td>${cartProduct.childNodes[5].textContent}</td>
      <td><a href="#" class="delete" style="color:red"> X </a></td>`;
    console.log(row)
    list.appendChild(row);
}

function removeProductFromCart(e) {
    if (e.target.hasAttribute('href')) {
        let product = e.target.parentElement.parentElement
        product.remove()
    }
}

function removeAllProduct() {
    let clear = document.getElementById('product-list');
    if (confirm("Are you sure want to delete all items from cart??")) {
        clear.innerHTML = '';
    }
}

