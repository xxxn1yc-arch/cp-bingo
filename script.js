const upload = document.getElementById("upload");
const imageArea = document.getElementById("image-area");

upload.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const img = document.createElement("img");

    img.src = URL.createObjectURL(file);

    imageArea.appendChild(img);
  }
});

document.getElementById("saveBtn").addEventListener("click", () => {
  alert("스크린샷으로 저장해주세요!");
});
