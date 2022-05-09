const contentPage = document.querySelector("#content")
const key = "27115772-8cc07f9d72a6363c0d6bf400b"
let keyword = ""
let topPosts = {}
let latestPosts = {}
let $latestPosts = null
let favouritePageIsOpen = false
let countPage = 1   
const modal = document.querySelector("#modal-overlay")
let favouritePosts = localStorage.getItem("favouritePosts") 
    ? JSON.parse(localStorage.getItem("favouritePosts"))
    : []





