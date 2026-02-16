import axios from "axios";
const main = () => {
    const baseURL = "http://localhost:3000"
    const api = axios.create({ baseURL })

    const data = {
        id: 3,
        content: "Terceiro post",
        createdAt: "2026-02-14",
        denounceNumber: 0,
        updatedAt: "2026-02-14",
        likeNumber: 0,
        author: {
            id: 1,
            username: "usuario2",
            photoUrl: "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_user_personalization&w=740&q=80"
        },
        comments: []
    }


    api.post("/posts", data).then(res => {
        console.log(res)
    }).catch(error => {
        console.error(error)
    })
}

main()