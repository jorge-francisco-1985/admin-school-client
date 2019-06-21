import axios from "axios";
const url = "http://localhost/admin-school-server/usuarios/get";



class UsuariosService {
    //Get Posts
    static getUsuarios() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data
                );
            } catch (error) {
                reject(error);
            }
        })
    }
    //Create Posts
    static insertPost(text) {
        return axios.post(url, {
            text
        })
    }
    // Delete Posts

    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default UsuariosService;