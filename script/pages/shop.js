if (document.body.getAttribute("data-page-id") == "3") {
    let products = JSON.parse(localStorage.getItem("tech_store_products"))
    let products2 = []
    let productsNotPaged = products
    let per_page = 24
    let page = 1
    let viewType = "grid"
    let loadMoreBtn = document.querySelector("button.loadMore")
    let sortBy = "id-desc"
    function createPages() {
        // console.log(products2);

        if (document.querySelector(".loadMore") == null) {
            let loadMore = document.createElement("button")
            loadMore.className = "loadMore"
            loadMore.innerHTML = "load More"
            document.querySelector(".main-content").append(loadMore)
            loadMoreBtn = loadMore
            addeventtoloadmore()
        }

        products2 = []
        for (let i = 0; i < Math.ceil(productsNotPaged.length / per_page); i++) {
            let temp = []
            for (let l = i * per_page; l < i * per_page + per_page; l++) {
                if (productsNotPaged[l] != undefined) {
                    temp.push(productsNotPaged[l])
                }
            }
            products2.push(temp)
        }

        document.querySelector(".product-grid").innerHTML = ""

    }

    function addeventtoloadmore() {
        loadMoreBtn.addEventListener("click", () => {
            page++
            if (page == products2.length) {
                loadMoreBtn.remove()
            }
            loadProducts()
        })

    }

    function loadProducts() {
        products2[page - 1].forEach(product => {
            if (viewType == "grid") {
                document.querySelector(".product-grid").append(create_product_card_for_grid(product))
            } else {
                document.querySelector(".product-grid").append(create_product_card_for_list(product))
            }
        });
    }

    function grid_view() {


        document.querySelector(".grid_1").addEventListener("click", () => {
            if (viewType != "grid") {
                viewType = "grid"
                document.querySelector(".product-grid").innerHTML = ""
                document.querySelector(".product-grid").classList.remove("list_view")
                document.querySelector(".product-grid").classList.add("grid_view")
                loadProducts()
            }
        })
    }

    function list_view() {

        document.querySelector(".grid_2").addEventListener("click", () => {
            if (viewType != "list") {
                viewType = "list"
                document.querySelector(".product-grid").innerHTML = ""
                document.querySelector(".product-grid").classList.remove("grid_view")
                document.querySelector(".product-grid").classList.add("list_view")
                loadProducts()
            }
        })
    }

    // let filters = []
    // let categories_filters = []
    // let filltered_products_by_category = []
    // let form = document.querySelector(".category_list")

    // document.querySelector(".submit_cat").addEventListener("click", () => {
    //     filterProducts()
    // })

    // function filterProducts() {
    //     filltered_products_by_category = []
    //     categories_filters = []
    //     page = 1
    //     document.querySelector(".product-grid").innerHTML = ""
    //     filters = []
    //     let inputs = document.querySelectorAll(".category_list input[type='checkbox']:checked")

    //     inputs.forEach(input => {
    //         if (input.getAttribute("name").substring(0, input.getAttribute("name").length - 7) == "category") {
    //             categories_filters.push({
    //                 "filter": input.getAttribute("name").substring(0, input.getAttribute("name").length - 7),
    //                 "value": input.value
    //             })
    //         }
    //         else {
    //             filters.push({
    //                 "filter": input.getAttribute("name").substring(0, input.getAttribute("name").length - 7),
    //                 "value": input.value
    //             })
    //         }
    //     })
    //     if (categories_filters.length > 0) {
    //         categories_filters.forEach(cat => {
    //             productsNotPaged.forEach(product => {
    //                 if (product.category == cat.value) {
    //                     filltered_products_by_category.push(product)
    //                 }
    //             });
    //         })
    //     }
    //     else {
    //         search_for_filterProducts()
    //         filltered_products_by_category = productsNotPaged
    //     }
    //     if (filters.length > 0) {
    //         let temp = [];

    //         filltered_products_by_category = temp;
    //     }
    //     productsNotPaged = filltered_products_by_category
    //     products2 = filltered_products_by_category
    //     sortProducts()
    // }

    function create_product_card_for_grid(product) {
        let product_card = document.createElement("a")
        product_card.innerHTML = `
                <div class="product-card_img" ></div>
                <div class="product-card_info">
                <h3 class="font-poppins text-16-600 product_card-title"></h3>
                <p class="font-inter text-24-700 product_card-price"></p>
                <button class="back-red white font-poppins text-14-600 product-card_add_to_card">
                Add to Cart </i>
                </button>
                </div>
                `
        product_card.href = "/pages/product.html?product=" + product.id
        product_card.className = "product-card"
        product_card.querySelector(".product-card_img").style.backgroundImage = `url(${product.images[0]})`
        product_card.querySelector(".product_card-title").innerHTML = product.title
        product_card.querySelector(".product_card-price").innerHTML = "$ " + product.price
        return product_card;
    }

    function create_product_card_for_list(product) {

        let product_card = document.createElement("a")
        product_card.innerHTML = `
                <div class="product-card_img_list" ></div>
                <div class="product-card_info_list">
                <h3 class="font-poppins text-16-600 product_card-title"></h3>
                <p class="font-inter text-24-700 product_card-price"></p>
                <button class="back-red white font-poppins text-14-600 product-card_add_to_card">
                Add to Cart </i>
                </button>
                </div>
                `
        product_card.href = "/pages/product.html?product=" + product.id
        product_card.className = "product-card_list"
        product_card.querySelector(".product-card_img_list").style.backgroundImage = `url(${product.images[0]})`
        product_card.querySelector(".product_card-title").innerHTML = product.title
        product_card.querySelector(".product_card-price").innerHTML = "$ " + product.price
        return product_card;
    }

    function close_sidebar() {
        let close_button = document.querySelector(".close_button")
        let sidebar = document.querySelector(".sidebar")
        let product_card = document.querySelector(".product-grid.grid_view")
        let main_content = document.querySelector(".main-content")
        let close_button_svg = document.querySelector(".close_button_svg")
        let oc = true
        close_button.addEventListener("click", () => {
            if (oc == true) {
                sidebar.classList.add("sidebar_close")
                product_card.classList.add("grid_close")
                close_button_svg.style.transform = "rotate(180deg)";
                main_content.className = ".main-content_grid_close"
                oc = false
            }
            else {
                sidebar.classList.remove("sidebar_close")
                product_card.classList.remove("grid_close")
                close_button_svg.style.transform = "rotate(360deg)";
                main_content.className = ".main-content"
                oc = true
            }
        })
    }

    function sortProducts() {

        switch (sortBy) {
            case "price-desc":
                productsNotPaged.sort((a, b) => b.price - a.price)
                break;
            case "price-asc":
                productsNotPaged.sort((a, b) => a.price - b.price)
                break;
            case "id-desc":
                productsNotPaged.sort((a, b) => b.id - a.id)
                break;
            case "id-asc":
                productsNotPaged.sort((a, b) => a.id - b.id)
                break;
        }

        createPages()
        loadProducts()
    }

    // function attributes_dd(products) {
    //     let temp = []
    //     let attributes = JSON.parse(localStorage.getItem("tech_store_attributes"))
    //     for (let i = 0; i < products.length; i++) {
    //         for (let l = 0; l < products[i].attributes.length; l++) {
    //             let checkElement = products[i]["attributes"][l]
    //             if (!temp.some(item => item.id == checkElement.id && item.term == checkElement.term)) {
    //                 temp.push(checkElement)
    //             }
    //         }
    //     }
    //     // console.log(temp);




    //     let temp2 = []
    //     temp.forEach(item => {
    //         if (!temp2.some(item2 => item2 == item.id)) {

    //             temp2.push(item.id)
    //         }
    //     });
    //     // console.log(temp2);

    //     let temp3 = []
    //     let ids = []
    //     temp2.forEach(item => {
    //         let temp4 = {
    //             title: attributes.find(el => el.id == item).title,
    //             terms: [

    //             ]
    //         }
    //         temp.forEach(el => {
    //             for (let i = 0; i < temp3.length; i++) {

    //                 if (el.id == item) {
    //                     temp4.terms.push(el)
    //                 }
    //             }
    //         });
    //         temp3.push(temp4)



    //     });
    //     let filters_list = document.querySelector(".filters_list")
    //     temp3.forEach(temp => {
    //         let filters = document.createElement("p")
    //         let filters_terms = document.createElement("div")
    //         filters.innerHTML = temp.title
    //         filters_list.append(filters)
    //     });
    //     console.log(temp3);

    // }

    // function search_for_filterProducts() {
    //     search_products = []
    //     products.forEach(product => {
    //         if (product.title.toLowerCase().split(" ").join("").includes(search_input.value.toLowerCase().split(" ").join("")) == true) {
    //             search_products.push(product)
    //         }
    //     });
    //     productsNotPaged = search_products
    // }

    // function search() {
    //     let search_box = document.querySelector(".search-box")
    //     let search_input = document.querySelector(".search-box input")
    //     let search_products = []

    //     search_box.addEventListener("submit", (e) => {
    //         e.preventDefault()
    //         search_products = []
    //         products.forEach(product => {
    //             if (product.title.toLowerCase().split(" ").join("").includes(search_input.value.toLowerCase().split(" ").join("")) == true) {
    //                 search_products.push(product)
    //             }
    //         });
    //         productsNotPaged = search_products
    //         sortProducts()
    //     })

    // }
    document.querySelector("#sort_filter").addEventListener("change", () => {
        page = 1
        sortBy = document.querySelector("#sort_filter option:checked").value
        sortProducts()
        createPages()
        loadProducts()
    })
    sortProducts()
    // attributes_dd(products)
    // search()
    close_sidebar()
    grid_view()
    list_view()
    addeventtoloadmore()
}




