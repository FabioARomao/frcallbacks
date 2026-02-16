import axios from "axios";
const main = () => {
    const baseURL = "http://localhost:3000"
    const api = axios.create({ baseURL })
    const id = 1
    api.delete(`posts/${id}`).then(res=> {
        console.log(res)
    }).catch(error => {
        console.error(error)
    })
}

main()