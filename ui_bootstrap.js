var version = chrome.extension.getBackgroundPage().background.version;

var script = document.createElement("script");
script.src = "ui.js"; // +version+".js";

document.body.appendChild(script);