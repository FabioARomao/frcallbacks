import axios from "axios";
const main = () => {
    const baseURL = "http://localhost:3000"
    const api = axios.create({ baseURL })

    api.get("/posts").then(res=> {
        //console.log(res)
        console.log(res.data)
    }).catch(error => {
        console.error(error)
    })
}

main()