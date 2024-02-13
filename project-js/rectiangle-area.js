function calculateRectangleArea() {
  // console.log("calculate rect area");
  // get  length of rectangle
  const lengthInput = document.getElementById("tectangle-length");
  const lengthText = lengthInput.value;
  const length = parseFloat(lengthText);
  console.log(length);
  // get width of rectangle
  const widthInput = document.getElementById("rectangle-width");
  // console.log(widthInput);
  const widthText = widthInput.value;
  const width = parseFloat(widthText);
  console.log(width);

  // calculate rectangle area
  const area = length * width;
  console.log("area of the rectangle", area);

  // display rectangle area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}
