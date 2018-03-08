var i = 0;

function loadXHR(url) {

    return new Promise(function(resolve, reject) {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.onerror = function() {reject("Network error.")};
            xhr.onload = function() {
                if (xhr.status === 200) {resolve(xhr.response)}
                else {reject("Loading error:" + xhr.statusText)}
            };
            xhr.send();
        }
        catch(err) {reject(err.message)}
    });
}

loadXHR("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1024px-Cat03.jpg").then(function(blob) {
    postMessage(URL.createObjectURL(blob));
});

self.onmessage = (msg) => console.log(msg.data);