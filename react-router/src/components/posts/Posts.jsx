import { useLoaderData } from "react-router-dom";
import "../users/Users.css";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
