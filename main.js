var width=document.documentElement.clientWidth;
var height=document.documentElement.clientHeight;
document.getElementsByClassName("menus")[0].style.height=height*.1+"px";
document.getElementsByClassName("footer")[0].style.height=height*.1+"px";
document.getElementsByClassName("home1")[0].style.height=height*.54+"px";
document.getElementsByClassName("home2")[0].style.height=height*.24+"px";
document.getElementsByClassName("home3")[0].style.height=height*.54+"px";
document.getElementsByClassName("home4")[0].style.height=height*.54+"px";
document.getElementsByClassName("home5")[0].style.height=height*.29+"px";
var showBLAInsert=function(){
  var fields=["name","phone","address","region","more"];
  for (let i = 0; i < fields.length; i++) {
    const element = fields[i];
    var input=document.createElement("input");
    input.setAttribute("placeholder",element);
    input.setAttribute("class","blainsertparticulars");
    input.setAttribute("style","width:90%;padding:1em;border-radius:1em;margin:0 auto;text-align:center;left:5%;");
    document.getElementsByClassName("home3")[0].appendChild(input);        
  }
  document.getElementsByClassName("blainsertparticulars")[4].setAttribute("onkeyup","insertBLAParticulars(event)");
};

var insertBLAParticulars=function(event){
  initClient();
  if(event.keyCode!=13)return;
    var params = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: '1Y-fvvwRysPS79bA9jhALWVbRMYEoo9Dc0lxpXWneF2Q',  // TODO: Update placeholder value.

    // The A1 notation of the values to retrieve.
    range: 'advocate!A1',  // TODO: Update placeholder value.

    // How the input data should be interpreted.
    valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.

    // How the input data should be inserted.
    insertDataOption: 'INSERT_ROWS',
  };

  var valueRangeBody = {
      "majorDimension":"ROWS",
      "range":"advocate!A1",
      "values":[
          [
              document.getElementsByClassName("blainsertparticulars")[0].value,
              document.getElementsByClassName("blainsertparticulars")[1].value,
              document.getElementsByClassName("blainsertparticulars")[2].value,
              document.getElementsByClassName("blainsertparticulars")[3].value,
              document.getElementsByClassName("blainsertparticulars")[4].value,
          ]
      ]
    // TODO: Add desired properties to the request body. All existing properties
    // will be replaced.
  };

  var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
  request.then(function(response) {
    // TODO: Change code below to process the `response` object:
    console.log(response.result);
  }, function(reason) {
    console.error('error: ' + reason.result.error.message);
  });
};


function inputData(event){
    if(event.keyCode!=13)return;
    var params = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: '1Y-fvvwRysPS79bA9jhALWVbRMYEoo9Dc0lxpXWneF2Q',  // TODO: Update placeholder value.

    // The A1 notation of the values to retrieve.
    range: 'advocate!A1',  // TODO: Update placeholder value.

    // How the input data should be interpreted.
    valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.

    // How the input data should be inserted.
    insertDataOption: 'INSERT_ROWS',
  };

  var valueRangeBody = {
      "majorDimension":"ROWS",
      "range":"advocate!A1",
      "values":[
          [
              document.getElementsByTagName("input")[0].value,
              document.getElementsByTagName("input")[1].value
          ]
      ]
    // TODO: Add desired properties to the request body. All existing properties
    // will be replaced.
  };

  var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
  request.then(function(response) {
    // TODO: Change code below to process the `response` object:
    console.log(response.result);
  }, function(reason) {
    console.error('error: ' + reason.result.error.message);
  });
}