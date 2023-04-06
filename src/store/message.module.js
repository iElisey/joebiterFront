import CommentService from "@/service/comment.service";
import MessageService from "@/service/message.service";

export const message = {
    namespaced: true,
    state: {message: null},
    actions: {
        setMessage({commit}, messageId) {
            MessageService.getById(messageId).then((response) => {
                commit('setMessage', response.data);
            })
        },
        addComment({commit}, comment) {
            console.log(comment)
            CommentService.create(comment.messageId, {text: comment.text}).then((response) => {
                commit('addComment', response.data);
            })
        },
        deleteComment({commit}, commentId) {
            CommentService.deleteCommentById(commentId);
            commit('deleteComment', commentId)
        },
    },
    mutations: {
        addComment(state, comment) {
            state.message.comments.unshift(comment)
        },
        deleteComment(state, commentId) {
            state.message.comments.splice(state.message.comments.findIndex(item => item.id === commentId), 1)
        },
        setMessage(state, message) {
            state.message = message;
        },
    }
};