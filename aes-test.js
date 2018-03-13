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

function genkeyAES() {
    let pc = document.getElementById("aes_pw_genkey").value;
    let iv = document.getElementById("aes_iv_genkey").value;
    document.getElementById("aes_iv").value = CryptoJS.enc.Utf8.parse(iv).toString(CryptoJS.enc.Hex);
    document.getElementById("aes_key").value = CryptoJS.PBKDF2(pc, iv, { keySize: 256/32, hasher: CryptoJS.algo.SHA512, iterations: 1000 }).toString(CryptoJS.enc.Hex)
}