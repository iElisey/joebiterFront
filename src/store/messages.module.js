import MessageService from '../service/message.service';

export const messages = {
    namespaced: true,
    state: {messages:null},
    actions: {
        getMessages({commit}) {
            MessageService.getAll().then((response) => {
                commit('setMessages', response.data.content);
            })
        },
        createMessage({commit}, message) {
            MessageService.create(message).then((response) => {
                commit('createMessage', response.data);
            })
        },
    },
    mutations: {
        setMessages(state, messages) {
            state.messages = messages;
        },
        createMessage(state, message) {
            state.messages.unshift(message);
        },
    }
};