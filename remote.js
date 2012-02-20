var customEvent = document.createEvent('Event');
customEvent.initEvent('myCustomEvent', true, true);

var inputs = document.getElementsByTagName("input");
document.getElementsByTagName("input")[0].onChange = function(){
	send_message(data);
}

document.getElementById('foo').addEventListener('myCustomEvent', function() {
  var whatever = read_message();
  send_message("done");
});

function send_message(data) {
  hiddenDiv = document.getElementById('foo');
  hiddenDiv.innerText = data
  hiddenDiv.dispatchEvent(customEvent);
}

function read_message(){
	return document.getElementById("foo").innerText;
}



