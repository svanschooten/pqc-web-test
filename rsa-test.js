function encryptRSA() {
    let pubkey = document.getElementById("pubkey_rsa").value;
    let plaintext = document.getElementById("plaintext_rsa").value;

    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(pubkey);
    document.getElementById("rsa_result").value = encrypt.encrypt(plaintext);
}