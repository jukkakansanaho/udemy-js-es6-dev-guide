// Refactor to use enhanced object literal syntax:
// const canvasDimensions = function(width, initialHeight) {
//   const height = initialHeight * 9 /16;
//   return {
//     width: width,
//     height: height
//   };
// }

const canvasDimensions = function(width, initialHeight) {
  const height = (initialHeight * 9) / 16;
  return {
    width,
    height,
  };
};
