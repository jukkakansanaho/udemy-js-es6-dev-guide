// Refactor to use default function arguments:
// function addOffset(style) {
//   if (!style) {
//     style = {};
//   }
//
//   style.offset = '10px';
//
//   return style;
// }

function addOffset(style = {}) {
  style.offset = '10px';

  return style;
}
