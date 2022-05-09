function searchPosts(event) {
    if (event.keyCode === 13) {
        favouritePageIsOpen = false
        contentPage.innerHTML = ""

        getTopPosts(event.target.value)
        keyword = event.target.value
        event.target.value = ""
    }
}

function getPreviousPosts() {
    if(countPage === 1) return
    let oldPosts = latestPosts[keyword].slice(countPage * 5 - 10, countPage * 5 - 5)
    $latestPosts.innerHTML = createTemplatesForLatestPosts(oldPosts, false)
    countPage--
}

function saveOrDeletePost(id, isTop = false,e) {
    let candidatePost = favouritePosts.find(p => p.id === id)

    candidatePost 
    ? favouritePosts = favouritePosts.filter(p => p.id !== id) 
    : favouritePosts.push(findPost(id, isTop))

    if(candidatePost && favouritePageIsOpen) createTemplatesFavouritePosts()
    localStorage.setItem("favouritePosts", JSON.stringify(favouritePosts))
}


function findPost(id, isTop) {
    let post = null

    for(let key in isTop ? topPosts : latestPosts) {
        post = isTop ? topPosts[key].find(p => p.id === id) : latestPosts[key].find(p => p.id === id)
        if(post) break
    }

    return post
}

function changeSlider(id, n, isTop) {
    let index = isTop ? getIndex(topPosts[keyword], id, n) : getIndex(latestPosts[keyword], id, n)
    let data = isTop ? topPosts[keyword][index] : latestPosts[keyword][index]

    createModalTemplate(id, isTop, data )
}

function getIndex(category, id, n) {
    let postLength = category.length
    let index = category.findIndex(x => x.id === id) + n;
    return index = n === -1 ? index < 0 ? postLength - 1 : index : index > postLength - 1 ? 0 : index
}

function closeModal() {
    modal.style.display = "none"
}