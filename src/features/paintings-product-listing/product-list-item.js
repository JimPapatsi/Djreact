import React from "react";
import ReactImageMagnify from "react-image-magnify";

export default function DrawingListItem(props) {
  return (
    <div className="product-list-item">
      <h3>{props.painting.name}</h3>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "painting",
            isFluidWidth: true,
            src: `photos/paintings/${props.painting.image}`,
            width: 100
          },
          imageStyle: {
            zIndex: 1
          },
          largeImage: {
            src: [`photos/paintings/${props.painting.image}`],
            width: 1000,
            height: 1200
          },
          enlargedImageContainerStyle: {
            zIndex: 2
          },
          enlargedImageContainerDimensions: {
            width: "200%",
            height: "200%"
          }
        }}
      />
      {/* <img
        height={100}
        width={100}
        alt={props.painting.name}
        src={`photos/paintings/${props.painting.image}`}
      /> */}
      <div>{props.painting.description}</div>
      <div>${props.painting.price}</div>
      <button>Add to Cart</button>
    </div>
  );
}
