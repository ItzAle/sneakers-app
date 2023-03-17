import axios from 'axios'

const url = 'http://localhost:8080/sneakers'

const SneakersServices = {
    getAllSneakers() {
        return axios.get(url)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },

    getSneakerById(id){
        return axios.get(url + `/${id}` )
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    },

    addSneaker(){
        return axios.post(url)
        .then((res)=> res.data)
        .catch((err)=>console.log(err))
    },

    deleteSneaker(id){
        return axios.delete(url + `/${id}`)
        .then((res)=> res.data)
        .catch((err)=>console.log(err))
    }
}

export default SneakersServices
