// cream template pentru latestPost
function createTemplatesForLatestPosts(data, isFirst = true) {
    let template = []

    for(let i = 0; i < data.length; i++) template.push(createtemplateForLatestPost(data[i]))
    return isFirst ? createTemplateForFirstRender(template) : template.join("")
}

function createTemplateForFirstRender(template) {
     return `
        <section class="article">
            <div class="myContainer">
                <div class="row">
                    <div class="col-12">
                        <h3 class="text-uppercase idc-article">All article</h3>
                    </div>
                </div>
                <div id="latestPosts">
                ${template.join("")}
                </div>
            </div>
        </section>

        <footer class="website-footer">
            <div class="myContainer">
                <div class="footer_inner d-flex justify-content-between">
                    <div class="newPost text-capitalize d-flex align-items-center position-relative" onclick="getPreviousPosts()">
                        <span>new post</span>
                    </div>
                    <div class="oldPost text-capitalize d-flex align-items-center position-relative" onclick="getNewLatestPosts()">
                        <span>old post</span>
                    </div>
                </div>
            </div>
        </footer>
    `
}

function createtemplateForLatestPost(data) {
    return `
    <div class="row idc-article-margin">
        <div class="col-md-4 col-sm-12 idc-article-width d-flex align-items-center mb-2">
            <img src="${data.webformatURL}" class="img-fluid" onclick="createModalTemplate(${data.id}, false)" />
        </div>
        <div class="col-md-8 col-sm-12">
            
            <h2>${data.views}</h2>
            <p>${data.tags}</p>
            
            <div class="row justify-content-between align-items-center">
                <div class="col-sm-6 mb-3">
                    <p class="author">${data.user}</p>
                    <p class="date">${data.likes} likes and ${data.comments} comments</p>
                </div>
            
                <div class="col-sm-6 idc-article-icons">
                    <img src="./assets/img/Vector.png" class="cursor" onclick="saveOrDeletePost(${data.id})" />
                    <img src="./assets/img/Vector-4.png" />
                </div>
            
                </div>
            </div>
        </div>
    `
}
