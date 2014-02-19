// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  chrome.devtools.panels.create("My Panel",
    "MyPanelIcon.png",
    "panel.html",
    function(panel) {
        // code invoked on panel creation
        console.log('ere');
    });
});



