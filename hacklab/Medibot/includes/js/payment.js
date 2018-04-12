
 function sendForm(){

    var username = $("#username").val();
    var mobileMoneyNumber = $("#numberinput").val();
    var emailid = $("#emailid").val();

    console.log(username);
}

let data = {
    "CustomerName":  username,
    "CustomerMsisdn" : mobileMoneyNumber,
    "Channel" : "mtn-gh",
    "Amount": 1000,
    "PrimaryCallbackUrl" : "",
    "ClientReference" : ""

}

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.hubtel.com/v1/merchantaccount/merchants/HM1407170005/receive/mobilemoney",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Basic dXJrbnlxdnc6cWxzeG5venQ=",
      "Cache-Control": "no-cache",
      "Postman-Token": "fbc4b03c-ccef-4bd6-bbdb-df3c2377d008"
    },
    "processData": false,
    "data": data
}
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
