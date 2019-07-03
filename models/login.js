const mysql = require('mysql')


document.getElementById('btn-login').addEventListener('click',()=>{
    let username = document.getElementById('txtUsr').value;
    let password = document.getElementById('txtPwd').value;
    console.log(username);
    console.log(password);

    //Database credentials
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: null,
        database : 'mylife'
      });
    
    //connection
    connection.connect((err) => {
        if(err){
          return console.log(err.stack);
        }
        console.log('Connection successfully established');
      });

    $queryString = 'SELECT first_name,password FROM `users` WHERE 1 ;';


    connection.query($queryString, (err,rows,fields) =>{
        if(err){
          return console.log('An error occured',err);
        }

        for(let index = 0; index < rows.length; index++){
            if (rows[index]['password']==password && rows[index]['first_name'] == username){
                console.log('logged in as ',username);
                break;
            }
            console.log('wrong credentials');
        }
    })
})
