// import React, { useState, useEffect } from 'react';
// import Post from './Post'; // Adjust the path according to your project structure

// const PostsContainer = () => {
//     const [posts, setPosts] = useState([]);
  
//     const handleDragStart = (e, post) => {
//       e.dataTransfer.setData("post_id", post.id); // You may use JSON.stringify(post) if needed
//     };
  
//     const handleDrop = (e, targetPost) => {
//       e.preventDefault();
//       const postId = e.dataTransfer.getData("post_id");
//       setPosts((prevPosts) => {
//         const draggedPost = prevPosts.find(post => post.id.toString() === postId);
//         const filteredPosts = prevPosts.filter(post => post.id.toString() !== postId);
//         const targetIndex = filteredPosts.indexOf(targetPost);
  
//         // Place the dragged post before the target post in the array
//         filteredPosts.splice(targetIndex, 0, draggedPost);
//         return [...filteredPosts];
//       });
//     };
  
//     // useEffect to fetch posts...
  
//     return (
//       <div className="cards-container">
//         {posts.map((post) => (
//           <Post
//             key={post.id}
//             post={post}
//             onDragStart={handleDragStart}
//             onDragOver={(e) => e.preventDefault()} // This is necessary to allow dropping
//             onDrop={handleDrop}
//           />
//         ))}
//       </div>
//     );
//   };
  

// export default PostsContainer;