var UserSQL = {  
                insert:'INSERT INTO User(id,name) VALUES(?,?)', 
                queryAll:'SELECT * FROM User',  
                getUserById:'SELECT * FROM User WHERE uid = ? ',
              };
module.exports = UserSQL;
