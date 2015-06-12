chrome.storage.sync.get(null,function(obj){
  if (!obj.replacements){
    obj.replacements = [];
    chrome.storage.sync.set(obj,function(){});
  }
  walk(document.body,obj.replacements);
});


function walk(node){

	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
      console.log(window.getComputedStyle(node));
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			break;
	}
};

