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

let container = document.getElementById("main-container")
    
        function display(posts) {
            let html = ""

            posts.forEach(post => {
                html += `
                <section class="section-post">
                    <div class="container"> 
                        <div class="user-data">                       
                            <img class="user-avatar" src="${post.avatar}">
                            <div class="user-data-text">
                                <p class="user-name">${post.name}</p>
                                <p>${post.location}</p>
                            </div>
                        </div>
                        <img class="image-post" src="${post.post}">
                    </div>
                </section>
                
                <section>
                    <div class="container">
                        <div class="icons-container">
                            <img class="icons" src="images/icon-heart.png">
                            <img class="icons" src="images/icon-comment.png">
                            <img class="icons" src="images/icon-dm.png">
                        </div>
                        <div class="post-data">
                            <span>${post.likes} likes</span>
                            <p><span>${post.username}</span> ${post.comment}</p>
                        </div>
                    </div>
                </section>
                `
            })

            return container.innerHTML = html
        }

display(posts)
