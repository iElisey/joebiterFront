import http from "@/util/update";

const URL = "/message"
class CommentService{
    create(messageId, comment) {
        console.log(messageId, comment)
        return http.post(`${URL}/${messageId}/comments`, comment);
    }

    getAll(messageId) {
        return http.get(`${URL}/${messageId}/comments`);
    }
    getCommentById(commentId) {
        return http.get(`${URL}/0/comments/${commentId}`)
    }
    deleteCommentById(commentId) {
        return http.delete(`${URL}/0/comments/${commentId}`)
    }
}

export default new CommentService();