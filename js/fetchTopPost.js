function getTopPosts(value) {
    if(topPosts[value]) {
        contentPage.innerHTML += createTemplateForTopPost(topPosts[value].slice(0,4))
         getLatestPost(value)
        return
    }

   fetch(`https://pixabay.com/api/?key=${key}&q=${value}&image_type=photo&per_page=4`)
    .then(res => res.json())
    .then( data => { 

        if(data.hits.length !== 0) {
            topPosts[value] = [...data.hits]
            contentPage.innerHTML += createTemplateForTopPost(data.hits)
            getLatestPost(value)
        } else {
             contentPage.innerHTML += "<div class='container'<h1>Nu avem postari de genul</h1></div>"
        }
        
    } )

    return true
}

function getAnotherTopPosts() {
    const element = document.querySelector("#viewPosts")
    let startIndex = null

    if(topPosts[keyword].length < 4) {
        element.innerHTML = `
            <div class="row">
                Nu mai avem postari de genul
            </div>
        `
        return
    }

    if(topPosts[keyword].length > 4) {
        let data = topPosts[keyword].slice(4,topPosts[keyword].length)

        element.innerHTML = `
            <div class="row">
                ${createSmallTemplatesPost(data, "col-md-3", data.length, 0)}
            </div>
        `
        return
    }

    fetch(`https://pixabay.com/api/?key=${key}&q=${keyword}&image_type=photo&page=2&per_page=17`)
        .then(res => res.json())
        .then( data => {
            startIndex = topPosts[keyword].length
            topPosts[keyword] = [...topPosts[keyword], ...data.hits]

            element.innerHTML = `
                <div class="row">
                ${createSmallTemplatesPost(data.hits, "col-md-3", startIndex, 0)}
                </div>
            `
        }) 
}
