 window.onload = function () {
 	document.getElementById('fetchCssBtn').onclick = function(){
 		chrome.devtools.inspectedWindow.eval("var a = $0; console.log(a.style);", function (result, isException) {
        });
 	}
 }