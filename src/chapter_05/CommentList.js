import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:'유호연',
        comment: '안녕하세요'
    },
    {
        name:'유재석',
        comment: '재석교'
    },
]

export default function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                      <Comment name={comment.name} comment={comment.comment} />
                    );
                })
            }
        </div>
    )
}