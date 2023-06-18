
import React, { useState } from "react";
import "./card2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEllipsisV, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Bookmark } from "@mui/icons-material";

const Card = ({ name, imageSrc, content, onDelete, onEdit, onLike }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleEdit = () => {
    if (!editing) {
      setEditing(true);
    } else {
      onEdit(editedContent);
      setEditing(false);
    }
    setShowMenu(false);
  };

  const handleDelete = () => {
    onDelete();
    setShowMenu(false);
  };

  const handleInputChange = (e) => {
    setEditedContent(e.target.value);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div className="card2">
      <div className="card-header2">
        <h2 className="card-name2">{name}</h2>
        <div className="card-options2">
          <Bookmark
            className={`bookmark-icon ${bookmarked ? "active" : ""}`}
            onClick={handleBookmark}
          />
          <button className="menu-button" onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
          {showMenu && (
            <ul className="menu-list">
              <li onClick={handleEdit}>{editing ? "Save" : "Edit"}</li>
              <li onClick={handleDelete}>Delete</li>
            </ul>
          )}
        </div>
      </div>
      <div className="head-date">{formattedDate}</div>
      <img src={imageSrc} alt={name} className="card-image2" />
      <div className="card-content2">
        {editing ? (
          <textarea
            className="edit-textarea"
            value={editedContent}
            onChange={handleInputChange}
          />
        ) : (
          <p className="card-text2">{content}</p>
        )}
      </div>
      <div className="horizontal-line"></div>
      <div className="like">
        <div className="card-buttons2">
          <button className="like-button" onClick={handleLike}>
            <FontAwesomeIcon
              icon={faHeart}
              className={liked ? "heart-icon active" : "heart-icon"}
            />
          </button>
          <span className="like-count">{likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
