function showUserForm() {
  
 
  var template = HtmlService.createTemplateFromFile("userform")
  
  var html = template.evaluate();
  html.setTitle("Novartis Tracking Form")
  
  SpreadsheetApp.getUi().showSidebar(html);

}

function appendData(data) {

  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Escalations");
  
  ws.appendRow([new Date(),data.cs,"platform","",data.reason,data.username,data.message,data.link,data.icucaction]);
  
  
  
}


