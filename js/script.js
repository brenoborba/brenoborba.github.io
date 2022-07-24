/* API request for displaying the catalog */
const showMoreBtn = document.getElementById('showMoreBtn')
const catalogGrid = document.querySelector('.catalog-grid')
const secondPage = document.getElementById('secondPage')
secondPage.style.display = 'none'
let page = 1

async function showProducts(page) {
    let productWrapper
   await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
   .then(res => res.json())
   .then(data => data.products.forEach((product) => {
        productWrapper = document.createElement('div')
        productWrapper.innerHTML += 
        `<div class="catalog-item">
            <div class="display-item">
                <img src="${product.image}" alt="" class="displayImg"/>
            </div>

            <div class="product-info">
                <div class="productName">${product.name}</div>

                <div class="productDescription">
                    ${product.description}
                </div>

                <div class="oldPrice">De: <del>R$${product.oldPrice},00</del></div>
                <div class="price">Por: R$${product.price},00</div>
                <div class="installments">ou ${product.installments.count}x de R$${product.installments.value}0</div>

                <button class="btn">Comprar</button>
            </div>
        </div>`

        catalogGrid.appendChild(productWrapper)
        
    }))


}
window.onload = showProducts()

showMoreBtn.onclick = function(){
    page++
    showProducts(page)
    secondPage.style.display = ''
}


