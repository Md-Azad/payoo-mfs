document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  const phoneNumber = document.getElementById("phoneNumber").value;
  const pinNumber = document.getElementById("pinNumber").value;
  console.log(phoneNumber, pinNumber);
  if (phoneNumber === "5" && pinNumber === "1234") {
    window.location.href = "./home.html";
  } else {
    alert("phone number or pin is incorrect");
  }
});
