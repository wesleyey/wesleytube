import axious from "axios";

const deleteComment = document.getElementsByClassName("video__comments-delete-button");

const deleteCommentReq = async commentId => {
    const videoId = window.location.href.split("/video/")[1];
    const response = await axious({
        url: `/api/${videoId}/comment/delete`,
        method: "POST",
        data: {
            commentId
        }
    });
    if (response.status === 200) {
        //console.log(response);
        window.location.reload();
    }
};

const handleSubmit = e => {
    deleteCommentReq(e.target.id);
};

function init() {
    for (let i = 0; i < deleteComment.length; i++) {
        deleteComment[i].addEventListener("click", handleSubmit);
    }
}

if (deleteComment) {
    init();
}
