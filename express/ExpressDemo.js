//express_demo.js �ļ�
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})

//  /del_user ҳ����Ӧ
app.get('/del_user', function (req, res) {
   console.log("/del_user ��Ӧ DELETE ����");
   res.send('Visit delete page');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("visit http://%s:%s", host, port)
 
})