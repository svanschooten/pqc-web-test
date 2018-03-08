let keypair;

function generateKeysNTRU() {
    ntru.keyPair().then(function(keys) {
        keypair = keys;
        document.getElementById("pubkey_ntru").innerHTML = byteArrayToWordArray(keypair.publicKey).toString(CryptoJS.enc.Base64);
        document.getElementById("seckey_ntru").innerHTML = byteArrayToWordArray(keypair.privateKey).toString(CryptoJS.enc.Base64);
    });
}

function decryptNTRU() {
    if (!keypair) return;
    let keyBytes = keypair.privateKey;
    let cipher = hex2bin(CryptoJS.enc.Hex.parse(document.getElementById("ntru_cipher").value));
    ntru.decrypt(cipher, keyBytes).then(function(value) {
        document.getElementById("ntru_result").innerText = value.toString();
    }).catch(console.error);
}