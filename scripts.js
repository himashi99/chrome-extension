//seeks permission from page to activate extension when there is an https or http page
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
   chrome.declarativeContent.onPageChanged.addRules([{
     conditions: [new chrome.declarativeContent.PageStateMatcher({
       pageUrl: {schemes: ['https', 'http']},
     })
     ],
         actions: [new chrome.declarativeContent.ShowPageAction()]
   }]);
 });

 

//when extension icon is clicked an event listener is added
chrome.pageAction.onClicked.addListener(function() {

  //looks for current window and active tab
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

     //runs the main.js script on the first active tab
     chrome.tabs.executeScript(
       tabs[0].id,
       {file: 'main.js'}
     );
   });
 });
