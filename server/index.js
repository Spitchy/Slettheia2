const express = require("express");
const next = require("next");
var https = require("https");
const axios = require("axios");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    var client_id = "3b92edd5-f73c-4ab6-97c8-a346b867d1ca";
    var client_secret = "f-cB42A0pLMEMgcZe-i6KXcXKfl=";
    var Ocp_Apim_Subscription_Key = "c4af94e33cdb40169cc52ccb54649d0e";
    var Merchant_Serial_Number = "275662";
    var Vipps_System_Name = "postman";
    var Vipps_System_Version = "2.0";
    var Vipps_System_Plugin_Name = "vipps-postman";
    var Vipps_System_Plugin_Version = "2.0";
    var baseUrl = "https://slettheiaskole.vercel.app";
    // var baseUrl = "http://localhost:3000";

    // Get Token
    server.get("/api/getToken", (req, res) => {
      var status = { status: false };
      var data = {};
      var config = {
        method: "post",
        url: "https://apitest.vipps.no//accessToken/get",
        headers: {
          client_id: client_id,
          client_secret: client_secret,
          "Ocp-Apim-Subscription-Key": Ocp_Apim_Subscription_Key,
          "Merchant-Serial-Number": Merchant_Serial_Number,
          "Vipps-System-Name": Vipps_System_Name,
          "Vipps-System-Version": Vipps_System_Version,
          "Vipps-System-Plugin-Name": Vipps_System_Plugin_Name,
          "Vipps-System-Plugin-Version": Vipps_System_Plugin_Version,
        },
      };

      axios(config)
        .then(function (response) {
          return res.end(JSON.stringify({ status: true, data: response.data }));
        })
        .catch(function (error) {
          return res.end(JSON.stringify({ status: false, error: error }));
        });
    });

    // Get Landing page link
    server.get("/api/getLandingPage", (req, res) => {
      var data = JSON.parse(req.query.data);
      var mobile = data.mobile;
      var token = data.token;
      var amount = data.amount;
      var orderID = new Date().getTime();

      var data = JSON.stringify({
        merchantInfo: {
          callbackPrefix:
            "https://example.com/vipps/callbacks-for-payment-update-from-vipps",
          fallBack: baseUrl,
          merchantSerialNumber: Merchant_Serial_Number,
        },
        customerInfo: {
          mobileNumber: mobile,
        },
        transaction: {
          amount: amount,
          orderId: orderID,
          transactionText: "Test payment by OKKKKK",
          skipLandingPage: false,
        },
      });
      var header = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        client_id: client_id,
        client_secret: client_secret,
        "Ocp-Apim-Subscription-Key": Ocp_Apim_Subscription_Key,
        "Merchant-Serial-Number": Merchant_Serial_Number,
        "Vipps-System-Name": Vipps_System_Name,
        "Vipps-System-Version": Vipps_System_Version,
        "Vipps-System-Plugin-Name": Vipps_System_Plugin_Name,
        "Vipps-System-Plugin-Version": Vipps_System_Plugin_Version,
      };

      const result = axios
        .post("https://apitest.vipps.no/ecomm/v2/payments/", data, {
          headers: header,
        })
        .then((response) => {
          return res.end(JSON.stringify({ status: true, data: response.data }));
        })
        .catch(function (error) {
          return res.end(JSON.stringify({ status: false, error: error }));
        });

      // axios(config)
      // .then(function (response) {
      //   return res.end(JSON.stringify({'status':true,'data':response.data}));
      // })
      // .catch(function (error) {
      //   return res.end(JSON.stringify({'status':false,'error':error}));
      // });
    });

    //  server.get("*", (req, res) => {
    //   return handle(req, res);
    // });
    server.use((req, res) => app.getRequestHandler()(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
//hvorfor het denne getToket før
async function getToken() {
  var status = { status: false };

  // var headers = {
  //     "Content-Type": "application/json; charset=utf-8",
  // };
  // var options = {
  //     host: "https://apitest.vipps.no",
  //     path: "/accessToken/get",
  //     method: "POST",
  //     headers: headers
  // };

  // var req = https.request(options, function(res) {
  //     console.log(res);
  // });

  // console.log("req");
  // console.log(req);

  // req.on('error', function(e) {
  //     status = req;
  //     console.log("error");
  //     console.log(e);

  // });

  // // req.write(JSON.stringify(data));
  // req.end();

  const response = await fetch("https://apitest.vipps.no/accessToken/get", {
    method: "POST",
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type,Authorization",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
      "Access-Control-Allow-Credentials": "true",
      CORS_SUPPORTS_CREDENTIALS: "true",
      client_id: "3b92edd5-f73c-4ab6-97c8-a346b867d1ca",
      client_secret: "f-cB42A0pLMEMgcZe-i6KXcXKfl=",
      "Ocp-Apim-Subscription-Key": "c4af94e33cdb40169cc52ccb54649d0e",
      "Merchant-Serial-Number": "275662",
    },
  });
  const data = await response.json();
  status["data"] = data;
  // return status;
  return JSON.stringify(status);
}
