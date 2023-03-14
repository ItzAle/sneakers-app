import axios from 'axios'

const url = 'http://localhost:8080/sneakers'

const SneakersServices = {
    getAllSneakers() {
        return axios.get(url)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },

    getSneakerById(uuid){
        return axios.get(url + `/${uuid}` )
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    }
}

export default SneakersServices
