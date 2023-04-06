import AuthService from '../service/auth.service';

const token = JSON.parse(localStorage.getItem('token'));
const initialState = token
    ? {status: {loggedIn: true}, token, user: null}
    : {status: {loggedIn: false}, token: null, user: null};

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({commit}, user) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess', user);
                    console.log(user)
                    return Promise.resolve(user);
                },
                error => {
                    commit('loginFailure', error);
                    return Promise.reject(error);
                }
            );
        },
        getAuthentication({commit}) {
            return AuthService.getAuth().then(
                response => {
                    if (response.data.success) {
                        commit('loginSuccess', response.data.user);
                        console.log(response.data.user)
                    } else {
                        commit('loginFailure');
                    }
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('loginFailure',error);
                    return Promise.reject(error);
                }
            );
        },
        logout({commit}) {
            AuthService.logout();
            commit('logout');
        },
        register({commit}, user) {
            return AuthService.register(user).then(
                response => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            );
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
            console.log(state.token)
        },
        loginFailure(state, error) {
            state.status.loggedIn = false;
            state.user = null;

            if (error.code !== "ERR_NETWORK") {
                localStorage.removeItem('token')
            }

        },
        logout(state) {
            state.token = "";
            state.status.loggedIn = false;
            state.user = null;
            console.log(state)
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
};