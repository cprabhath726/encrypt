function encrypt() {
  var inputText = document.getElementById("inputText").value;
  var key = document.getElementById("key").value;
  
  if (!inputText || !key) {
    alert("Please enter both text and key.");
    return;
  }
  
  try {
    var encryptedText = CryptoJS.AES.encrypt(inputText, key).toString(); // Encrypt the input text
    document.getElementById("output").innerText = "Encrypted Text: " + encryptedText;
  } catch (error) {
    alert("Encryption failed. Please try again.");
  }
}

function decrypt() {
  var inputText = document.getElementById("inputText").value;
  var key = document.getElementById("key").value;
  
  if (!inputText || !key) {
    alert("Please enter both text and key.");
    return;
  }
  
  try {
    var decryptedBytes = CryptoJS.AES.decrypt(inputText, key); // Decrypt the input text
    var decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8); // Convert the decrypted bytes to UTF-8 string
    document.getElementById("output").innerText = "Decrypted Text: " + decryptedText;
  } catch (error) {
    alert("Decryption failed. Please make sure the key is correct.");
  }
}
