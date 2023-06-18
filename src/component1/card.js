
import React, { useState } from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Card({ title, color, onDelete, onEdit, onDoubleClick }) {

    const  navigate = useNavigate();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  

  const handleToggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onEdit(editedTitle);
  };

  const handleDelete = () => {
    onDelete(title);
  };

  const handleDoubleClick = () => {
    navigate('/second');
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <div className="card-container">
      <div onDoubleClick={handleDoubleClick}>
        <div className="card">
          <div className="color" style={{ backgroundColor: color }}></div>
          {isEditing ? (
            <input
              type="text"
              className="edit-input"
              value={editedTitle}
              onChange={handleTitleChange}
            />
          ) : (
            <div className="ctitle">{title}</div>
          )}
          <div className="options">
            <button className="options-button" onClick={handleToggleOptions}>
              <FontAwesomeIcon icon={faEllipsisV} />
            </button>
            {isOptionsOpen && (
              <ul className="options-list">
                {isEditing ? (
                  <>
                    <li onClick={handleSave}>Save</li>
                  </>
                ) : (
                  <li onClick={handleEdit}>Edit</li>
                )}
                <li onClick={handleDelete}>Delete</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
