//conectar accdb access en nodejs?
// Get the adodb module
var ADODB = require('node-adodb');
ADODB.debug = true;

// Connect to the MS Access DB
var connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\dbs\\prueba.accdb;Persist Security Info=False;');

// Query the DB
connection
    .query('SELECT * FROM [TestTable];')
    .on('done', function (data){
        console.log('Result:'.green.bold, data);
    })


    'use strict';

    const ADODB = require('node-adodb');
    const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\dbs\\prueba.accdb;Persist Security Info=False;');
    
    async function query() {
      try {
        const users = await connection.query('SELECT * FROM Users');
    
        console.log(JSON.stringify(users, null, 2));
      } catch (error) {
        console.error(error);
      }
    }
    
    query();


    var pad = "C:\\dbs\\prueba.accdb";

    //var strConn = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + pad;
    var strConn = "Provider=microsoft.ace.oledb.12.0;Data Source=" + pad;

    var cn = new ActiveXObject("ADODB.Connection");

    cn.Open(strConn);
    var rs = new ActiveXObject("ADODB.Recordset");
   // var SQL = "SELECT * FROM customer_mas WHERE ID='512225'";
      var SQL = "SELECT * FROM Users";    
rs.Open(SQL, cn);
    if(!rs.bof) {
    rs.MoveFirst();
    if(!rs.eof) {
    document.write("<p><br>" + rs.fields(1).value + ", ");
    document.write("<br>" + rs.fields(2).value + ", ");
    document.write("<br>" + rs.fields(3).value + ".</p>");
    }
    }
    else {
    document.write("No data found");
    };
    rs.Close();
    cn.Close();
