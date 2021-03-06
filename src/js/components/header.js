var $ = require("jquery");
var header_str = require("../../view/header.html");
;(function () {
  $("body").prepend($(header_str));//body首部引入header
  function headerGo () {};
  headerGo.prototype = {
    token:false,
    //判断是否存在token
    getToken:function () {
      if (localStorage.weikeData) {
        this.token = true;
      } else {
        this.token = false;
      }
    },
    //根据token的值初始化界面
    info:function (token) {
      if (token) {
        $(".not-logged").css("display","none");
        $(".logged,.logged-m").css("display","block");
      } else {
        $(".logged,.logged-m").css("display","none");
        $(".not-logged").css("display","block");
      }
    },
    //获取站内信
    getMessage: function () {

    },
    action:function () {
      this.getToken();
      this.info(this.token);
      this.onClick();
    },
    //绑定点击事件
    onClick:function () {
      var _this = this;
      $("body").on("click","header",function (event) {
        var target = event.target;
        //显示下拉菜单
        if (target.id === "head-nav") {
          if ($(target).next().css("display") === "none") {
            $(target).next().slideDown(200);
          } else {
            $(target).next().slideUp(200);
          }
          //账号退出
        } else if ($(target).hasClass("cancel")) {
          localStorage.removeItem("weikeData");
          localStorage.removeItem("weikeUser");
          sessionStorage.clear()
          _this.info();
          location.reload(true);
        }
        /*点击head中的登录*/
        else if(target.id === 'sign-in-bt'){
          $('#common-checkLogin').css({
            'display': 'block'
          });
          $('#common-login').css({
            'display': 'none'
          });

          $('#common-register').css({
            'display': 'none'
          });
        }
        /*点击head中的注册*/
        else if(target.id === 'sign-up-bt'){
          $('#common-register').css({
            'display': 'block'
          });
          $('#common-login').css({
            'display': 'none'
          });
          $('#common-checkLogin').css({
            'display': 'none'
          });
        } else if ($(target).hasClass('head-release')) {
          var isCompleted = JSON.parse(localStorage.weikeData).data.isCompleted;
          if (isCompleted) {
            window.open("release.html", "_self", "scrollbars = 1");
          } else {
            window.open("register.html", "_self", "scrollbars = 1");
          }
        }
      });
    }
  };
  var header_go = new headerGo();
  header_go.action();
})(jQuery);
