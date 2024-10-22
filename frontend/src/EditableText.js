import React, { useState } from 'react';

function EditableText({ initialText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setText(event.target.textContent);
  };

  return (
    <span
      onDoubleClick={handleDoubleClick}
      onChange={handleChange}
      onBlur={handleBlur}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
    >
      {text}
    </span>
  );
}

export default EditableText;