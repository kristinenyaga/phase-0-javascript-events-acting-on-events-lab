// Your code here
function moveDodgerLeft(){
   const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
function moveDodgerRight(){
    // dodger=document.getElementById('dodger')
    var left= dodger.style.left.replace("px", "")
    left= parseInt(left)
    if (left> 0) {
        dodger.style.left= `${left+ 1}px`;
      }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });