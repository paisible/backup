// general messenger
var is_chrome = /chrome/.test(navigator.userAgent.toLowerCase());

var my_div = document.createElement("div");
my_div.id = "foo";
document.body.appendChild(my_div);

var __ = {};

__.background = function(msg){
	  var act = function(){
		if(this.faCallback) {
	        send_message(JSON.stringify(this)); 
	    }
	  };
	
	if(is_chrome){
		  chrome.extension.sendRequest(msg, function(response) {
		       act.call(response);
		  });
	  }
	
	else{
		var response = background[msg.faTrigger](msg);
		act.call(response);
	}
}

document.getElementById('foo').addEventListener('myCustomEvent', function() {
    var msg = JSON.parse(read_message());
	__.background(msg);

});

function send_message(data) {
  hiddenDiv = document.getElementById('foo');
  hiddenDiv.innerText = data
  hiddenDiv.dispatchEvent(customEvent);
}

function read_message(){
	return document.getElementById("foo").innerText;
}

var customEvent = document.createEvent('Event');
customEvent.initEvent('myCustomEvent', true, true);

