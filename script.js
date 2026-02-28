function renederAllScipts(){
    let scripts = [
        "/script/pages/mega_menu.js",
        "/script/pages/header.js",
        "/script/pages/shop.js",
        "/script/pages/product.js",
        "/script/pages/blog.js",
        "/script/pages/post.js",
        "/script/pages/pageup.js",
        "/script/pages/home.js",
        "/script/data/attributes.js",
        "/script/data/categories.js",
        "/script/data/posts.js",
        "/script/data/products.js",
    ]
    for (let i = 0; i < scripts.length; i++) {
        let script = document.createElement("script")
        script.src = scripts[i]
        document.body.append(script) 
    }
}

setTimeout(() => {
    
    renederAllScipts()
}, 1000);