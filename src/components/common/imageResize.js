import React from "react";
import Resizer from "react-image-file-resizer";

const ImageResize = (props) => {
  const { imageToResize, onImageResized, resizeAspect, resizeQuality } = props;

  const [imageToResizeUri, setImageToResizeUri] = useState();
  const [imageToResizeWidth, setImageToResizeWidth] = useState();
  const [imageToResizeHeight, setImageToResizeHeight] = useState();

  useEffect(() => {
    if (imageToResize) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setImageToResizeUri(reader.result);
      });

      reader.readAsDataURL(imageToResize);
    }
  }, [imageToResize]);

  useEffect(() => {
    if (imageToResize && imageToResizeWidth && imageToResizeHeight) {
      //* resized by50%
      Resizer.imageFileResizer(
        imageToResize,
        imageToResizeWidth * resizeAspect,
        imageToResizeWidth * resizeAspect,
        "JPEG",
        resizeQuality,
        0,
        (uri) => {
          onImageResized(uri);
        },
        "base64"
      );
    }
  }, [
    imageToResize,
    imageToResizeWidth,
    imageToResizeHeight,
    onImageResized,
    resizeAspect,
    resizeQuality,
  ]);

  return (
    <img
      {...props}
      src={imageToResizeUri}
      onLoad={(e) => {
        const img = e.target;
        setImageToResizeWidth(img.width);
        setImageToResizeHeight(img.height);
      }}
      crossorigin="anonymous" // to avoid CORS-related problems
    />
  );
};

//* resized by50%
ImageResize.defaultProps = {
  onImageResized: () => {},
  resizeAspect: 0.5,
  resizeQuality: 100,
};

export default ImageResize;

// Resizer.imageFileResizer(
//   file, // Is the file of the image which will resized.
//   maxWidth, // Is the maxWidth of the resized new image.
//   maxHeight, // Is the maxHeight of the resized new image.
//   compressFormat, // Is the compressFormat of the resized new image.
//   quality, // Is the quality of the resized new image.
//   rotation, // Is the degree of clockwise rotation to apply to uploaded image.
//   responseUriFunc, // Is the callBack function of the resized new image URI.
//   outputType, // Is the output type of the resized new image.
//   minWidth, // Is the minWidth of the resized new image.
//   minHeight // Is the minHeight of the resized new image.
// );
