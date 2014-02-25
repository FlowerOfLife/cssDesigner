 window.onload = function () {
 	// document.getElementById('fetchCssBtn').onclick = function(){
 	// 	chrome.devtools.inspectedWindow.eval("var a = $0; console.log(a);", function (result, isException) {
  //       });
 	// };
 	
 	chrome.devtools.panels.elements.onSelectionChanged.addListener(function(){
      var str = "var s = document.createElement('script');" +
      "s.src = 'index.js';" +
      "document.body.appendChild(s);";
      chrome.devtools.inspectedWindow.eval(str);
 	  
 	  	chrome.devtools.inspectedWindow.eval("var a = $0;  ztest.printhis(a);", function (result, isException) {
 	  //	  console.log(isException);
 	  //	  console.log(result);
        });
 	});
 }
 
