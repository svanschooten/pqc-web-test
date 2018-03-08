
let w;

function startWorker() {
    if (typeof(Worker) !== "undefined") {
        if (typeof(w) === "undefined") {
            w = new Worker("demo_workers.js");
        }
        w.postMessage({a: "hoi"});
        w.onmessage = function (event) {
            document.getElementById("result").src = event.data;
        };
    } else {
        document.getElementById("message").innerHTML = "Sorry! No Web Worker support.";
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}