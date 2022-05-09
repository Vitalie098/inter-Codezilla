function getLatestPost(value) {
    if(latestPosts[value]) {
        contentPage.innerHTML += createTemplatesForLatestPosts(latestPosts[value].slice(0,5))
        return
    }

    fetch(`https://pixabay.com/api/?key=${key}&q=${value}&image_type=photo&order=latest&page=${countPage}&per_page=5`)
        .then(res => res.json())
        .then( data => {
            latestPosts[value] = [...data.hits]
            contentPage.innerHTML += createTemplatesForLatestPosts(data.hits)
            $latestPosts = document.querySelector("#latestPosts")
        })

}

function getNewLatestPosts() {
    if(latestPosts[keyword].length < 5) return

    countPage++
    let startIndex = latestPosts[keyword].length
    let calc = countPage * 5 - 5

    console.log(calc)

    if(latestPosts[keyword].length > calc) {
        $latestPosts.innerHTML = createTemplatesForLatestPosts(latestPosts[keyword].slice(calc, calc + 5), false, calc)
        return
    }

    fetch(`https://pixabay.com/api/?key=${key}&q=${keyword}&image_type=photo&order=latest&page=${countPage}&per_page=5`)
        .then(res => res.json())
        .then( data => {
            latestPosts[keyword] = [...latestPosts[keyword], ...data.hits]
            $latestPosts.innerHTML = createTemplatesForLatestPosts(data.hits, false, startIndex)
        })
}