export const postAPI = {
    fetchPosts() {
        try {
            return fetch(`https://jsonplaceholder.typicode.com/posts?&_sort=id&_order=desc`)
                .then((response) => response.json())
                .then((posts) => posts)
        } catch (ex) {
            console.log(ex)
        }

    },

    fetchPostsPagin(currentPage) {
        try {
            return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_sort=id&_order=desc`)
                .then((response) => response.json())
                .then((posts) => posts)
        } catch (ex) {
            console.log(ex)
        }

    },
    fetchFreshPosts(limit = 3) {
        try {
            return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=id&_order=desc`)
                .then((response) => response.json())
                .then((posts) => posts)
        } catch (ex) {
            console.log(ex)
        }

    },
    fetchById(id) {
        try {
            if (!id) {
                throw new Error("id is broken")
            }

            return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((response) => response.json())
                .then((post) => post)
        } catch (ex) {
            console.log(ex)
        }

    }
}