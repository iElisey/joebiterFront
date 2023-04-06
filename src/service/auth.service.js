import http from "@/util/update";

const URL = '/auth'

class AuthService {
    login(user) {
        return http.post(`${URL}/signin`, {
            username: user.username,
            password: user.password
        })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('token', JSON.stringify(response.data.token));
                }
                return response.data;
            })
    }

    logout() {
        localStorage.removeItem('token');
    }

    register(user) {
        return http.post(`${URL}/signup`, {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }

    getAuth() {
        return http.get(URL);
    }
}

export default new AuthService();