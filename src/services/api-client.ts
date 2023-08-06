import axios from "axios";
 
export default axios.create({
 baseURL: 'https://api.rawg.io/api' ,
 params: {
    key: '739f4f34cde7459b98b157fcfdf1d63c'
 }   
})