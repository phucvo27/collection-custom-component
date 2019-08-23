import React from 'react';
import Comment from '../Comment/comment.component'
import './post.style.scss'
import avatar from './avatar.jpg'
import image from './image-4.jpg'
class Post extends React.Component {
    render(){
        return (
            <div className='post'>
                <div className="post__header">
                    <div className="post__header--author">
                        <img src={avatar} alt="Avatar of user"/>
                        <div className="post__header--author--name">
                            <h3>Bushjdo</h3>
                            <p>19 hours ago</p>
                        </div>
                    </div>
                    <div className="post__header--setting">

                        <div className="tooltip">
                            <p>Edit</p>
                            <p>Delete</p>
                            <p>Change mode</p>
                        </div>
                    </div>
                </div>
                <div className="post__body">
                    <p className='post__body--text'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                    </p>
                    <img className='post__body--image' src={image} alt=""/>
                </div>
                <div className="post__infor">
                    <div className="post__infor--interact">
                        <span>Like</span>
                        <span>90</span>
                        <span>Comments</span>
                        <span>45</span>
                    </div>
                    <div className="post__infor--comments">
                        <Comment avatar={avatar}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Post;