function createModalTemplate(id, isTop, data) {
    let post = data ? data : findPost(id, isTop)
    modal.innerHTML = getModalTemplate(post, isTop)
    modal.style.display = "flex"
}

function getModalTemplate(post, isTop) {
    return `
        <div class="modal-content">
            <span class="close cursor" onclick="closeModal()">&times;</span>
            <div class="row">
                <div class="col-md-9 p-0">
                    <img src="${post.largeImageURL}" class="img-fluid img-large" />
                </div
                <div>
                <div class="col-md-3 px-0 py-4 d-flex flex-column justify-content-between">
                    <div>
                        <h3>${post.views}</h3>
                        <p>${post.tags}</p>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-md-6 mb-2">
                            <p class="author">${post.user}</p>
                            <p class="date">${post.likes} likes and ${post.comments} comments</p>
                        </div>

                        <div class="col-md-6 blog-footer_img d-flex justify-content-center">
                            <img src="./assets/img/Vector.png" class="cursor" onclick="saveOrDeletePost(${post.id},${isTop})" />
                            <img src="./assets/img/Vector-4.png" class="ml-4" />
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>

        <a class="prev" onclick="changeSlider(${post.id}, -1, ${isTop})">&#10094;</a>
        <a class="next" onclick="changeSlider(${post.id}, 1, ${isTop})">&#10095;</a>
    `
}