import { FC } from 'react';
import { IPost } from '../../model';
import cl from './PostItem.module.css';


interface PostItemProps {
    post: IPost
}

const PostItem: FC<PostItemProps> = ({post}) => {

    return (
        <div className={cl.item}>
            <h4>{post.title}</h4>
            <span>{post.body}</span>
        </div>
    );
};

export default PostItem;