// SubApp 임시 이름, 변경예정

import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Posts from './Posts';
import Title from './Title';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  subtitle?: string;
  imageUrl?: string;
}

function SubApp() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(9);

  // text
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('./src/constants/posts.json');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change Page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Title title="" description="" />
      <div className="section">
        <Posts posts={currentPosts} />
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SubApp;
