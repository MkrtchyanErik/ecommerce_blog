if (document.body.getAttribute("data-page-id") == "5") {
    let posts = JSON.parse(localStorage.getItem("tech_store_posts"))
    posts.reverse()
    let posts2 = []
    let loadMoreBtn = document.querySelector("button.load_more")
    function loadPosts(posts, posts2, page) {
        let clock_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg>`
        let maincont = document.querySelector(".posts_grid")
       
        posts2[page - 1].forEach((post) => {   
                     
            if (post.id == posts[0].id) {
                let last_post = document.createElement("a")
                last_post.href = "/pages/post.html?post=" + post.id
                last_post.className = "last_post"
                last_post.innerHTML = `
            <div class="last_post_image" style="background-image: url(${post.featuredImage});"></div>
            <div class="last_post_info">
            <div class="last_post_info_div">
            <p class="title font-inter text-24-700">${post.title}</p>
            <div class="last_post_info_div_div">
            <p class="excerpt font-inter text-20-500">${post.excerpt}</p>
            <div>
            <p class="readingTime font-inter text-14-400">${post.postDate}</p>
            <p class="postDate font-inter text-14-400">${clock_svg + post.readingTime + " min to read"}</p>
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
                </div>
                </div>
                `
                maincont.append(last_post)

            }
            else   {
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
        <div class="latest_article_postDate text-16-600 font-poppins">${clock_svg + post.readingTime + " min to read"}</div>
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
    function createPages(posts, posts2, loadMoreBtn) {
        let per_page = 13
        let page = 1
        if (loadMoreBtn == null) {
            alert()
            let loadMore = document.createElement("button")
            loadMore.className = "load_more"
            loadMore.innerHTML = "load More"
            document.querySelector(".posts_grid").append(loadMore)
            loadMoreBtn = loadMore
            addeventtoloadmore()
        }

        posts2 = []
        for (let i = 0; i < Math.ceil(posts.length / per_page); i++) {
            let temp = []
            for (let l = i * per_page; l < i * per_page + per_page; l++) {
                if (posts[l]) {
                    temp.push(posts[l])
                }
            }
            posts2.push(temp)
        }


        function addeventtoloadmore() {
            loadMoreBtn.addEventListener("click", () => {
                page++
                per_page = 12
                if (page == posts2.length) {
                    loadMoreBtn.remove()
                }
                loadPosts(posts, posts2, page)
            })

        }
        addeventtoloadmore()
        loadPosts(posts, posts2, page)
    }
    createPages(posts, posts2, loadMoreBtn)
}