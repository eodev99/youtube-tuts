let html = document.documentElement;
let slider = document.getElementById("fontSlider");
let output = document.getElementById("sliderOutput");

output.innerHTML = addPx(slider.value);

slider.oninput = function () {
  output.innerHTML = addPx(this.value);
  html.style.fontSize = addPx(this.value);
};

function addPx(val) {
  return val + "px";
}
