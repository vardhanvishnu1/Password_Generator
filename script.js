function generatePassword() {
  const length = document.getElementById('length').value;
  const includeUpper = document.getElementById('uppercase').checked;
  const includeLower = document.getElementById('lowercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=[]{}|:;,.<>?/";

  let allChars = "";
  if (includeUpper) allChars += upper;
  if (includeLower) allChars += lower;
  if (includeNumbers) allChars += numbers;
  if (includeSymbols) allChars += symbols;

  if (allChars === "") {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    password += randomChar;
  }

  document.getElementById('password').value = password;
}

function copyPassword() {
  const passwordField = document.getElementById('password');
  passwordField.select();
  document.execCommand('copy');
  alert("Password copied to clipboard!");
}
