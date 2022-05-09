function createTemplatesFavouritePosts() {
    favouritePageIsOpen = true
    let template = []

    for(let i = 0; i < favouritePosts.length; i++) {
        template.push(createSmallTemplatePost(favouritePosts[i], "col-md-3"))
    }

    contentPage.innerHTML = `<div class="container"><div class="row"> ${template.join("")} </div></div>`
}

