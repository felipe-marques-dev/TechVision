import axios from "axios";

export default class UserService {
    axios: any;
    constructor(){
        this.axios = axios.create({
            baseURL: 'http://127.0.0.1:8000'
        })
    }

    async login (dados: any){
        const {data} = await this.axios.post('/login/', dados);
        if (data){
            localStorage.setItem("email", data.user.email);
            localStorage.setItem("password", data.user.password);
            localStorage.setItem("token", data.user.token);
            return true;
        }

        return;
    }

    async usuarioAutenticado() {
        return localStorage.getItem("token") !== undefined ? true : false;
    }
}