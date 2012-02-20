var Background = function(){
	
	this.version = 2; // get version from server
	this.state = { version: this.version };
		
	this.tabs = {};
	
	this.get_version = function(){ return this.version;}
	this.add_tab = function(url){ this.tabs[url] = true;};
	this.remove_tab = function(url){ delete tabs[url];};	
	this.get_tabs = function(){ return this.tabs; }
};

// first time we load, create state
background = new Background();

background.tFormDetected  = function(request) {
  	var data = [];
	return {
       faAssets : data,
       faCallback : "cbFillForms"
    };
}

if(chrome){
	chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	  toReturn = null;
	  if(request.faTrigger == 'tFormDetected') {
	    toReturn = background[request.faTrigger](request);
	  }
	  if(toReturn) {
	    sendResponse(toReturn);
	  };
	});
}

