document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  const phoneNumber = document.getElementById("phoneNumber").value;
  const pinNumber = document.getElementById("pinNumber").value;
  console.log(phoneNumber, pinNumber);
});
