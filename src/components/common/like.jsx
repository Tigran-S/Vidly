import React, { useState } from "react";

const Like = () => {
  const [clicked, setClicked] = useState(false);
  const handleLike = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <i
        className={clicked ? "fa fa-heart" : "fa fa-heart-o"}
        style={{ cursor: "pointer" }}
        onClick={handleLike}
      ></i>
    </div>
  );
};

export default Like;
