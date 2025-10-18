import axios from "axios";

const instance = axios.create({
    baseURL: "https://my-shop-4g48.onrender.com/",

});

export default instance;