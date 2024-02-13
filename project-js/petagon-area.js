function calculatePentagonArea() {
  const perimeter = getInputValueById("pentagon-perimeter");
  //   console.log(perimeter);
  const apothem = getInputValueById("pentagon-apothem");
  console.log(perimeter, apothem);
  const area = 0.5 * perimeter * apothem;
  setInnerTextById("pentagon-area", area);
}
function getInputValueById(inputFieId) {
  const inputField = document.getElementById(inputFieId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}
function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
