import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title } = post;
  const postStyle = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "10px",
    textAlign: "center",
  };
  return (
    <div style={postStyle}>
      <h2>Post Id: {id}</h2>
      <h3>{title}</h3>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
