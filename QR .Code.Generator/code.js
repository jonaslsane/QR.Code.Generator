/*hallo. ich habe die ganze zeit versucht das problem zu verstehen aber ich komme nicht dahinter. Vielleicht können Sie mir dabei Helfen. Danke*/

const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");



generateBtn = addEventListener("click", ()=>{
  let qrValue = qrInput.value;
  if(!qrValue) return;
  generateBtn.innerText = "Qr Code wird generiert...";
  qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}';
  qrImg.addEventListener("load",() =>{
wrapper.classList.add("active");
generateBtn.innerText = "Qr Code wird generiert...";

});

});

qrInput.addEventListener("keyup", () =>{
  if(!qrInput.value){
    wrapper.classList.remove("active")
  }
});
