if (document.body.getAttribute("data-page-id") == "6") {
    let url = window.location.search
    let params = new URLSearchParams(url)
    let posts = JSON.parse(localStorage.getItem("tech_store_posts")).reverse()
    let post_main = posts.find(el => el.id == params.get("post"))
    if (!post_main || !params.get("post")) {
        window.location.href = "/pages/blog.html"
    } else {
        let post_hero = document.querySelector("#post_hero")
        let content = document.querySelector(".content .right_side")
        let index = 1
        post_hero.style.backgroundImage = `url(${post_main.featuredImage})`
        post_hero.querySelector("h1").innerHTML = post_main.title
        content.innerHTML = post_main.content
        posts.forEach(post => {
            let clock_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg>`
            if (index <= 3 && post.id != post_main.id) {
                index++
                let maincont = document.querySelector(".posts_grid")
                let latest_article = document.createElement("a")
                latest_article.href = "/pages/post.html?post=" + post.id
                latest_article.className = "latest_article"
                latest_article.innerHTML = ` 
                <div class="latest_article_img" style="background-image: url(${post.featuredImage});"></div>
                <div class="latest_article_info">
        <div class="latest_article_title text-24-700 font-poppins">${post.title}</div>
        <div class="latest_article_excerpt text-20-500 font-poppins">${post.excerpt}</div>
        <div class="latest_article_content">
        <div class="latest_article_readingTime text-16-600 font-poppins">${post.postDate}</div>
        <div class="latest_article_postDate text-16-600 font-poppins">${clock_svg + post.readingTime + " to read"}</div>
        </div>
        <button class="latest_article_read_more">
        <p class="text-20-600 font-poppins">READ MORE </p><svg xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" fill="#000000" viewBox="0 0 256 256">
        <path
        d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h84.69L58.34,69.66A8,8,0,0,1,69.66,58.34L184,172.69V88a8,8,0,0,1,16,0Z">
        </path>
        </svg>
        </button>
        </div>
        `

                maincont.append(latest_article)
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