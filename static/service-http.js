import axios from 'axios'
import config from 'config/dev.env'
let http = axios.create({
    timeout: 20000,
    baseURL: config


})
