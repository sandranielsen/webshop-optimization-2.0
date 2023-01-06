import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const ImageGallery = ({ media }) => {
      const image = getImage(media.preview.image.gatsbyImageData);


    return (
      <div>
        {/* <img
          className="object-cover"
          src={media.preview.image.src}
          alt="{media.altText}"
          width={150}
          height={150}
          loading="lazy"
        /> */}
        <GatsbyImage
          image={image}
          layout="constrained"
          className="object-cover"
          width={150}
          height={150}
          alt={media.altText}
          loading="lazy"
        />
      </div>
    );
};

export default ImageGallery