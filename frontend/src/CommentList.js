import React from "react";

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    switch (comment.status) {
      case "pending":
        content = "This comment is awaiting moderation.";
        break;
      case "approved":
        content = comment.content;
        break;
      case "rejected":
        content = "This comment has been rejected.";
        break;
      default:
        break;
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
