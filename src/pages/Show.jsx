import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.title}</h1>
      {/* <h2>{post.release_date}</h2>
      <h2>{post.image_link}</h2>
      <h2>{post.priority}</h2>
      <h2>{post.tag}</h2> */}
      <div style={{ textAlign: "center" }}>
        <h2>Update Media</h2>
        <Form action={`/update/${post.id}`} method="put">
          <input
            type="text"
            name="title"
            placeholder="write title here"
            defaultValue={post.title}
          />
          <input
            type="date"
            name="release_date"
            placeholder="write the release date here"
            defaultValue={post.release_date}
          />
          <input
            type="text"
            name="image_link"
            placeholder="Paste the image link here"
            defaultValue={post.image_link}
          />
          <input
            type="text"
            name="priority"
            placeholder="write the priority here"
            defaultValue={post.priority}
          />
          <input
            type="text"
            name="tag"
            placeholder="write the tag here"
            defaultValue={post.tag}
          />
          <button className="Update-bttn">Update Media</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button className="Update-bttn">Delete Media</button>
        </Form>
      </div>
      <Link to="/">
        <button className="Update-bttn">Go Back</button>
      </Link>
    </div>
  );
};

export default Show;