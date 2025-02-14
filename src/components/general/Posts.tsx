interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  subtitle?: string;
  imageUrl?: string;
}
interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }): React.JSX.Element => {
  const defaultImageUrl = 'https://dummyjson.com/image/300x300/333333/ffffff';
  const defaultSubtitle = 'Lorem Ipsum';
  return (
    <div className="article">
      {posts.map((post) => (
        <div className="posts" key={post.id} title={post.title.slice(0, 15)}>
          <img
            src={post.imageUrl || defaultImageUrl}
            alt={post.title}
            className="post-image"
          />
          <h4 className="post-subtitle">
            {(post.subtitle || defaultSubtitle).slice(0, 11)}
          </h4>
          <h3 className="post-title">{post.title.slice(0, 15)}</h3>
          <p className="post-body">{post.title.slice(0, 60)}</p>
        </div>
      ))}
    </div>
  );
};
export default Posts;
