const colorInput = document.getElementById("colorPicker");

colorInput.addEventListener("input", function () {
  const selectedColor = colorInput.value;
  document.body.style.backgroundColor = selectedColor;

  // Update color code text
 const colorPicker = document.getElementById("colorPicker");

colorPicker.addEventListener("input", function () {
  document.body.style.backgroundColor = colorPicker.value;
});

  }

  // Update preview box color
  const previewBox = document.getElementById("previewBox");
  if (previewBox) {
    previewBox.style.backgroundColor = selectedColor;
  }
});
