import React from "react";

const Image = ({ source, width, height, alt, className }) => {
  return (
    <div>
      <img
        src={source}
        class={`img-responsive ${className}`}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};

export default Image;
