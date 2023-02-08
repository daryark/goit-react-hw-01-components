// export function generateRandomColor() {
//   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   console.log(`randomColor from `, randomColor);
//   if (randomColor === '#ffffff') {
//     console.log(`its white ${randomColor}`);
//   }
//   return randomColor;
// }

export function generateRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  if (randomColor === '#ffffff') {
    generateRandomColor();
  }

  return randomColor;
}
