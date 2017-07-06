var $ = require("jquery");
var base64js = require('base64-js')
var sign_box_str = require("../../view/sign_box.html");
const content_path = require("../components/content_path");
$("body").append($(sign_box_str));

(function($){
  
  var teacherRegister = false,
      studentRegister = false,
      teacherLogin = false,
      studentLogin = false;
  var emailRE = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;/*测试邮箱*/
  var pwdRE = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/;//匹配密码
  var unameRE = /((?=[\x21-\x7e]+)[^A-Za-z0-9])/;//匹配用户名
  
  function login_register(){};
  login_register.prototype = {
  	
    /*加载时判断是否以前登录时记住密码*/
    login_registerLoad:function(){
      
      if(localStorage.userName && localStorage.password){
        $("#remember").attr("checked", true);
        $('#uname').val(localStorage.userName);
        $('#pwd').val(localStorage.password);
      }else{
        $("#remember").attr("checked", false);
        $('#uname').val("");
        $('#pwd').val("");
      }
      
      $.ajax({
        type: "GET",
        url: content_path + "/weike/getVerifyCode",
        async: false,
        success: function(response){
          var message = response.msg;
          console.log(message)
          if(message){
            $('#canvas').html(message);
            sessionStorage.loginData = message;
          } 
        },
        error: function(err){
          alert(err);
        }
      });
    },
    
    /*登录绑定失焦事件*/
    onBlur:function(){
      
      $("body").on('blur','.lo-container',function(event){
        var target = event.target;
        /*用户名输入框失去焦点*/
        if(target.id === 'uname'){
          var uname = $('#uname').val();
          var unamelen = uname.length;
          if(unamelen === 0){
            $('.p-uname').html('输入用户名');
            setTimeout(function(){
              $('.p-uname').html('');
            },2000);
          }
        }
        
        /*密码输入框失去焦点*/
        else if(target.id === 'pwd'){
          var pwd = $('#pwd').val();
          var pwdlen = pwd.length;
          if(pwdlen === 0){
            $('.p-pwd').html('请输入密码');
            setTimeout(function(){
              $('.p-pwd').html('');
            },2000);
          }
        }
        
        /*验证码输入框失去焦点*/
        else if(target.id === 'validate'){
          var validate = $('#validate').val();
          var validatelen = validate.length;
          if(validatelen === 0){
            $('.p-validate').html('无验证码');
            setTimeout(function(){
              $('.p-validate').html('');
            },2000);
          }
        }
      });
      
      /*注册绑定失焦事件*/
      $("body").on('blur','.re-container',function(event){
        var target = event.target;
        
        /*用户名输入框失去焦点*/
        if(target.id === 're-uname'){
          var uname = $('#re-uname').val();
          var unamelen = uname.length;
          if(unamelen === 0){
            $('.re-p-uname').html('用户名为空');
          }
          else{
            if(unameRE.test(uname)){
              $('.re-p-uname').html('含有特殊字符');
            }
          }
          setTimeout(function(){
            $('.re-p-uname').html('');
          },2000);
        }
        
        /*密码输入框失去焦点*/
        else if(target.id === 're-pwd'){
          var pwd = $('#re-pwd').val();
          var pwdlen = pwd.length;
          if(pwdlen === 0){
            $('.re-p-pwd').html('密码为空');
          }
          else{
            if(pwdlen < 6){
              $('.re-p-pwd').html('密码低于6位');
            }
            else if(!pwdRE.test(pwd)){
              $('.re-p-pwd').html('密码不能全数字/字母');
            }
            else if(pwdlen > 17){
              $('.re-p-pwd').html('密码过长');
            }
          }
          setTimeout(function(){
            $('.re-p-pwd').html('');
          },2000);
        }
        
        /*邮箱输入框失去焦点*/
        else if(target.id === 're-email'){
          var email = $('#re-email').val();
          var emaillen = email.length;
          if(emaillen === 0){
            $('.re-p-email').html('邮箱为空');
          }
          else{
            if(!emailRE.test(email)){
              $('.re-p-email').html('无效邮箱');
              return ;
            }
          }
          setTimeout(function(){
            $('.re-p-email').html('');
          },2000);
        }
        
        /*验证码输入框失去焦点*/
        else if(target.id === 're-validate'){
          var validate = $('#re-validate').val();
          var validatelen = validate.length;
          if(validatelen === 0){
            $('.re-p-validate').html('验证码为空');
          }
          setTimeout(function(){
            $('.re-p-validate').html('');
          },2000);
        }
      });
    },
      
    onFocus:function(){
      
      /*登录绑定获得焦点事件*/
      $("body").on('focus','.lo-container',function(event){
        var target = event.target;
        
        /*用户名输入框获得焦点*/
        if(target.id === 'uname'){
          $('.p-uname').html("");
        }
        
        /*密码输入框获得焦点*/
        else if(target.id === 'pwd'){
          $('.p-pwd').html("");
        }
        
        /*验证码输入框获得焦点*/
        else if(target.id === 'validate'){
          $('.p-validate').html("");
        }
      });
    
      /*注册绑定获得焦点事件*/
      $("body").on('focus','.re-container',function(event){
        var target = event.target;
        
        /*用户名输入框获得焦点*/
        if(target.id === 're-uname'){
          $('.re-p-uname').html("");
        }
        
        /*密码输入框获得焦点*/
        else if(target.id === 're-pwd'){
          $('.re-p-pwd').html("");
        }
        
        /*邮箱输入框获得焦点*/
        else if(target.id === 're-email'){
          $('.re-p-email').html("");
        }
        
        /*验证码输入框获得焦点*/
        else if(target.id === 're-validate'){
          $('.re-p-validate').html("");
        }
      });
    },
    
    onClick:function(){
      
      /*是否勾选记住密码*/
      if ($('#remember').is(':checked')){
        localStorage.userName = $('#uname').val();
        localStorage.password = $('#pwd').val();
        $("#remember").attr("checked", true);
      }
      else{
        localStorage.removeItem("userName");
        localStorage.removeItem("password");
      }
      var _loginNone = function(){

        $('.lo-container').css({
          'display': 'none'
        });
        
        $('#common-login').css({
          'display': 'none'
        });
        
        $('#common-register').css({
          'display': 'none'
        });
        
        $('#common-forget').css({
          'display': 'none'
        });
        
        $('.forget-validate').css({
          'display': 'block'
        });
        
        $('.forget-pwd').css({
          'display': 'none'
        });
        
        $('#uname').val("");
        $('#pwd').val("");
        $('#validate').val("");
        
        $('.p-uname').html("");
        $('.p-pwd').html("");
        $('.p-validate').html("");
        $('.p-login').html("");
      }
      
      /*选择学生/老师登录绑定click事件*/
      $("body").on('click', '#common-checkLogin', function(event){
        var target = event.target;
        
        $.ajax({
          type: "GET",
          url:  content_path + "/weike/getVerifyCode",
          async: false,
          success: function(response){
            var message = response.msg;
            if(message){
              $('#canvas').html(message);
              sessionStorage.loginData = message;
            } 
          },
          error: function(err){
            alert(err);
          }
        });
        
        /*点击教师\学生登录*/
        if(target.className === 'tea-checkLogin' || target.className === 'stu-checkLogin'){
          $('#common-checkLogin').css({
            'display': 'none'
          });
          
          $('#common-login').css({
            'display': 'block'
          });
          
          $('.lo-container').css({
            'display': 'block'
          });
          
          $('.re-container').css({
            'display': 'none'
          }); 
          
          if(target.className === 'tea-checkLogin'){
            teacherLogin = true;
          }
          else if(target.className === 'stu-checkLogin'){
            studentLogin = true;
          }
        }
        
      });
      
      /*登录绑定click事件*/
      $("body").on('click','.lo-container',function(event){
        var target = event.target;
        /*点击登录界面的关闭按钮*/
        if(target.className === 'out'){
          
          $('#canvas').html("");
          
          _loginNone();
        }
        
        /*点击登录界面的注册按钮*/
        else if(target.className === 'register'){
          $('.lo-container').css({
            'display': 'none'
          });
          $('#common-register').css({
            'display': 'block'
          });
        }
        
        /*点击登录界面的忘记密码按钮*/
        else if(target.className === 'unlogin'){
          $('.lo-container').css({
            'display': 'none'
          });
          $('#common-register').css({
            'display': 'none'
          });
          $('#common-login').css({
            'display': 'none'
          });
          $('#common-checkLogin').css({
            'display': 'none'
          });
          $('#common-forget').css({
            'display': 'block'
          });
        }
        
        /*登录时点击获取验证码*/
        else if(target.className === 'reload'){
          
          $('.p-validate').html("");
          
          //登录点击刷新获取验证码发起请求
          $.ajax({
            type: "GET",
            url: content_path + "/weike/getVerifyCode",
            async: false,
            success: function(response){
              var message = response.msg;
              if(message){
                $('#canvas').html(message);
                sessionStorage.loginData = message;
              } 
            },
            error: function(err){
              alert(err.tostring());
            }
          });
        }
        
        /*点击登录界面的登录按钮*/
        else if(target.className === 'bt-login'){

          //点击学生/老师登录确定提交的URL
          var getLoginVerifyCodeUrl = null;
          if(teacherLogin){
            getLoginVerifyCodeUrl = content_path + "/weike/teacher/login";
          }else if(studentLogin){
            getLoginVerifyCodeUrl = content_path + "/weike/student/login";
          }
          
          //获取登录数据
          var uname = $('#uname').val();
          var pwd = $('#pwd').val();
          var validate = $('#validate').val();
          
          var loginPostData = {
            'username' : uname,
            'password' : pwd
          }
          
          loginPostData = JSON.stringify(loginPostData);
          
          var unamelen = uname.length;
          var pwdlen = pwd.length;
          var validatelen = validate.length;
          
          var loginData = sessionStorage.loginData;
          
          var loginPass = (loginData === validate ? true : false);
          
          if(!loginPass){
            $('p-validate').html('验证码错误');
          }
          
          if(unamelen !==0 && pwdlen !== 0 && validatelen !== 0 && loginPass){
            
          //登录发起请求
          $.ajax({
            type: "POST",
            contentType: 'application/json;charset=UTF-8',
            url: getLoginVerifyCodeUrl,
            dataType: "json",
            data: loginPostData,
            async: false,
            success: function(response){
              /*错误*/
              if(!response.ifSuccess){
                alert("用户名或密码错误");
                //清空验证码
                $("#validate").val("");
                //刷新验证码
                $.ajax({
				          type: "GET",
				          url: content_path + "/weike/getVerifyCode",
				          async: false,
				          success: function(response){
				            var message = response.msg;
				            
				            if(message){
				              $('#canvas').html(message);
				              sessionStorage.loginData = message;
				            } 
				          },
				          error: function(err){
				            alert(err.tostring());
				          }
				        });
              }
              /*成功*/
              else if(response.data){
                localStorage.token = response.data.token;
                if(teacherLogin){
			            sessionStorage.userType = "teacher";
			          }else if(studentLogin){
			            sessionStorage.userType = "student";
			          }
                $('.not-logged').css({
                  'display':'none'
                });
                $('.logged').css({
                  'display':'block'
                });
                //头像
                /*$('.user-head').css({
                  'background': 'url(../img/' + response.img + '.png) no-repeat;'
                });*/
                sessionStorage.user_name = uname;
                $('.user-name').html(uname);
                $('#canvas').html("");
                
                _loginNone();
              }
            },
            error: function(err){
              alert(err.toString());
            }
          });
        } 
        else{
          $('.p-login').html('验证码错误或信息不全');
            setTimeout(function(){
              $('.p-login').html('');
            },2000);
          }
        }
      });
    
    /*找回密码界面绑定click事件*/
    $("body").on('click', '#common-forget', function(event){
      var target = event.target;
      
      function _clearPwdFromot(){
        setTimeout(function(){
          $('.forget-pwdPromot').html("");
        },2000);
      }
      
      function _clearFromot(){
        setTimeout(function(){
          $('.forget-promot').html("");
        },2000);
      }
      
      //点击找回密码获取验证码界面的关闭按钮
      if(target.className === 'forget-out'){
        if(typeof forgetTimeInterval !== 'undefined'){
          clearInterval(forgetTimeInterval);
          $('.forget-reload').removeAttr("disabled");
          $('.forget-reload').val("获取验证码");
        }
        
        $('#forget-uname').val("");
        $('#forget-email').val("");
        $('#forget-getValidate').val("");
        
        _loginNone();
      }
      
      //点击找回密码输入新密码界面的关闭按钮
      else if(target.className === 'forget-pwdOut'){
        $('#forget-uname').val("");
        $('#forget-email').val("");
        $('#forget-getValidate').val("");
        
        _loginNone();
      }
      
      //点击找回密码回去验证码界面的获取验证码按钮
      else if(target.className === 'forget-reload'){
        var forgetUname = $('#forget-uname').val();
        sessionStorage.forgetUname = forgetUname;
        var forgetEmail = $('#forget-email').val();
        var forgetUnameLength = forgetUname.length;
        var forgetEmailLength = forgetEmail.length;
        
        var forgetFycodeTime = 60;
        
        var forgetPostData = {
          'username':forgetUname,
          'email':forgetEmail
        }
        
        var getForgetVerifyCodeUrl = null;
        if(teacherLogin){
          getForgetVerifyCodeUrl = content_path + "/weike/teacher/getVerifyCodeForFindPassword";
        }else if(studentLogin){
          getForgetVerifyCodeUrl = content_path + "/weike/student/getVerifyCodeForFindPassword";
        }
        
        if(forgetUnameLength === 0){
          $('.forget-promot').html("用户名为空");
          _clearFromot();
        }
        else if(unameRE.test(forgetUname)){
          $('.forget-promot').html("用户名含有特殊字符");
          _clearFromot();
        }
        else if(forgetEmailLength === 0){
          $('.forget-promot').html("邮箱为空或");
          _clearFromot();
        }
        else if(!emailRE.test(forgetEmail)){
          $('.forget-promot').html("无效邮箱");
          _clearFromot();
        }
        else if($('.forget-reload').prop("disabled") === false){
          _getForgetCode();
          _forgetTimeOver();
        }
        
        function _getForgetCode(){
          $.ajax({
            type: "GET",
            url: getForgetVerifyCodeUrl,
            dataType: "json",
            data: forgetPostData,
            async: true,
            success: function(response){
              if(response.ifSuccess){
                sessionStorage.forgetData = response.msg;
              }else{
                alert(response.msg);
              }
            },
            error: function(err){
              alert(err);
            }
          });
        }
        
        //注册获取验证码60秒后重发
        function _forgetTimeOver(){
          forgetTimeInterval = setInterval(function(){
            $('.forget-reload').attr({"disabled":"disabled"});
  
            if(forgetFycodeTime === 1){
              $('.forget-reload').removeAttr("disabled");
              $('.forget-reload').val("获取验证码");
              clearInterval(forgetTimeInterval);
            }else{
              forgetFycodeTime = forgetFycodeTime - 1;
              $('.forget-reload').val(forgetFycodeTime + '秒后重发');
            }
          },1000);
        }
      }
      else if(target.className === 'forget-btn'){
        var forgetValidata = $('#forget-getValidate').val();
        var forgetSessionData = sessionStorage.forgetData;
        var forgetValidataLength = forgetValidata.length;
        if(forgetValidataLength === 0 || forgetValidata !== forgetSessionData){
          $('.forget-promot').html('验证码为空或验证码错误');
          _clearFromot();
        }
        else{
          $('.forget-validate').css({
            'display':'none'
          });
          $('.forget-pwd').css({
            'display':'block'
          });
        }
      }
      else if(target.className === 'forget-pwdBtn'){
        var forgetFindUname = sessionStorage.forgetUname;
        var forgetNewPwd = $('#forget-newPwd').val();
        var forgetSurePwd = $('#forget-surePwd').val();
        var forgetNewPwdLength = forgetNewPwd.length;
        var getFindVerifyCodeUrl = null;
        if(teacherLogin){
          getFindVerifyCodeUrl = content_path + "/weike/teacher/FindPassword";
        }else if(studentLogin){
          getFindVerifyCodeUrl = content_path + "/weike/student/FindPassword";
        }
        
        if(forgetNewPwdLength < 6){
          $('.forget-pwdPromot').html("密码长度过短");
          _clearPwdFromot();
        }
        else if(forgetNewPwdLength === 0){
          $('.forget-pwdPromot').html("密码为空");
          _clearPwdFromot();
        }
        else if(!pwdRE.test(forgetNewPwd)){
          $('.forget-pwdPromot').html("密码不能全数字/字母");
          _clearPwdFromot();
        }
        else if(forgetSurePwd !== forgetNewPwd){
          $('.forget-pwdPromot').html("前后两次的密码不相同");
          _clearPwdFromot();
        }
        else{   
          var forgetPostNewData = {
            'username' : forgetFindUname,
            'password' : forgetNewPwd
          };
          forgetPostNewData = JSON.stringify(forgetPostNewData);
          //重置密码发起请求
          $.ajax({
            type: "POST",
            contentType: 'application/json;charset=UTF-8',
            url: getFindVerifyCodeUrl,
            dataType: "json",
            data: forgetPostNewData,
            async: false,
            success: function(response){
              console.log(forgetPostNewData);
              if(response.ifSuccess){
                alert('修改密码成功');
                $('.forget-pwd').css({
                  'display':'none'
                });
                $('#uname').val("");
                $('#pwd').val("");
                $('#validate').val("");
                _registerNone();
              }
              else{
                alert(response.msg);
              }
            },
            error: function(err){
              alert(err);
            }
          });
        }
      }
    });
    
    
    /*选择学生/老师注册绑定click事件*/
    $("body").on('click', '#common-register', function(event){
      var target = event.target;
      
      /*点击教师\学生注册*/
      if(target.className === 'tea-register' || target.className === 'stu-register'){
        $('#common-register').css({
          'display': 'none'
        });
        
        $('#common-login').css({
          'display': 'block'
        });
        
        $('.lo-container').css({
          'display': 'none'
        });
        
        $('.re-container').css({
          'display': 'block'
        }); 
        if(target.className === 'tea-register'){
          teacherRegister = true;
        }
        else if(target.className === 'stu-register'){
          studentRegister = true;
        }
      }
      
    });
    
    var _registerNone = function(){
      $('.re-container').css({
        'display': 'none'
      });
      
      $('#common-login').css({
        'display': 'none'
      });
      
      $('#common-register').css({
        'display': 'none'
      });
      
      $('#common-forget').css({
        'display': 'none'
      });
      
      $('#re-uname').val("");
      $('#re-pwd').val("");
      $('#re-email').val("");
      $('#re-validate').val("");
      
      $('.re-p-uname').html("");
      $('.re-p-pwd').html("");
      $('.re-p-email').html("");
      $('.re-p-validate').html("");
      $('.re-promot').html("");
    }
    
    /*注册绑定click事件*/
    $("body").on('click','.re-container',function(event){
      var target = event.target;
      
      /*点击注册界面的关闭按钮*/
      if(target.className === 're-out'){
        
        if(typeof timeInterval !== 'undefined'){
          clearInterval(timeInterval);
          $('.re-reload').removeAttr("disabled");
          $('.re-reload').val("获取验证码");
        }
        $('.re-reload').html('获取验证码');
        
        _registerNone();
      }
      
      /*点击注册界面的登录*/
      else if(target.className === 're-bt-login'){
        $('.re-container').css({
          'display': 'none'
        });
        
        $('#common-checkLogin').css({
          'display': 'block'
        });
      }
      /*点击获取注册验证码*/
      else if(target.className === 're-reload'){
        
        $('.re-p-validate').html("");
        var validateUname = $('#re-uname').val();
        var validateEmail = $('#re-email').val();
        var validateUnameLength = validateUname.length;
        var validateEmailLength = validateEmail.length;
        
        var validateData = {
          'username': validateUname,
          'email': validateEmail
        }
        
        var registerFycodeTime = 60;
        var getRegisterVerifyCodeUrl = null;
        
        if(validateUnameLength === 0){
          $('.re-p-validate').html("用户名为空");
        }
        else if(validateEmailLength === 0){
          $('.re-p-validate').html("邮箱为空");
        }
        else if(unameRE.test(validateUname)){
          $('.re-p-uname').html("用户名有特殊字符");
        }
        else if(!emailRE.test(validateEmail)){
          $('.re-p-email').html("邮箱不正确");
        }
        else if($('.re-reload').prop("disabled") === false){
          _getRegister();
          _timeOver();
        }
        
        
        function _getRegister(){
          if(teacherRegister){
            getRegisterVerifyCodeUrl = content_path + "/weike/teacher/GetVerifyCodeForRegister";
          }else if(studentRegister){
            getRegisterVerifyCodeUrl = content_path + "/weike/student/GetVerifyCodeForRegister";
          }
  
          $.ajax({
            type: "GET",
            url: getRegisterVerifyCodeUrl,
            dataType: "json",
            data: validateData,
            async: true,
            success: function(response){
              if(response.ifSuccess){
                sessionStorage.registerData = response.msg;
              }else{
                alert(response.msg);
              }
            },
            error: function(err){
              alert(err);
            }
          });
        }
        
        //注册获取验证码60秒后重发
        function _timeOver(){
          timeInterval = setInterval(function(){
            $('.re-reload').attr({"disabled":"disabled"});
  
            if(registerFycodeTime === 1){
              $('.re-reload').removeAttr("disabled");
              $('.re-reload').val("获取验证码");
              clearInterval(timeInterval);
            }else{
              registerFycodeTime = registerFycodeTime - 1;
              $('.re-reload').val(registerFycodeTime + '秒后重发');
            }
          },1000);
        }
      }
      
      /*点击注册页面的注册按钮*/
      else if(target.className === 're-bt-register'){
        
        //点击学生/老师登录确定提交的URL
        var registerUrlData = null;
        if(teacherRegister){
          registerUrlData = content_path + "/weike/teacher/register";
        }else if(studentRegister){
          registerUrlData = content_path + "/weike/student/register";
        }
        
        var uname = $('#re-uname').val();
        var pwd = $('#re-pwd').val();
        var email = $('#re-email').val();
        var validate = $('#re-validate').val();
        
        var registerPostData = {
          'username' : uname,
          'password' : pwd,
          'email' : email
        };
        
        registerPostData = JSON.stringify(registerPostData);
        
        
        var registerData = sessionStorage.registerData;
        
        var registerPass = (registerData === validate ? true : false);
        
        if(!registerPass){
          $('.re-p-validate').html('验证码错误/为空');
          setTimeout(function(){
          	$('.re-p-validate').html('');
          },2000)
        }
        
        if(!unameRE.test(uname)&&(pwdRE.test(pwd))&&(emailRE.test(email))&&(registerPass)){
          
          //注册发起请求
          $.ajax({
            type: "POST",
            contentType: 'application/json;charset=UTF-8',
            url: registerUrlData,
            dataType: "json",
            data: registerPostData,
            async: false,
            success: function(response){
              if(response.ifSuccess){
                alert('注册成功');
                $('.re-reload').html('获取验证码');
        
                _registerNone();
              }else{
                alert(response.msg);
              }
            },
            error: function(err){
                alert(err);
              }
            });
          }
          else{
            $('.re-promot').html('请正确填写信息再注册');
            setTimeout(function(){
              $('.re-promot').html("");
            },1000);
          }
        }
      });
    },
    begin:function(){
      this.login_registerLoad();
      this.onFocus();
      this.onBlur();
      this.onClick();
    }
  };
  var login_register = new login_register();
  login_register.begin();
})(jQuery)
