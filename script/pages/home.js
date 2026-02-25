if (document.body.getAttribute("data-page-id") == "1") {
    let products = JSON.parse(localStorage.getItem("tech_store_products")).reverse()
    let flash_sales_products = document.querySelector(".flash_sales .products")
    for (let i = 0; i < products.length; i++) {        
        if (i < 4) {
            let product = document.createElement("div")
            product.className = "product"
            product.innerHTML = `
                    <div class="product_image" style="background-image: url(${products[i].images[0]});">
                        <div class="discount back-red white text-12-400 font-poppins">-40%</div>
                        <div class="icons">
                            <div class="heart"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                            <div class="eye"><i class="fa fa-eye" aria-hidden="true"></i></div>
                        </div>
                    </div>
                    <div class="information">
                        <p class="text-19-500 font-poppins">${products[i].title}</p>
                        <div class="text-16-600 font-poppins price">$${products[i].price}</div>
                    </div>
                    `
            flash_sales_products.append(product)
        }

    }
    let flash_sales_2_products = document.querySelector(".flash_sales_2 .products")
    for (let i = 0; i < products.length; i++) {        
        if (i < 8) {
            let product = document.createElement("div")
            product.className = "product"
            product.innerHTML = `
                    <div class="product_image" style="background-image: url(${products[i].images[0]});">
                        <div class="discount back-red white text-12-400 font-poppins">-40%</div>
                        <div class="icons">
                            <div class="heart"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                            <div class="eye"><i class="fa fa-eye" aria-hidden="true"></i></div>
                        </div>
                    </div>
                    <div class="information">
                        <p class="text-19-500 font-poppins">${products[i].title}</p>
                        <div class="text-16-600 font-poppins price">$${products[i].price}</div>
                    </div>
                    `
            flash_sales_2_products.append(product)
        }

    }
}
