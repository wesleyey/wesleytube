import axious from "axios";

const addCommentForm = document.getElementById("jsAddComment");

const sendComment = async comment => {
  //console.log(comment);
  const videoId = window.location.href.split("/video/")[1];
  const response = await axious({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    //console.log(response);
    window.location.reload();
  }
};

const handleSubmit = e => {
  e.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
