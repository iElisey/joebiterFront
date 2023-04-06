import http from "../util/update";

const URL = "/message";

class MessageService {

    getAll(page, size) {
        return http.get(URL, {
            page: page,
            size: size
        });
    }

    getById(id) {
        return http.get(`${URL}/${id}`)
    }

    create(message) {
        return http.post(URL, message);
    }

    delete(id) {
        return http.delete(`${URL}/${id}`)
    }

    findByQuery(query, page, size) {
        console.log(query)
        return http.get(`${URL}/find`, {
            query: query,
            page: page,
            size: size
        });
    }
}

export default new MessageService();