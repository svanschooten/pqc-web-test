let mcEliece_keypair;

function generateKeysMcEliece() {
    mceliece.keyPair().then(function(keys) {
        mcEliece_keypair = keys;
        document.getElementById("pubkey_mceliece").innerHTML = binToB64(mcEliece_keypair.publicKey);
        document.getElementById("seckey_mceliece").innerHTML = binToB64(mcEliece_keypair.privateKey);
    });
}