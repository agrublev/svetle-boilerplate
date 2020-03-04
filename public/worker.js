"use strict";
importScripts("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js");
function zipFiles(a) {
    if (a && a.length) {
        for (var b, c = new JSZip(), d = 0; d < a.length; d++) (b = a[d]), c.file(b.name, b);
        return c.generateAsync({
            type: "arraybuffer",
            compression: "DEFLATE",
            compressionOptions: { level: 5 }
        });
    }
}
addEventListener("message", function(a) {
    zipFiles(a.data).then(function(a) {
        postMessage(a);
    });
});

addEventListener("sample", function(a) {
    console.info("Console --- sample");
    postMessage("sample");
});
