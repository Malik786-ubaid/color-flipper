const colorInput = document.getElementById("colorPicker");
const colorText = document.getElementById("colorCode");
const previewBox = document.getElementById("previewBox");
const resetBtn = document.getElementById("resetBtn");

colorInput.addEventListener("input", function () {
  const selectedColor = colorInput.value;
  document.body.style.backgroundColor = selectedColor;

  if (colorText) {
    colorText.textContent = `Selected Color: ${selectedColor}`;
  }

  if (previewBox) {
    previewBox.style.backgroundColor = selectedColor;
  }
});

resetBtn.addEventListener("click", function () {
  const defaultColor = "#f3f3f3";
  document.body.style.backgroundColor = defaultColor;
  colorInput.value = defaultColor;

  if (colorText) {
    colorText.textContent = `Selected Color: ${defaultColor}`;
  }

  if (previewBox) {
    previewBox.style.backgroundColor = "#ffffff";
  }
});
