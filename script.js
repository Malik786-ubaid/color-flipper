const colorInput = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetBtn");

colorInput.addEventListener("input", function () {
  const selectedColor = colorInput.value;
  document.body.style.backgroundColor = selectedColor;

  const colorText = document.getElementById("colorCode");
  if (colorText) {
    colorText.textContent = `Selected Color: ${selectedColor}`;
  }

  const previewBox = document.getElementById("previewBox");
  if (previewBox) {
    previewBox.style.backgroundColor = selectedColor;
  }
});

resetBtn.addEventListener("click", function () {
  const defaultColor = "#f3f3f3";
  document.body.style.backgroundColor = defaultColor;
  colorInput.value = defaultColor;

  const colorText = document.getElementById("colorCode");
  if (colorText) {
    colorText.textContent = `Selected Color: ${defaultColor}`;
  }

  const previewBox = document.getElementById("previewBox");
  if (previewBox) {
    previewBox.style.backgroundColor = defaultColor;
  }
});
