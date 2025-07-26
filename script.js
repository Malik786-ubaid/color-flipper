const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
  const defaultColor = "#ffffff";
  colorInput.value = defaultColor;
  document.body.style.backgroundColor = defaultColor;

  // Update color code text
  const colorText = document.getElementById("colorCode");
  if (colorText) {
    colorText.textContent = `Selected Color: ${defaultColor}`;
  }

  // Update preview box color
  const previewBox = document.getElementById("previewBox");
  if (previewBox) {
    previewBox.style.backgroundColor = defaultColor;
  }
});
