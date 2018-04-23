function decryptAES() {
    let cipher = CryptoJS.enc.Base64.parse(document.getElementById("aes_cipher").value);
    let key = CryptoJS.enc.Hex.parse(document.getElementById("aes_key").value);
    let iv = CryptoJS.enc.Hex.parse(document.getElementById("aes_iv").value);
    if (cipher == null || cipher === "" || key == null || key === "" || iv == null || iv === "") return;
    document.getElementById("aes_result").value = CryptoJS.AES.decrypt({
            ciphertext: cipher
        }, key,
        {
            iv: iv
        }).toString(CryptoJS.enc.Utf8);
}

function genkeyAES() {
    let pc = document.getElementById("aes_pw_genkey").value;
    let iv = document.getElementById("aes_iv_genkey").value;
    if (pc == null || pc === "" || iv == null || iv === "") return;
    document.getElementById("aes_iv").value = CryptoJS.enc.Base64.parse(iv).toString(CryptoJS.enc.Hex);
    document.getElementById("aes_key").value = CryptoJS.PBKDF2(pc, "STATIC SALT", { keySize: 256/32, hasher: CryptoJS.algo.SHA512, iterations: 65536 }).toString(CryptoJS.enc.Hex)
}