import React from 'react';
import './comment.style.scss';

const Comment = ({avatar})=>{
    return (
        <div className='comment'>
            <div className="comment__avatar">
                <img src={avatar} alt="Avatar of user"/>
            </div>
            <div className="comment__text">
                <div className="comment__text--name">
                    <h3>Spring Hy</h3>
                </div>
                <div className="comment__text--content">
                    <p>hahahaha... what are you talking about</p>
                </div>
            </div>
        </div>
    )
}

export default Comment;