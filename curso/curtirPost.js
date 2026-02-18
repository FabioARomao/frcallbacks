import axios from "axios";

const main = async () => {
    const baseURL = "http://localhost:3000"
    const api = axios.create({ baseURL })
    const idPost = 4

    const post = await api.get(`posts/${idPost}`)

    if(post.status >= 200 && post.status < 300){
        const { data } = post
        let newLikeNumber = data.likeNumber + 1
        console.log("numero anterior de likes: ", data.likeNumber)
        console.log("numero posterior de likes: ", newLikeNumber)

        const response = await api.patch(`/posts/${idPost}`, { likeNumber: newLikeNumber })
        console.log(response)
    }

   /* api.patch("/posts", data).then(res => {
        console.log(res)
    }).catch(error => {
        console.error(error)
    })*/
}

main()