import UserService from '../service/user.service';

export const profile = {
    namespaced: true,
    state: {profile: null},
    actions: {
        getProfile({commit}, userId) {
            UserService.get(userId).then((response) => {
                commit('setProfile', response.data);
            })
        },
        changeSubscribe({commit}, userId) {
            UserService.changeSubscribe(userId).then((response) => {
                commit('changeSubscribe', response.data);
            })
        },
    },
    mutations: {
        setProfile(state, profile) {
            state.profile = profile;
        },
        changeSubscribe(state, subscribers) {
            console.log(subscribers)
            state.profile.subscribers = subscribers;
        },
    }
};