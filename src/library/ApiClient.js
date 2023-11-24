import axios from 'axios'

const URL = import.meta.env.VITE_BASE_URL;

const client = {
    async getCategoriesData() {
        try {
            return await axios.get(URL+'/api/categories?limit=4');
        } catch (error) {
            console.error(error)
        } 
    },
    async getItemsData() {
        try {
            return await axios.get(URL+'/api/products')
        } catch (error) {
            console.error(error)
        }   
    }
}


export default client;