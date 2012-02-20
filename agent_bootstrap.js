/*if(chrome){
	chrome.extension.sendRequest(arguments, function(data){
		var version = data;
	}); 
	
	document.getElementById('foo').addEventListener('myCustomEvent', function() {
	  var eventData = document.getElementById('foo').innerText;
	  chrome.extension.sendRequest(eventData, function(data){
	  });
	});
}

else{
	version = background.version;
}*/

var script = document.createElement("script");
script.src = "chrome-extension://aebfcpoenhhomkhjjcdendafomlenjcc/agent.js";
document.body.appendChild(script);



