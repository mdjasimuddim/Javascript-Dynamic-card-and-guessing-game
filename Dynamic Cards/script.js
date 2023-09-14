// const posts = document.querySelector('.posts');

// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res) => {
//     res.data.map((post) => {
//         const postElement = document.createElement("div");
//         postElement.classList.add("post");
//         postElement.innerHTML = `
//             <h4 class="post-title">${post.title}</h4>
//             <p class="post-body">${post.body}</p>
//         `;
//         posts.appendChild(postElement);
//     })
// })
// .catch(err => console.log(err))


const makeRequest = async(config) => {
    try{
        const res = await axios(config);
        return res.data;
    }catch(err) {
        throw Error('data is not fetched');
    }
}

const postsElement = document.querySelector('.posts');


const loadAllData = async() => {
    const posts = await makeRequest("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    })
}

loadAllData();