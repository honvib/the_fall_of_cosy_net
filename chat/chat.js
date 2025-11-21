const role = sessionStorage.getItem("sessionRole");
if (role == "sender") {
    console.log("sender");
    window.location.href = "sender-chat.html";
}
if (role == "receiver") {
    console.log("receiver");
    window.location.href = "receiver-chat.html";
}