var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET register page. */
router.route("/register").get(function(req,res){
	res.render("register",{title:'User register'});
}).post(function(req,res){
   	var User = global.dbHandel.getModel('user');
   	var uname = req.body.uname;
   	var upwd = req.body.upwd;
   	User.findOne({name: uname},function(err,doc){   // 同理 /login 路径的处理方式
   		if(err){
   			res.send(500);
   			req.session.error =  '网络异常错误！';
   			console.log(err);
   		}else if(doc){
   			req.session.error = '用户名已存在！';
   			res.send(500);
   		}else{
   			User.create({ 							// 创建一组user对象置入model
   				name: uname,
   				password: upwd
   			},function(err,doc){
   				 if (err) {
                           res.send(500);
                           console.log(err);
                       } else {
                           req.session.error = '用户名创建成功！';
                           res.send(200);
                       }
                     });
   		}
   	});
   });

module.exports = router;
