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
    $latestPosts.innerHTML = createTemplatesForLatestPosts(oldPosts, false, countPage * 5 - 10 )
    countPage--
}

function saveOrDeletePost(index, id, isTop = false) {
   let candidatePost = favouritePosts.find(p => p.id === id)

    candidatePost 
    ? favouritePosts = favouritePosts.filter(p => p.id !== id) 
    : favouritePosts.push(findPost(index, isTop))

    if(candidatePost && favouritePageIsOpen) createTemplatesFavouritePosts()
    localStorage.setItem("favouritePosts", JSON.stringify(favouritePosts))
}

function findPost(index, isTop) {
    return isTop ? topPosts[keyword][index] : latestPosts[keyword][index]
}

function changeSlider(index, n, isTop) {
   let category = isTop ? topPosts[keyword] : latestPosts[keyword]
   let postLength = category.length
   index = n === -1 ? index <= 0 ? postLength - 1 : index + n : index >= postLength - 1 ? 0 : index + n
   let post = findPost(index, isTop) 
   createModalTemplate(index, isTop, post )
}

function closeModal() {
    modal.style.display = "none"
}