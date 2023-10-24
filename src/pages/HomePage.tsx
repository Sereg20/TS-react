import { useContext, useEffect, useState, FC } from 'react';
import AuthContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';
import PostsList from '../components/PostsList/PostsList';

import { IPost } from '../model';

const HomePage: FC = () => {
    const ctx = useContext(AuthContext);
    const navigate = useNavigate();
    const [posts, setPosts] = useState<IPost[]>([]);

    const isAuth = ctx.isAuth;

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        } 
    }, [isAuth]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                if (!response.ok) {
                    throw new Error();
                }

                const posts: IPost[] = await response.json();
                setPosts(posts);
            } catch (e) {
                console.log('Error!')
            }

            return posts;
        };

        fetchPosts();
    }, []);

    return (
        <div className='HomePage'>
            { isAuth 
                ? <PostsList posts={posts}/>
                : 'Not Authorized!'
            }
        </div>
    );
};

export default HomePage;