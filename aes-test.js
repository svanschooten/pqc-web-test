function decryptAES() {
    let cipher = CryptoJS.enc.Hex.parse(document.getElementById("aes_cipher").value);
    let key = CryptoJS.enc.Hex.parse(document.getElementById("aes_key").value);
    let iv = CryptoJS.enc.Hex.parse(document.getElementById("aes_iv").value);
    document.getElementById("aes_result").innerText = CryptoJS.AES.decrypt({
            ciphertext: cipher
        }, key,
        {
            iv: iv
        }).toString(CryptoJS.enc.Utf8);
}