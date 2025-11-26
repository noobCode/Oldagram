const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let thisName = document.getElementById("artist-name")
let thisUsername = document.getElementById("username")
let thisLocation = document.getElementById("post-location")
let thisAvatar = document.getElementById("artist-pfp")
let thisPost = document.getElementById("post")
let thisComment = document.getElementById("caption")
let thisLikes = document.getElementById("likes")

// create infinite scroll loop, count from 0 - 2 then reset, on each count swap the page content. combine scroll animations and simple JS functions.

let count = 0

function swap(posts, count) {

    thisName.innerHTML = posts[count].name
    thisUsername.innerHTML = posts[count].username + " "
    thisLocation.innerHTML = posts[count].location
    thisAvatar.style.backgroundImage = "url('" + posts[count].avatar + "')"
    thisLocation.innerHTML = posts[count].location
    thisPost.style.backgroundImage = "url('" + posts[count].post + "')"
    thisComment.innerHTML = posts[count].comment
    thisLikes.innerHTML = posts[count].likes + " likes"
}

document.addEventListener("click", function(){
    if (count<posts.length - 1) {
        count++
    } else {
        count = 0
    }

    swap(posts, count)

    console.log("START")
    console.log(thisName)
    console.log(posts[count])
    console.log(thisLikes)
    console.log("END")
})
