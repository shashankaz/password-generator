function generatePassword() {
  const passwordBox = document.getElementById("password");
  const length = 12;
  const allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=~[]{}|<>?/";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
  copyToClipboard(passwordBox);
}

function copyToClipboard(element) {
  element.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}
