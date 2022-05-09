function createTemplateForTopPost(hits) {
    return `
     <section class="blog">
        <div class="myContainer">
            <div class="row">
                <div class="col-12">
                    <h3 class="text-uppercase">popular</h3>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-md-5 col-sm-12">
                    <h2>${hits[0].views}</h2>
                    <p class="blog_description">${hits[0].tags}</p>

                    <div class="row justify-content-between align-items-center">
                        
                        <div class="col-sm-6 mb-3">
                            <p class="author">${hits[0].user}</p>
                            <p class="date">${hits[0].likes} likes and ${hits[0].comments} comments </p>

                        </div>

                        <div class="col-sm-6 mb-3">
                            <img src="./assets/img/Vector.png" class="cursor" onclick="saveOrDeletePost(0, ${hits[0].id}, true)"/>
                            <img src="./assets/img/Vector-4.png" />
                        </div>

                    </div>
                </div>

                <div class="col-md-7 col-sm-12 d-flex align-items-center">
                    <img src="${hits[0].webformatURL}" class="img-fluid" onclick="createModalTemplate(0, true)"/>
                </div>
            </div>
            <div class="row">
            ${createSmallTemplatesPost(hits, "col-md-4",0,1)}
            </div>

             <div class="row mt-5 mb-4" id="viewPosts">
                <div class="col-12 d-flex justify-content-end">
                    <h5 onclick="getAnotherTopPosts()">See All Popular Article</h5>
                </div>

                <hr>
            </div>
            

        </div>
    </section>

        `
}

function createSmallTemplatesPost(data, className, index = 0, startWith) {
    let templatePosts = []

    for(let i = startWith; i < data.length; i++) {
        if(i > 4) {
            templatePosts.push(createSmallTemplatePost(data[i], "col-md-2", index + i))
            continue
        }
        templatePosts.push(createSmallTemplatePost(data[i], className, index + i))
    }

    return templatePosts.join("")
}

function createSmallTemplatePost(data, className, index) {
    return `
    <div class="${className} col-sm-12 mb-3" id="pageC">
        <div class="containerImg">
            <img src="${data.webformatURL}" class="img-fluid" onclick="createModalTemplate(${index}, true)"/>
        </div>

        <h3>${data.views}</h3>
        <p>${data.tags}</p>

        <div class="row justify-content-between align-items-center">

            <div class="col-sm-8 mb-2">
                <p class="author">${data.user}</p>
                <p class="date">${data.likes} likes and ${data.comments} comments</p>
            </div>

            <div class="col-sm-4 blog-footer_img">
                <img src="./assets/img/Vector.png" class="cursor" onclick="saveOrDeletePost(${index}, ${data.id}, true)" />
                <img src="./assets/img/Vector-4.png" />
            </div>

        </div>

    </div>
    `
}





