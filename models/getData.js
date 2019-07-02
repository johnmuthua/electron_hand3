const {app, BrowserWindow} = require('electron')
const path = require('path')
var mysql = require('mysql')

document.getElementById('btn').addEventListener("click", () =>{
    var mysql = require("mysql");

    //Database credentials
    var connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password: null,
      database : 'add'
    });

    //connection
    connection.connect((err) => {
      if(err){
        return console.log(err.stack);
      }
      console.log('Connection successfully established');
    });
    
    $queryString = 'SELECT id,title FROM `documents` WHERE 1 ;';
    connection.query($queryString, (err,rows,fields) =>{
      if(err){
        return console.log('An error occured',err);
      }

      for (var index = 0; index < rows.length; index++){
        console.log(rows[index]['title']);
        document.getElementById('demo').innerHTML += index;
        document.getElementById('demo').innerHTML += rows[index]['title'];
        document.getElementById('demo').innerHTML += '<br/>'
      }

      console.log(rows.length);
    });
    //close connection
    connection.end(() =>{
      console.log("Connection terminaned")
    });
  }, false)