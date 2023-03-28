import axios from 'axios'

const url = 'http://localhost:8080/sneakers'

const SneakersServices = {
    getAllSneakers() {
        return axios.get(url)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },

    findAllHighLights() {
        return axios.get(url + `/highlights`)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },

    getAllSneakersCategories() {
        return axios.get(url + `/categories`)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },

    findSneakersByCategory(id){
        return axios.get(url + `/categories/${id}`)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },

    getSneakerById(id){
        return axios.get(url + `/${id}` )
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },

    addSneaker(data){
        return axios.post(url, data)
            .then((res)=> res.data)
            .catch((err)=>console.log(err))
    },

    editSneaker(id, changes){
        return axios.put(url + `/${id}`, changes)
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
