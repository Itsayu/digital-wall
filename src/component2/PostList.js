import React, { useState } from "react";
import Card from "./card2";
import "./PostList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newPostData, setNewPostData] = useState({
    name: "",
    imageSrc: "",
    description: "",
  });

  const handleCreatePost = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPostData({ ...newPostData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setNewPostData({ ...newPostData, imageSrc: event.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleCreateNewPost = () => {
    const { name, imageSrc, description } = newPostData;

    if (name && imageSrc && description) {
      const newPost = {
        name,
        imageSrc,
        content: description,
      };
      setPosts([...posts, newPost]);
      setShowPopup(false);
      setNewPostData({
        name: "",
        imageSrc: "",
        description: "",
      });
    }
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const handleEditPost = (index) => {
    console.log("Editing is happening");
  };

  return (
    <div>
      <div className="sndp">
        <div>
          <h2>Your posts</h2>
        </div>
        <button className="create-post-btn" onClick={handleCreatePost}>
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
          Create new post
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="head2">
              <h3>Create New Post</h3>
              <button className="close-button" onClick={handlePopupClose}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <text className="text2">Write something for your post</text>
            <div className="textHeading">Subject</div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newPostData.name}
              onChange={handleInputChange}
            />

            <input type="file" name="imageSrc" onChange={handleImageUpload} />
            <div className="textHeading">What's on your mind?</div>
            <textarea
              name="description"
              placeholder="Description"
              value={newPostData.description}
              onChange={handleInputChange}
            ></textarea>
            <div className="submitButton">
              <button onClick={handleCreateNewPost}>Publish</button>
              {/* <button onClick={handlePopupClose}>Cancel</button> */}
            </div>
          </div>
        </div>
      )}
      <div className="postListSection">
        {posts.map((post, index) => (
          <Card
            key={index}
            name={post.name}
            imageSrc={post.imageSrc}
            content={post.content}
            onDelete={() => handleDeletePost(index)}
            onEdit={() => handleEditPost(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;

