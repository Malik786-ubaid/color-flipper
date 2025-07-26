const colorInput = document.getElementById("colorPicker");

colorInput.addEventListener("input", function () {
  const selectedColor = colorInput.value;
  document.body.style.backgroundColor = selectedColor;

  // Update color code text
  const colorText = document.getElementById("colorCode");
  if (colorText) {
    colorText.textContent = `Selected Color: ${selectedColor}`;
  }

  // Update preview box color
  const previewBox = document.getElementById("previewBox");
  if (previewBox) {
    previewBox.style.backgroundColor = selectedColor;
  }
});
