let keypair;

function generateKeysNTRU() {
    ntru.keyPair().then(function(keys) {
        keypair = keys;
        document.getElementById("pubkey_ntru").innerHTML = byteToHexString(keypair.publicKey);
        document.getElementById("seckey_ntru").innerHTML = byteToHexString(keypair.privateKey);
    });
}

function decryptNTRU() {
    if (!keypair) return;
    let keyBytes = keypair.privateKey;
    let cipher = hexStringToByte(document.getElementById("ntru_cipher").value);
    ntru.decrypt(cipher, keyBytes).then(function(value) {
        document.getElementById("ntru_result").value = byteToHexString(value);
    }).catch(console.error);
}