let keypair_sidh;

function generateKeysSIDH() {
    sidh.keyPair().then(function(keys) {
        keypair_sidh = keys;
        document.getElementById("pubkey_sidh").innerHTML = byteToHexString(keypair_sidh.publicKey);
        document.getElementById("seckey_sidh").innerHTML = byteToHexString(keypair_sidh.privateKey);
    });
}

function sharedSecretSIDH() {
    if (!keypair_sidh) return;
    let otherPubKey = hexStringToByte(document.getElementById("pubkey_sidh_other").value);
    sidh.secret(otherPubKey, keypair_sidh.privateKey).then(function (value) {
        document.getElementById("sidh_result").value = byteToHexString(value);
    }).catch(console.error);
}