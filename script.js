function ranNum() {
    return Math.floor(Math.random()*256);
}
function ranColor() {
    return ` rgb(${ranNum()},${ranNum()},${ranNum()})`;
}
function changeColor(){
  document.body.style.background=ranColor();
}