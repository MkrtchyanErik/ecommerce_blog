if (document.body.getAttribute("data-page-id") == "4") {
    let url = window.location.search
    let params = new URLSearchParams(url)
    let attributes_data = JSON.parse(localStorage.getItem("tech_store_attributes"))
    let products = JSON.parse(localStorage.getItem("tech_store_products")).reverse()
    let products_main = products.find(el => el.id == params.get("product"))
    if (!products_main || !params.get("product")) {
        window.location.href = "/pages/shop.html"
    } else {
        let index = 1
        let main_image = document.querySelector(".product_images .main_image")
        let first_image = document.querySelector(".images_available .first_image")
        let two_image = document.querySelector(".images_available .two_image")
        let three_image = document.querySelector(".images_available .three_image")
        let four_image = document.querySelector(".images_available .four_image")
        let five_image = document.querySelector(".images_available .five_image")
        main_image.style.backgroundImage = `url(${products_main.images[0]}`
        first_image.style.backgroundImage = `url(${products_main.images[0]}`
        two_image.style.backgroundImage = `url(${products_main.images[1]}`
        three_image.style.backgroundImage = `url(${products_main.images[2]}`
        four_image.style.backgroundImage = `url(${products_main.images[3]}`
        five_image.style.backgroundImage = `url(${products_main.images[4]}`
        let images_available = document.querySelectorAll(".images_available div")
        images_available.forEach(image => {
            image.addEventListener("click", () => {
                main_image.style.backgroundImage = image.style.backgroundImage
            })
        });
        document.querySelector(".product_info h3").innerHTML = products_main.title
        document.querySelector(".product_price").innerHTML = "<h6 class='blue'>Price: </h6>" + "$" + products_main.price
        document.querySelector(".product_info_description").innerHTML = "<span class='blue text-20-600'>Description:</span> " + products_main.description
        let attributes = document.querySelector(".attributes")

        for (let i = 0; i < attributes_data.length; i++) {
            for (let l = 0; l < products_main.attributes.length; l++) {
                if (attributes_data[i].id == products_main.attributes[l].id) {
                    console.log(attributes_data[i].terms[products_main.attributes[l].term - 1].value);
                    console.log(attributes_data[i].title);
                    let left_side_div = document.createElement("div")
                    left_side_div.className = "left_side_div font-inter"
                    left_side_div.innerHTML = attributes_data[i].title
                    let right_side_div = document.createElement("div")
                    right_side_div.className = "right_side_div font-inter"
                    right_side_div.innerHTML = attributes_data[i].terms[products_main.attributes[l].term - 1].value
                    attributes.querySelector(".right_side").append(right_side_div)
                    attributes.querySelector(".left_side").append(left_side_div)
                }
            }
        }
        attributes_data.forEach(attribute => {
            if (attribute) {

            }
        });
        attributes.forEach
        products.forEach(product => {
            if (index <= 3 && product.id != products_main.id) {
                products_main.images[0]
                index++
                let maincont = document.querySelector(".product-grid")
                let product_card = document.createElement("a")
                product_card.href = "/pages/product.html?product=" + product.id
                product_card.className = "product-card"
                product_card.innerHTML = ` 
                <div class="product-card_img" style="background-image: url(${product.images[0]})"></div>
                <div class="product-card_info">
                    <h3 class="font-poppins text-16-600 product_card-title">${product.title}</h3>
                    <p class="font-inter text-24-700 product_card-price">${product.price}</p>
                    <button class="back-red white font-poppins text-14-600 product-card_add_to_card">
                        Add to Cart 
                    </button>
                </div>
        `

                maincont.append(product_card)
            }
        });
    }

    let arr = []
    let index = 1
    let headings = document.querySelectorAll(".content .right_side h2, .content .right_side h3, .content .right_side h4, .content .right_side h5, .content .right_side h6");
    headings.forEach(element => {
        let text = element.innerText
        let id = text.split(" ").join("-")
        let a = document.createElement("a")
        a.className = "font-inter"
        element.id = id
        a.href = "#" + id
        let maxLength = 30
        if (text.length > maxLength) {
            a.innerHTML = text.substring(0, maxLength) + "..."
        } else {
            a.innerHTML = text
        }
        document.querySelector(".left_side").append(a)
        arr.push({ index, a })
        index++
    })




}