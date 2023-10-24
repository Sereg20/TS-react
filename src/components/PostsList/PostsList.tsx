import { FC } from 'react';
import { IPost } from '../../model';
import PostItem from '../PostItem/PostItem';


interface PostsListProps {
    posts: IPost[]
}

const PostsList: FC<PostsListProps> = ({posts}) => {

    return (
        <div>
            {posts.map(post => <PostItem post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsList;