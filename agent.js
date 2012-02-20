var customEvent = document.createEvent('Event');
customEvent.initEvent('myCustomEvent', true, true);

var msg = {
	faTrigger : "tFormDetected",
	url : "foo.com"
}

send_message(JSON.stringify(msg));

function send_message(data) {
  hiddenDiv = document.getElementById('foo');
  hiddenDiv.innerText = data
  hiddenDiv.dispatchEvent(customEvent);
}

function read_message(){
	return document.getElementById("foo").innerText;
}

function cbFillForms(){
	alert("Go get the beer !");
}

document.getElementById('foo').addEventListener('myCustomEvent', function() {
    var msg = JSON.parse(read_message());
	eval(msg.faCallback + "()");
});

