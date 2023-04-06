import http from "@/util/update.js"

const URL = '/user'
class UserService{
    get(id) {
        return http.get(`${URL}/${id}`);
    }

    changeSubscribe(subscribeId) {
        return http.put(`${URL}/changeSubscribe/${subscribeId}`);
    }

    getImage() {
        return http.get('/image',{ responseType: "arraybuffer" });
    }
}

export default new UserService();