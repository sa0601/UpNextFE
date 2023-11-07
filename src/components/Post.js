import { Link } from "react-router-dom";

// Destructure the post from props
const Post = ({ post }) => {
  return (
    <div className="card">
      <Link to={`/post/${post.id}`}>
        <h1 className="card-title">{post.title}</h1>
      </Link>
      <h2 className="card-date">{post.release_date}</h2>
      <div className="card-image-container">
        <img className="moviePoster" src={post.image_link} alt={`Cover for ${post.title}`} />     
      </div>
      <h2 className="card-priority">{post.priority}</h2>
      <h2 className="card-tag">{post.tag}</h2>
    </div>
  );
};

export default Post;
