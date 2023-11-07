import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

const Index = () => {
  const media = useLoaderData();
  // For each post in the array render a Post component
  return (
    <>
      <div className="form-container" style={{ textAlign: "center" }}>
        <h2>Create Media</h2>
        <Form action="/create" method="post">
          <input 
            type="text" 
            name="title" 
            placeholder="Write the title here" 
            className="form-field" 
          />
          <input 
            type="date" 
            name="release_date" 
            placeholder="Select the release date" 
            className="form-field" 
          />
          <input 
            type="url" 
            name="image_link" 
            placeholder="Paste the image link here" 
            className="form-field" 
          />
          <input 
            type="text" 
            name="priority" 
            placeholder="Set the priority here" 
            className="form-field" 
          />
          <input 
            type="text" 
            name="tag" 
            placeholder="Write the tag here" 
            className="form-field" 
          />
          <button type="submit" className="submit-btn">Create</button>
        </Form>
      </div>
      <div className="cards-container">
        {media.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default Index;
