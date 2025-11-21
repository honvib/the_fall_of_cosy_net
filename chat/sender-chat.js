
function submitForm(event) {
  event.preventDefault();
  const message = document.getElementById("chatInput").value;
  console.log(role, "sent:", message);
}

