// check state for version
var state = {version:1};

var script = document.createElement("script");
script.src = "background.js"; // ?v=...

document.body.appendChild(script);