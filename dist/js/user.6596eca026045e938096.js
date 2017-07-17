webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var time_str = __webpack_require__(18);
function time () {};
time.prototype = {
  //正在选择的时间类型
  type: "",
  action:function () {
    $(".time-box").html(time_str);
    this.addEvent();
  },
  //根据当前的年份,计算当前的月份,日份最大值
  day_max: 31,
  //据当前的年份,月份,计算日份最大值
  compute:function (year,month) {
    var year = Number(year),
        month = Number(month);
    //月份为1,,3,5,7,8,10,12,日分最大为31天
    if ((month <= 7 && month % 2 === 1) || (month >= 8 && month % 2 === 0)) {             
      this.day_max = 31;
    //月份为4,6,9,11,日分最大为30天
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      this.day_max = 30;
    //年份不是闰年为2月，日分最大值为29
    } else if (month === 2 && year % 4 === 0) {
      this.day_max = 29;
    //年份是闰年为2月，日分最大值为28
    } else {
      this.day_max = 28;
    }
    //判断当前的日分值是否大于上限
    if (Number($(".num-d").eq(this.type).val()) >= this.day_max) {
      $(".num-d").eq(this.type).val(this.day_max);
    }
  },
  //点击选择事件给出选择框，获取正在选择时间的类型
  startEnd:function () {
    //若点击的时间表单是显示的，则隐藏它
    if ($(".select-time").eq(this.type).css("display") === "block") {
      $(".select-time").eq(this.type).slideUp(200);
    //点击的时间表单是隐藏的，则显示它
    //并且隐藏其他显示的时间表单
    } else {
      $(".select-time").not($(".select-time").eq(this.type)).css("display","none");
      $(".select-time").eq(this.type).slideDown(200);
    }
  },
  //获取事件显示出来
  showTime:function () {
    //判断type类型，获取不同的数据
      var year = $(".num-y").eq(this.type).val(),
          month = $(".num-m").eq(this.type).val(),
          day = $(".num-d").eq(this.type).val();
      var date = year + "-" + month + "-" + day;
      $(".show-time").eq(this.type).text(date);
  },
  //判断输入的数字是否达到上限或者下限
  //年份的上限和下限分别为2030,2001
  inputMinMax:function (target) {
    var num = Number(target.val());
    if (target.hasClass("num-d")) {
      if (num >= this.day_max) {
        target.val(this.day_max);
      } else if (num <= 1) {
        target.val("1");
      }
    } else if (target.hasClass("num-m")) {
      if (num >= 12) {
        target.val("12");
      } else if (num <= 1) {
        target.val("1");
      }
    } else {
      if (num >= 2030) {
        target.val("2030");
      } else if (num <= 2001) {
        target.val("2001");
      }
    }
  },
  //点击增加减少
  addSubtract:function (type) {
    if (type.hasClass("day")) {
      if (type.hasClass("up")) {
        var num = Number(type.next().val());
        this.clickMinMax(++num,"day");
      } else if (type.hasClass("down")) {
        var num = Number(type.prev().val());
        this.clickMinMax(--num,"day");
      }
    } else if (type.hasClass("month")) {
      if (type.hasClass("up")) {
        var num = Number(type.next().val());
        this.clickMinMax(++num,"month");
      } else if (type.hasClass("down")) {
        var num = Number(type.prev().val());
        this.clickMinMax(--num,"month");
      }
    } else {
      if (type.hasClass("up")) {
        var num = Number(type.next().val());
        this.clickMinMax(++num,"year");
      } else if (type.hasClass("down")) {
        var num = Number(type.prev().val());
        this.clickMinMax(--num,"year");
      }
    }
  },
  //点击增加达到最大值变为最小值,达到最小值变最大值
  clickMinMax:function (num,type) {
    if (type === "day") {
      if (num > this.day_max) {
        $(".num-d").eq(this.type).val("1");
      } else if (num < 1) {
        $(".num-d").eq(this.type).val(this.day_max);
      } else {
        $(".num-d").eq(this.type).val(num);
      }
    } else if (type === "month") {
      if (num > 12) {
        $(".num-m").eq(this.type).val("1");
      } else if (num < 1) {
        $(".num-m").eq(this.type).val("12");
      } else {
        $(".num-m").eq(this.type).val(num);
      }
      this.compute($(".num-y").eq(this.type).val,$(".num-m").eq(this.type).val());
    } else {
      if (num > 2030) {
        $(".num-y").eq(this.type).val("2001");
      } else if (num < 2001) {
        $(".num-y").eq(this.type).val("2030");
      } else {
        $(".num-y").eq(this.type).val(num);
      }
      this.compute($(".num-y").eq(this.type).val(),$(".num-m").eq(this.type).val());
    }
  },
  addEvent:function () {
    var that = this;
    $("body").on("click",".time-box",function (event) {
      var target = $(event.target);
      //选择开始时间按钮
      if (target.hasClass("start")) {
        that.type = target.index(".start");
        that.startEnd(target);
      //取消选择按钮
      } else if (target.hasClass("close-time")) {
         $(".select-time").slideUp(200);
      //确定选择时间
      } else if (target.hasClass("get-time")) {
        that.showTime();
        that.startEnd();
      //点击增加减少
      } else if (target.hasClass("iconfont")) {
        that.addSubtract(target);
      }
    });
    //输入框只能输入数字
    $(".num-y,.num-m,.num-d").keydown(function () {
      var keyCode = event.which;
      if (keyCode == 46 || keyCode == 8 || keyCode == 37 || keyCode == 39 || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) ) { 
        return true;
      } else { 
        return false 
      }
    });
    //输入的数字上限下限判断
    $(".num-y,.num-m,.num-d").on("blur",function (event) {
      var target = $(event.target);
      //如果月份和年份的值发生改变,则判断日分的最大值
      if (!target.hasClass(".num-d")) {
        that.compute($(".num-y").eq(that.type).val(),$(".num-m").eq(that.type).val());
      }
      that.inputMinMax(target);
    });
  }
};
module.exports = time;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "/* 全局样式 */\ni {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nbody {\n  min-width: 300px;\n  max-width: 1400px;\n}\nli {\n  list-style-type: none;\n}\n.error {\n  color: red;\n  position: absolute;\n}\n@media (max-width: 992px) {\n  .error {\n    right: 0;\n    top: 14px;\n  }\n}\n@media (min-width: 992px) {\n  .error {\n    right: 60px;\n    top: 24px;\n  }\n}\n.white-button {\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n.button {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n}\n.button:hover {\n  background-color: #3082f9;\n}\n.button:active {\n  background-color: #1F71E8;\n}\n.textarea {\n  outline: none;\n  border: 1px solid #E1E4E7;\n  padding: 10px;\n  border-radius: 3px;\n  transfrom: box-shadow;\n}\n.input-text {\n  height: 32px;\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  transfrom: box-shadow;\n}\n.clearfix {\n  zoom: 1;\n}\n.clearfix:before {\n  display: table;\n  content: \" \";\n}\n.clearfix:after {\n  display: table;\n  content: \" \";\n  clear: both;\n}\n.common-width {\n  width: 100%;\n}\n.index,\n.search,\n.release,\n.register,\n.user {\n  background-color: #F7F8FA;\n}\n.index .container,\n.search .container,\n.release .container,\n.register .container,\n.user .container {\n  background-color: #ffffff;\n}\n@media (min-width: 768px) {\n  .index .container,\n  .search .container,\n  .release .container,\n  .register .container,\n  .user .container {\n    border-left: 1px solid #E1E4E7;\n    border-right: 1px solid #E1E4E7;\n  }\n}\n.button-link:hover {\n  background-color: #3082f9;\n}\n.button-link:active {\n  background-color: #1F71E8;\n}\n.link:link {\n  color: #888888;\n  text-decoration: none;\n}\n.link:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.link:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.link:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.link-bg:link {\n  color: #888888;\n  text-decoration: none;\n}\n.link-bg:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.link-bg:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.link-bg:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.box-shadow {\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.box-shadow-focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.triangle {\n  position: relative;\n  display: block;\n}\n.triangle:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: auto;\n  border-bottom: 8px solid #E1E4E7;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.triangle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 1px;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  margin: auto;\n  border-bottom: 8px solid #ffffff;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n}\n/* header部分 */\nheader {\n  background: #ffffff;\n  border-bottom: 1px solid #E1E4E7;\n}\nheader ul {\n  margin: 0;\n  padding: 0;\n}\nheader nav {\n  margin: 0 auto;\n}\nheader nav .logo {\n  float: left;\n  padding: 8px 20px 2px 0;\n}\nheader nav .nav-ul li {\n  list-style-type: none;\n  float: left;\n}\nheader nav .nav-ul li a {\n  display: block;\n  height: 50px;\n  padding: 10px 24px;\n  line-height: 30px;\n  font-size: 14px;\n}\nheader nav .nav-ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .nav-ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .nav-ul li a:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .nav-ul li a:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign {\n  float: right;\n}\nheader nav .sign .not-logged {\n  display: block;\n  padding-right: 10px;\n}\nheader nav .sign .not-logged a {\n  font-size: 14px;\n  line-height: 50px;\n}\nheader nav .sign .not-logged a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .sign .not-logged #sign-in-bt {\n  padding-right: 8px;\n}\nheader nav .sign .logged .logged-user {\n  position: relative;\n  float: right;\n  background: #ffffff;\n  width: 120px;\n}\nheader nav .sign .logged .logged-user:hover .user-ul {\n  display: block;\n}\nheader nav .sign .logged .logged-user .user-message {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px;\n  cursor: pointer;\n  float: right;\n}\nheader nav .sign .logged .logged-user .user-message:hover {\n  background-color: #F5F5F5;\n}\nheader nav .sign .logged .logged-user .user-message span {\n  display: block;\n  float: left;\n}\nheader nav .sign .logged .logged-user .user-message .user-head {\n  width: 30px;\n  height: 30px;\n  background: url(" + __webpack_require__(8) + ") no-repeat;\n  background-size: cover;\n  border-radius: 4px;\n}\nheader nav .sign .logged .logged-user .user-message .user-name {\n  font-size: 10px;\n  color: #1F71E8;\n  font-weight: bold;\n  padding-left: 10px;\n  line-height: 30px;\n}\nheader nav .sign .logged .logged-user .user-ul {\n  display: none;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 120px;\n  z-index: 999;\n}\nheader nav .sign .logged .logged-user .user-ul .triangle {\n  height: 8px;\n  top: 2px;\n}\nheader nav .sign .logged .logged-user .user-ul ul {\n  border-radius: 4px;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n  background: #ffffff;\n  padding-top: 8px;\n  padding-bottom: 10px;\n  border: 1px solid #E1E4E7;\n}\nheader nav .sign .logged .logged-user .user-ul ul li {\n  list-style-type: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li i {\n  float: left;\n  font-size: 16px;\n  padding: 2px 10px 0 10px;\n  color: #888888 !important;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a {\n  width: 100%;\n  display: block;\n  padding: 5px 10px;\n  font-size: 10px;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign .logged .logged-message {\n  position: relative;\n  float: right;\n  padding-left: 20px;\n  padding-right: 20px;\n  cursor: pointer;\n  z-index: 999;\n}\nheader nav .sign .logged .logged-message:hover .message-box {\n  display: block;\n}\nheader nav .sign .logged .logged-message:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-message:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-message:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .sign .logged .logged-message:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign .logged .logged-message .iconfont {\n  font-size: 24px;\n  color: #888888;\n  line-height: 50px;\n}\nheader nav .sign .logged .logged-message .iconfont:hover {\n  color: #777777;\n}\nheader nav .sign .logged .logged-message .message-box {\n  display: none;\n  position: absolute;\n  top: 57px;\n  left: -120px;\n  width: 300px;\n  height: 260px;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\nheader nav .sign .logged .logged-message .message-box i {\n  height: 8px;\n  top: -8px;\n}\nheader nav .sign .logged .logged-message .message-box h6 {\n  text-align: center;\n  font-size: 10px;\n  color: #888888;\n  padding: 8px 10px 14px 10px;\n  border-bottom: 1px solid #F5F5F5;\n}\nheader nav .mobile-ul {\n  position: relative;\n}\nheader nav .mobile-ul #head-nav {\n  position: absolute;\n  right: 20px;\n  top: 5px;\n  font-size: 30px;\n  color: #888888;\n}\nheader nav .mobile-ul ul {\n  display: none;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 26%;\n  min-width: 100px;\n  border-top: 1px solid #E1E4E7;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\nheader nav .mobile-ul ul li {\n  width: 100%;\n  list-style-type: none;\n  text-indent: 10px;\n  border-top: 1px solid #F5F5F5;\n}\nheader nav .mobile-ul ul li a {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  display: block;\n  font-size: 10px;\n}\nheader nav .mobile-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul .logged-m {\n  display: none;\n}\n/* footer部分 */\nfooter {\n  background: #F5F5F5;\n}\nfooter .container {\n  background-color: #ffffff;\n  border-top: 1px solid #E1E4E7;\n  border-left: 1px solid #E1E4E7;\n  border-right: 1px solid #E1E4E7;\n}\nfooter .container .logo {\n  padding-top: 30px;\n  float: left;\n}\nfooter .container .foot-ul {\n  margin-left: 40%;\n}\nfooter .container .foot-ul ul {\n  float: left;\n  padding-left: 20px;\n  padding-top: 20px;\n}\nfooter .container .foot-ul ul li {\n  list-style-type: none;\n  padding: 15px 10px;\n}\nfooter .container .foot-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nfooter .container h5 {\n  padding-top: 10px;\n  padding-bottom: 5px;\n  text-align: center;\n  color: #888888;\n  font-size: 10px;\n}\n/* sign-box部分 */\n/* cut_picture部分 */\n.mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.65);\n}\n.cut-picture {\n  position: absolute;\n  left: 50%;\n  top: 51px;\n  width: 320px;\n  margin-left: -160px;\n  margin-top: 4vh;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.cut-picture #close-cut {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px;\n  font-size: 16px;\n  color: #aaaaaa;\n  cursor: pointer;\n}\n.cut-picture h3 {\n  font-size: 20px;\n  color: #888888;\n  text-align: center;\n  font-weight: bold;\n  padding: 10px 0 10px 0;\n}\n.cut-picture h4 {\n  font-size: 14px;\n  color: #aaaaaa;\n  text-align: center;\n}\n.cut-picture .pic-ctrl {\n  padding: 30px 40px;\n}\n.cut-picture .pic-ctrl canvas {\n  border: 1px solid #F5F5F5;\n  cursor: move;\n}\n.cut-picture .pic-ctrl .rank {\n  text-align: center;\n  margin: 0 auto;\n  padding: 10px 0;\n}\n.cut-picture .pic-ctrl .rank .iconfont {\n  display: inline-block;\n  font-size: 14px;\n  color: #888888;\n  vertical-align: top;\n}\n.cut-picture .pic-ctrl .rank .more {\n  font-size: 16px;\n}\n.cut-picture .pic-ctrl .rank input {\n  display: inline-block;\n  height: 4px;\n  width: 180px;\n  color: #888888;\n  border-radius: 10px;\n  outline: none;\n  background-color: #aaaaaa;\n  vertical-align: middle;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\n.cut-picture .pic-ctrl .rank input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n          appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  background-color: #888888;\n}\n.cut-picture .pic-ctrl button {\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  display: block;\n  width: 140px;\n  padding: 4px 0;\n  margin: 0 auto;\n  background-color: #4193ff;\n}\n.cut-picture .pic-ctrl button:hover {\n  background-color: #3082f9;\n}\n.cut-picture .pic-ctrl button:active {\n  background-color: #1F71E8;\n}\n/* 时间选择器 */\n.time-box-left {\n  position: absolute;\n  left: 0;\n  right: 60px;\n}\n@media (max-width: 768px) {\n  .time-box-left {\n    right: 26px;\n  }\n}\n@media (max-width: 992px) {\n  .time-box-left {\n    right: 50px;\n  }\n}\n@media (min-width: 992px) {\n  .time-box-left {\n    right: 70px;\n  }\n}\n.time-box-left .show-time {\n  width: 100%;\n  height: 32px;\n  color: #1F71E8;\n  font-size: 15px;\n  line-height: 32px;\n  padding-left: 20px;\n  border: 1px solid #E1E4E7;\n  border-radius: 4px;\n}\n@media (max-width: 768px) {\n  .time-box-left .show-time {\n    font-size: 10px;\n  }\n}\n.time-box-left .select-time {\n  display: none;\n  position: absolute;\n  top: 38px;\n  z-index: 1;\n  width: 100%;\n  height: auto;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.time-box-left .select-time .triangle {\n  height: 8px;\n  top: -8px;\n}\n.time-box-left .select-time .time-top {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\n.time-box-left .select-time .time-top div:nth-child(2) {\n  border-left: 1px solid #F5F5F5;\n  border-right: 1px solid #F5F5F5;\n}\n.time-box-left .select-time .time-top .time-col {\n  float: left;\n  width: 33%;\n  padding: 10px 10px;\n}\n.time-box-left .select-time .time-top .time-col i,\n.time-box-left .select-time .time-top .time-col input,\n.time-box-left .select-time .time-top .time-col h5 {\n  display: block;\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.time-box-left .select-time .time-top .time-col i {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: #888888;\n  cursor: pointer;\n  padding: 3px 0;\n}\n.time-box-left .select-time .time-top .time-col i:link {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-top .time-col i:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-top .time-col i:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.time-box-left .select-time .time-top .time-col i:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n@media (min-width: 768px) {\n  .time-box-left .select-time .time-top .time-col h5 {\n    font-size: 16px;\n    font-weight: bold;\n    padding-bottom: 20px;\n  }\n}\n.time-box-left .select-time .time-top .time-col input {\n  border: none;\n  width: 100%;\n  text-align: center;\n  box-shadow: none;\n  color: #1F71E8;\n  font-weight: bold;\n  font-size: 15px;\n}\n.time-box-left .select-time .time-top .time-col input:focus {\n  border: 1px solid #467EAD;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-top .time-col input {\n    font-size: 11px;\n  }\n}\n.time-box-left .select-time .time-bottom {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-top: 1px solid #E1E4E7;\n}\n.time-box-left .select-time .time-bottom button {\n  padding: 6px 20px;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n.time-box-left .select-time .time-bottom button:link {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-bottom button:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-bottom button:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.time-box-left .select-time .time-bottom button:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.time-box-left .select-time .time-bottom .get-time {\n  float: left;\n  margin-left: 30px;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-bottom .get-time {\n    margin-left: 10px;\n    padding: 6px 10px;\n  }\n}\n.time-box-left .select-time .time-bottom .close-time {\n  float: right;\n  margin-right: 30px;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-bottom .close-time {\n    margin-right: 10px;\n    padding: 6px 10px;\n  }\n}\n.start {\n  position: absolute;\n  top: 2px;\n  padding: 6px 8px;\n  cursor: pointer;\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .start {\n    right: -20px;\n  }\n}\n@media (max-width: 992px) {\n  .start {\n    right: 0;\n  }\n}\n@media (min-width: 992px) {\n  .start {\n    right: 10px;\n    padding: 4px 10px;\n  }\n}\n.start:hover {\n  background-color: #3082f9;\n}\n.start:active {\n  background-color: #1F71E8;\n}\n.start:hover {\n  background-color: #3082f9;\n}\n.start:active {\n  background-color: #1F71E8;\n}\n/* skill-box */\n.skill-box {\n  position: relative;\n  padding: 0;\n}\n.new-skill-box {\n  margin-top: 20px;\n}\n.skill-box-top {\n  width: 100%;\n}\n.skill-box-top .skill-show {\n  float: left;\n  width: 70%;\n  padding: 4px;\n  min-height: 112px;\n  border: 1px solid #E1E4E7;\n  border-radius: 4px;\n}\n.skill-box-top .skill-show span {\n  float: left;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n  padding: 4px;\n  margin-left: 4px;\n  margin-top: 4px;\n  cursor: pointer;\n}\n.skill-box-top .skill-show + div {\n  float: left;\n  width: 30%;\n  padding-left: 20px;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div {\n    padding-left: 6px;\n  }\n}\n.skill-box-top .skill-show + div .select-skill,\n.skill-box-top .skill-show + div #skill-people {\n  display: block;\n  padding: 5px;\n}\n.skill-box-top .skill-show + div .select-skill {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  padding: 4px 20px;\n}\n.skill-box-top .skill-show + div .select-skill:hover {\n  background-color: #3082f9;\n}\n.skill-box-top .skill-show + div .select-skill:active {\n  background-color: #1F71E8;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div .select-skill {\n    padding: 5px 13px;\n  }\n}\n.skill-box-top .skill-show + div .skill-people {\n  margin-top: 14px;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div .skill-people {\n    padding: 4px;\n  }\n}\n.skill-box-top .skill-show + div .delete {\n  font-size: 22px;\n  margin-top: 14px;\n  display: block;\n  padding-left: 20px;\n  color: #888888;\n  cursor: pointer;\n}\n.skill-box-top .skill-show + div .delete:link {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.skill-list {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 70%;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n@media (max-width: 768px) {\n  .skill-list {\n    width: 100%;\n  }\n}\n.skill-list .triangle {\n  top: -8px;\n}\n.skill-list ul,\n.skill-list li {\n  margin: 0;\n  padding: 4px 0;\n  cursor: pointer;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.skill-list .skill-ul-left li {\n  width: 25%;\n  height: auto;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border-right: 1px solid #F5F5F5;\n  overflow: hidden;\n}\n.skill-list .skill-ul-left li ul {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 25%;\n  width: 25%;\n}\n.skill-list .skill-ul-left li ul .triangle {\n  top: -8px;\n}\n.skill-list .skill-ul-left li ul li {\n  width: 100%;\n}\n.skill-list .skill-ul-left li ul li div {\n  display: none;\n  width: 200%;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  padding: 4px;\n}\n.skill-list .skill-ul-left li ul li div span {\n  position: relative;\n  font-size: 10px;\n  display: block;\n  float: left;\n  padding: 4px;\n  margin-right: 6px;\n  margin-top: 6px;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .skill-list .skill-ul-left li ul li div span {\n    margin-right: 2px;\n    margin-top: 2px;\n    padding: 2px;\n  }\n}\n.skill-bottom {\n  border-top: 1px solid #F5F5F5;\n  padding: 14px 20px;\n}\n.skill-bottom button {\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n  padding: 6px 14px;\n}\n.skill-bottom button:link {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-bottom button:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-bottom button:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.skill-bottom button:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.skill-bottom .skill-sure {\n  float: left;\n}\n.skill-bottom .skill-cancle {\n  float: right;\n}\n.skill-active {\n  background-color: #63b5ff !important;\n  color: #ffffff;\n}\nbody,\nul,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nol,\nli,\np,\nform,\nfieldset,\ntable,\ntd,\nimg,\ndiv,\ndl,\ndt,\ndd,\ninput {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-size: 12px;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\nimg,\ninput {\n  border: none;\n}\nli {\n  list-style: none;\n}\ninput,\nselect,\ntextarea {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\na {\n  text-decoration: none;\n}\n/*登录注册*/\n#common-login,\n#common-register,\n#common-checkLogin,\n#common-forget {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 1000px;\n  z-index: 9999;\n  display: none;\n  background-color: #ffffff;\n}\n.tea-register,\n.stu-register,\n.tea-checkLogin,\n.stu-checkLogin {\n  position: relative;\n  z-index: 69999;\n  float: left;\n  width: 120px;\n  height: 80px;\n  margin-top: 20%;\n  margin-left: 50px;\n  line-height: 80px;\n  font-size: 20px;\n  border-radius: 5px;\n  text-align: center;\n  cursor: pointer;\n  background: #EEE;\n}\n.tea-register,\n.tea-checkLogin {\n  margin-left: 40%;\n}\n.lo-container,\n.re-container {\n  z-index: 99999;\n  position: relative;\n  width: 300px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px #CCC;\n  margin-top: 10%;\n  margin-left: 40%;\n  border: 1px solid #CCC;\n}\n.re-container {\n  display: none;\n}\n.out,\n.re-out,\n.forget-out,\n.forget-pwdOut {\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: bold;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #B3B3B3;\n}\n.out:hover,\n.re-out:hover,\n.forget-out:hover,\n.forget-pwdOut:hover {\n  background: #787878;\n}\nh1 {\n  margin: 10px 0 !important;\n  text-align: center;\n  font-weight: bold;\n  font-size: 20px !important;\n}\nh2 {\n  margin-bottom: 10px !important;\n  text-align: center;\n  font-size: 16px !important;\n  color: #888 !important;\n}\n#uname,\n#pwd,\n#re-uname,\n#re-pwd,\n#re-email {\n  width: 200px;\n}\n.div-uname,\n.div-pwd,\n.re-div-uname,\n.re-div-pwd,\n.re-div-email {\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.div-pwd,\n.re-div-pwd,\n.re-div-email {\n  border-top: none;\n}\n.img-validate,\n.re-img-validate {\n  line-height: 48px;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.img-validate input,\n.re-img-validate input {\n  height: 30px;\n  border: 1px solid #CCC;\n  text-indent: 6px;\n  width: 80px !important;\n}\n#canvas {\n  position: absolute;\n  left: 135px;\n  top: 170px;\n  width: 80px;\n  height: 40px;\n  margin: 4px 10px;\n  text-indent: 10px;\n  line-height: 40px;\n  color: red;\n  font-size: 20px;\n  background-color: black;\n}\n.reload {\n  position: absolute;\n  right: 12px;\n  display: inline-block;\n  height: 20px;\n  line-height: 20px;\n  margin-top: 4px;\n  text-indent: 2px;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #CCC;\n}\n.bt-login {\n  line-height: 36px;\n  color: #fff;\n  margin: 10px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #0077d9;\n}\n#remember {\n  margin-left: 10px;\n  margin-bottom: 16px;\n}\n.unlogin {\n  cursor: pointer;\n}\n.unlogin:hover {\n  color: red;\n}\n.register {\n  float: right;\n  margin-top: 0;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.p-login,\n.p-pwd,\n.p-uname,\n.p-validate {\n  position: absolute;\n  display: inline-block;\n  margin-left: -10px;\n  width: 90px;\n  height: 32px;\n  line-height: 16px;\n  color: red;\n}\n.p-login {\n  margin-left: 4px;\n  line-height: 18px;\n}\n.p-validate {\n  text-indent: -10px;\n  margin-left: 10px;\n  top: 196px;\n  left: 240px;\n}\n.p-uname {\n  top: 86px;\n}\n.p-pwd {\n  top: 134px;\n}\n#re-validate {\n  margin: 0 10px ;\n}\n.re-reload {\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  margin-top: 10px;\n  text-indent: 2px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.re-bt-register {\n  line-height: 36px;\n  color: #fff;\n  margin: 10px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #0077d9;\n}\n.re-unlogin {\n  margin-left: 10px;\n}\n.re-bt-login {\n  display: inline-block;\n  margin-bottom: 16px;\n  cursor: pointer;\n  color: #259;\n}\n.re-p-validate,\n.re-p-pwd,\n.re-p-uname,\n.re-p-email {\n  position: absolute;\n  display: inline-block;\n  margin-top: 2px;\n  margin-left: -1px;\n  width: 80px;\n  height: 32px;\n  line-height: 16px;\n  color: red;\n}\n.re-p-validate {\n  width: 50px;\n  margin-left: 5px;\n  text-indent: -4px;\n}\n.re-p-uname {\n  top: 82px;\n}\n.re-p-pwd {\n  top: 134px;\n}\n.re-p-email {\n  top: 180px;\n}\n.re-p-validate {\n  top: 226px;\n}\n.re-promot {\n  display: inline-block;\n  text-indent: 10px;\n  color: red;\n}\n.forget-validate,\n.forget-pwd {\n  width: 300px;\n  position: relative;\n  border-radius: 10px;\n  box-shadow: 0 0 10px #CCC;\n  margin-top: 10%;\n  margin-left: 40%;\n  border: 1px solid #CCC;\n}\n.forget-validate p,\n.forget-pwd p {\n  margin: 10px 0;\n  text-align: center;\n  font-size: 18px;\n}\n.forget-validate input,\n.forget-pwd input {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.forget-validate input input,\n.forget-pwd input input {\n  width: 50%;\n}\n.forget-validate .forget-getValidateDiv,\n.forget-pwd .forget-getValidateDiv {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.forget-validate .forget-getValidateDiv input,\n.forget-pwd .forget-getValidateDiv input {\n  float: left;\n  width: 50%;\n  border-top: none;\n}\n.forget-validate .forget-getValidateDiv .forget-reload,\n.forget-pwd .forget-getValidateDiv .forget-reload {\n  width: 80px;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 4px;\n  margin-left: 40px;\n  text-indent: -2px;\n  border-radius: 5px;\n  text-align: center;\n}\n.forget-validate #forget-surePwd,\n.forget-pwd #forget-surePwd,\n.forget-validate #forget-email,\n.forget-pwd #forget-email {\n  border-top: none;\n}\n.forget-validate #forget-email,\n.forget-pwd #forget-email {\n  border-bottom: none;\n}\n.forget-validate .forget-pwdPromot,\n.forget-pwd .forget-pwdPromot,\n.forget-validate .forget-promot,\n.forget-pwd .forget-promot {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  margin: 5px 0;\n  color: red;\n}\n.forget-validate .forget-pwdBtn,\n.forget-pwd .forget-pwdBtn,\n.forget-validate .forget-btn,\n.forget-pwd .forget-btn {\n  width: 80px;\n  height: 30px;\n  margin-left: 36%;\n  margin-bottom: 5px;\n}\n.forget-pwd {\n  display: none;\n}\n.user .container {\n  margin-top: 5px;\n  min-height: 700px;\n  max-height: 900px;\n}\n.user .container .user-nav {\n  float: left;\n  width: 20%;\n}\n.user .container .user-nav li {\n  display: block;\n  height: 50px;\n  line-height: 50px;\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-right: -2px;\n  text-align: center;\n  border: 1px solid #EEE;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: #E1E4E7;\n}\n.user .container .user-nav li:hover {\n  cursor: pointer;\n}\n.user .container .user-nav .showLiList {\n  background-color: #96B97D;\n}\n.user .container .user-section {\n  float: left;\n  width: 80%;\n  position: relative;\n}\n.user .container .user-section > div {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 700px;\n  max-height: 900px;\n  overflow-y: auto;\n  overflow-x: auto;\n  border: 1px solid #EEE;\n}\n.user .container .user-section > div p {\n  margin-top: 20px;\n  margin-left: 20px;\n  color: red;\n  font-size: 16px;\n}\n.user .container .user-section .showSectionDiv {\n  display: block;\n}\n.user .container .user-section .user-messageCenter,\n.user .container .user-section .user-openProject,\n.user .container .user-section .user-joinProject,\n.user .container .user-section .user-teaOwnerData,\n.user .container .user-section .user-stuOwnerData {\n  margin-top: 20px;\n  margin-left: 40px;\n  font-size: 16px;\n  table-layout: fixed;\n  border: 1px solid #96B97D;\n}\n.user .container .user-section .user-messageCenter tr,\n.user .container .user-section .user-openProject tr,\n.user .container .user-section .user-joinProject tr,\n.user .container .user-section .user-teaOwnerData tr,\n.user .container .user-section .user-stuOwnerData tr {\n  min-height: 40px;\n  text-align: center;\n}\n.user .container .user-section .user-messageCenter tr th,\n.user .container .user-section .user-openProject tr th,\n.user .container .user-section .user-joinProject tr th,\n.user .container .user-section .user-teaOwnerData tr th,\n.user .container .user-section .user-stuOwnerData tr th {\n  width: 160px;\n  text-align: center;\n  line-height: 40px;\n  background-color: #E1EDFF;\n}\n.user .container .user-section .user-messageCenter tr td,\n.user .container .user-section .user-openProject tr td,\n.user .container .user-section .user-joinProject tr td,\n.user .container .user-section .user-teaOwnerData tr td,\n.user .container .user-section .user-stuOwnerData tr td {\n  width: 160px;\n  max-width: 160px;\n  height: 40px;\n  min-height: 40px;\n  max-height: 80px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user .container .user-section .user-messageCenter tr button,\n.user .container .user-section .user-openProject tr button,\n.user .container .user-section .user-joinProject tr button,\n.user .container .user-section .user-teaOwnerData tr button,\n.user .container .user-section .user-stuOwnerData tr button {\n  height: 26px;\n  line-height: 22px;\n  font-size: 14px;\n  text-align: center;\n}\n.user .container .user-section .user-messageCenter tr button:nth-child(1),\n.user .container .user-section .user-openProject tr button:nth-child(1),\n.user .container .user-section .user-joinProject tr button:nth-child(1),\n.user .container .user-section .user-teaOwnerData tr button:nth-child(1),\n.user .container .user-section .user-stuOwnerData tr button:nth-child(1) {\n  margin-right: 10px;\n}\n.user .container .user-section .user-openProject tr td,\n.user .container .user-section .user-joinProject tr td {\n  width: 110px;\n  max-width: 110px;\n}\n.user .container .user-section .user-projectUpdate {\n  width: 100%;\n  display: none;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.user .container .user-section .user-projectUpdate .container {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  .user .container .user-section .user-projectUpdate .container h4 {\n    padding-left: 30px;\n  }\n}\n.user .container .user-section .user-teaOwnerData,\n.user .container .user-section .user-stuOwnerData {\n  display: none;\n}\n.user .container .user-section .user-teaOwnerData tr th,\n.user .container .user-section .user-stuOwnerData tr th {\n  width: 300px;\n}\n.user .container .user-section .user-teaOwnerData tr td,\n.user .container .user-section .user-stuOwnerData tr td {\n  width: 300px;\n  max-width: 300px;\n}\n.user .container .user-section .user-teaOwnerData tr {\n  min-height: 50px;\n}\n.user .container .user-section .user-teaOwnerData tr th,\n.user .container .user-section .user-teaOwnerData tr td {\n  height: 50px;\n}\n.showContentContainer {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 1000px;\n  background-color: #FFF;\n  opacity: 0.9;\n}\n.showContentContainer .showDetailContent {\n  position: absolute;\n  top: 20%;\n  left: 35%;\n  min-width: 400px;\n  max-width: 500px;\n  min-height: 200px;\n  max-height: 300px;\n  border-top-right-radius: 10px;\n  border: 1px solid #EEE;\n  background-color: #EEE;\n}\n.showContentContainer .showDetailContent .show-out {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: bold;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #B3B3B3;\n}\n.showContentContainer .showDetailContent .show-out:hover {\n  background: #787878;\n}\n.showContentContainer .showDetailContent .showContent {\n  overflow-x: auto;\n  width: 100%;\n  max-width: 100%;\n  max-height: 270px;\n  word-break: break-all;\n  margin-top: 10px;\n  text-indent: 20px;\n  font-size: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = "<div class=\"time-box-left\">\n  <div class=\"show-time\"></div>\n  <div class=\"select-time\">\n    <i class=\"triangle\"></i>\n    <div class=\"time-top\">\n      <div class=\"time-col\">\n        <h5>年</h5>\n        <i class=\"iconfont year up\">&#xe614;</i>\n        <input type=\"text\" class=\"num-y\" value=\"2017\" maxlength=\"5\">\n        <i class=\"iconfont year down\">&#xe615;</i>\n      </div>\n      <div class=\"time-col\">\n        <h5>月</h5>\n        <i class=\"iconfont month up\">&#xe614;</i>\n        <input class=\"num-m\" type=\"text\" value=\"8\" maxlength=\"3\">\n        <i class=\"iconfont month down\">&#xe615;</i>\n      </div>\n      <div class=\"time-col\">\n        <h5>日</h5>\n        <i class=\"iconfont day up\">&#xe614;</i>\n        <input class=\"num-d\" type=\"text\" value=\"18\" maxlength=\"3\">\n        <i class=\"iconfont day down\">&#xe615;</i>\n      </div>\n    </div>\n    <div class=\"time-bottom clearfix\">\n      <button class=\"get-time\" type=\"button\">确定</button>\n      <button class=\"close-time\" type=\"button\">取消</button>\n    </div>\n  </div>\n</div>\n<button class=\"start\" type=\"button\">选择</button>";

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = "<div class=\"user common-width\">\n  <div class=\"container clearfix\">\n  \t<nav class=\"user-nav\">\n    \t<ul class=\"user-navUl\">\n    \t\t<li class=\"showLiList\">消息中心</li>\n    \t\t<li>项目历史</li>\n    \t\t<li>个人资料</li>\n    \t\t<li>系统中心</li>\n    \t</ul>\n    </nav>\n    <section class=\"user-section\">\n    \t<div class=\"showSectionDiv\">\n    \t\t<table border=\"1\" cellspacing=\"\" cellpadding=\"5\" class=\"user-messageCenter\">\n    \t\t\t<caption align=\"left\">收到的消息</caption>\n    \t\t\t<thead><th>发件人</th><th>内容</th><th>时间</th><th>联系方式</th><th>操作</th></thead>\n    \t\t\t<tr>\n    \t\t\t\t<td>Detanx1</td><td>sdasd</td><td>2017-6-1</td><td>18200176500</td>\n    \t\t\t\t<td>\n    \t\t\t\t\t<button name=\"show\">查看</button><button name=\"delete\">删除</button>\n    \t\t\t\t</td>\n    \t\t\t</tr>\n    \t\t\t<tr>\n    \t\t\t\t<td>Detanx2</td><td>asddd</td><td>2017-6-2</td><td>18200176500</td>\n    \t\t\t\t<td>\n    \t\t\t\t\t<button name=\"show\">查看</button><button name=\"delete\">删除</button>\n    \t\t\t\t</td>\n    \t\t\t</tr>\n    \t\t\t<tr>\n    \t\t\t\t<td>Detanx3</td><td>asdddd</td><td>2017-6-3</td><td>18200176500</td>\n    \t\t\t\t<td>\n    \t\t\t\t\t<button name=\"show\">查看</button><button name=\"delete\">删除</button>\n    \t\t\t\t</td>\n    \t\t\t</tr>\n    \t\t\t<tr>\n    \t\t\t\t<td>Detanx4</td><td>asddsa</td><td>2017-6-4</td><td>18200176500</td>\n    \t\t\t\t<td>\n    \t\t\t\t\t<button name=\"show\">查看</button><button name=\"delete\">删除</button>\n    \t\t\t\t</td>\n    \t\t\t</tr>\n    \t\t</table>\n    \t</div>\n    \t\n    \t<div>\n    \t\t<table border=\"1\" cellspacing=\"\" cellpadding=\"5\" class=\"user-openProject\">\n    \t\t\t<caption align=\"left\">发起的项目</caption> \n    \t\t\t<thead><th>项目名称</th><th>项目类型</th><th>项目简介</th><th>起止时间</th><th>人员要求</th><th>操作</th></thead>\n    \t\t\t<tr>\n    \t\t\t\t<td>Detanx</td><td>游戏开发</td><td>开发一个单机游戏</td><td>2017-6-19~2017-8-20</td><td>Spring,SpringBoot</td>\n    \t\t\t\t<td><button name=\"edit\">编辑</button><button name=\"delete\">删除</button></td>\n    \t\t\t</tr>\n    \t\t</table>\n    \t\t<table border=\"1\" cellspacing=\"\" cellpadding=\"5\" class=\"user-joinProject\">\n    \t\t\t<caption align=\"left\">参与的项目</caption> \n    \t\t\t<thead><th>项目名称</th><th>项目类型</th><th>项目简介</th><th>起止时间</th><th>人员要求</th><th>操作</th></thead>\n    \t\t\t<tr>\n    \t\t\t\t<td>Detanx</td><td>游戏开发</td><td>开发一个单机游戏</td><td>2017-6-19</td><td>前端</td>\n    \t\t\t\t<td><button name=\"show\">查看</button><button name=\"delete\">删除</button></td>\n    \t\t\t</tr>\n    \t\t</table>\n    \t\t<div class=\"user-projectUpdate\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t    <form>\n\t\t\t\t      <div class=\"input-box\">\n\t\t\t\t        <div class=\"row\">\n\t\t\t\t          <h4 class=\"col-xs-2 col-sm-2\">项目名称</h4>\n\t\t\t\t          <input id=\"name\" type=\"text\" class=\"col-xs-5 col-md-4\">\n\t\t\t\t          <i class=\"iconfont error\">&#xe648;</i>\n\t\t\t\t        </div>\n\t\t\t\t      </div>\n\t\t\t\t      <div class=\"input-box\">\n\t\t\t\t        <div class=\"row\">\n\t\t\t\t          <h4 class=\"col-xs-2 col-sm-2\">项目类型</h4>\n\t\t\t\t          <input id=\"type\" type=\"text\" class=\"col-xs-5 col-md-4\">\n\t\t\t\t          <i class=\"iconfont error\">&#xe648;</i>\n\t\t\t\t        </div>\n\t\t\t\t      </div>\n\t\t\t\t      <div class=\"input-box\">\n\t\t\t\t        <div class=\"row\">\n\t\t\t\t          <h4 class=\"col-xs-2 col-sm-2\">起始时间</h4>\n\t\t\t\t          <div class=\"col-xs-5 col-sm-6 col-md-4 time-box\"></div>\n\t\t\t\t          <i class=\"iconfont error\">&#xe648;</i>\n\t\t\t\t        </div>\n\t\t\t\t      </div>\n\t\t\t\t      <div class=\"input-box\">\n\t\t\t\t        <div class=\"row\">\n\t\t\t\t          <h4 class=\"col-xs-2 col-sm-2\">结束时间</h4>\n\t\t\t\t          <div class=\"col-xs-5 col-sm-6 col-md-4 time-box\"></div>\n\t\t\t\t          <i class=\"iconfont error\">&#xe648;</i>\n\t\t\t\t        </div>\n\t\t\t\t      </div>\n\t\t\t\t      <div class=\"input-box\">\n\t\t\t\t        <div class=\"row\">\n\t\t\t\t          <h4 class=\"col-xs-2 col-sm-2\">需要人数</h4>\n\t\t\t\t          <select class=\"skill-people\">\n\t\t\t\t            <option value=\"1\">1人</option>\n\t\t\t\t            <option value=\"2\">2人</option>\n\t\t\t\t            <option value=\"3\">3人</option>\n\t\t\t\t            <option value=\"4\">4人</option>\n\t\t\t\t            <option value=\"5\">5人</option>\n\t\t\t\t            <option value=\"6\">6人</option>\n\t\t\t\t          </select>\n\t\t\t\t        </div>\n\t\t\t\t      </div>\n\t\t\t\t      <div class=\"input-box\">\n\t\t\t\t        <div class=\"row\">\n\t\t\t\t          <h4 class=\"col-xs-2 col-sm-2\">人员要求</h4>\n\t\t\t\t          <div class=\"col-xs-5 col-md-5 skill-content\">\n\t\t\t\t            <div class=\"skill-box\"></div>\n\t\t\t\t          </div>\n\t\t\t\t          <i class=\"iconfont error\">&#xe648;</i>\n\t\t\t\t        </div>\n\t\t\t\t      </div>\n\t\t\t\t      <div class=\"input-box\">\n\t\t\t\t        <div class=\"row\">\n\t\t\t\t          <h4 class=\"col-xs-2 col-sm-2\">概述</h4>\n\t\t\t\t          <textarea rows=\"4\" id=\"summary\" type=\"text\" class=\"col-xs-5 col-md-4\"></textarea>\n\t\t\t\t          <i class=\"iconfont error\">&#xe648;</i>\n\t\t\t\t        </div>\n\t\t\t\t      </div>\n\t\t\t\t    </form>\n\t\t\t\t    <div class=\"row\">\n\t\t\t\t      <div class=\"col-xs-2 col-sm-2\"></div>\n\t\t\t\t      <button type=\"button\" id=\"submit\" class=\"col-xs-5 col-md-1\">提交</button>\n\t\t\t\t    </div>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n    \t</div>\n    \t\n    \t<div>\n    \t\t<table border=\"1\" cellspacing=\"\" cellpadding=\"5\" class=\"user-teaOwnerData\">\n    \t\t\t<caption align=\"left\">个人资料</caption>\n    \t\t\t<tr><td>姓名</td><td>唐淼</td></tr>\n    \t\t\t<tr><td>性别</td><td>女</td></tr>\n    \t\t\t<tr><td>所在院校</td><td>西南石油大学</td></tr>\n    \t\t\t<tr><td>所在院系</td><td>计算机科学学院</td></tr>\n    \t\t\t<tr><td>职称</td><td>教授</td></tr>\n    \t\t\t<tr><td>QQ</td><td>1286335864</td></tr>\n    \t\t\t<tr><td colspan=\"2\"><button class=\"user-update\">修改/完善</button></td></tr>\n    \t\t</table>\n    \t\t<table border=\"1\" cellspacing=\"\" cellpadding=\"5\" class=\"user-stuOwnerData\">\n    \t\t\t<caption align=\"left\">个人资料</caption>\n    \t\t\t<tr><td>姓名</td><td>detansx</td></tr>\n    \t\t\t<tr><td>学历</td><td>本科</td></tr>\n    \t\t\t<tr><td>性别</td><td>女</td></tr>\n    \t\t\t<tr><td>所在院校</td><td>西南石油大学</td></tr>\n    \t\t\t<tr><td>所在院系</td><td>计算机科学学院</td></tr>\n    \t\t\t<tr><td>专业</td><td>软件工程</td></tr>\n    \t\t\t<tr><td>入学时间</td><td>2014年</td></tr>\n    \t\t\t<tr><td>毕业时间</td><td>2018年</td></tr>\n    \t\t\t<tr><td>技能</td><td>Spring,SpringBoot</td></tr>\n    \t\t\t<tr><td>项目经验</td><td>无</td></tr>\n    \t\t\t<tr><td>QQ</td><td>1286335864</td></tr>\n    \t\t\t<tr><td>自我评价</td><td>good</td></tr>\n    \t\t\t<tr><td colspan=\"2\"><button class=\"user-update\">修改/完善</button></td></tr>\n    \t\t</table>\n    \t</div>\n    \t\n    \t<div>\n    \t\t<p>敬请期待！</p>\n    \t</div>\n    </section>\n  </div>\n  <div class=\"showContentContainer\">\n\t\t<div class=\"showDetailContent\">\n\t\t\t<span class=\"show-out\">X</span>\n\t\t\t<div class=\"showContent\"></div>\n\t\t</div>\n\t</div>\n</div>\n\n";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(15, function() {
			var newContent = __webpack_require__(15);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = "<div class=\"skill-box-top clearfix\">\n  <div class=\"skill-show\"></div>\n  <div>\n    <button type=\"button\" class=\"select-skill\">选择</button>\n  </div>\n</div>\n<div class=\"skill-list\">\n  <ul class=\"skill-ul-left clearfix\">\n    <li class=\"skill-li-left\">IT\n      <ul class=\"skill-ul-mid\">\n        <li class=\"skill-li-mid\">前端开发\n          <div>\n            <span data-skill='HTML/CSS'>HTML/CSS</span>\n            <span data-skill='javaScript'>javaScript</span>\n            <span data-skill='HTML5'>HTML5</span>\n            <span data-skill='CSS3'>CSS3</span>\n            <span data-skill='jQuery'>jQuery</span>\n            <span data-skill='Node.js'>Node.js</span>\n            <span data-skill='Bootstrap'>Bootstrap</span>\n            <span data-skill='Less/Sass'>Less/Sass</span>\n          </div>\n        </li>\n        <li class=\"skill-li-mid\">后端开发\n          <div>\n            <span data-skill=\"java\">java</span>\n            <span data-skill=\"Spring\">Spring</span>\n            <span data-skill=\"SpringBoot\">Spring Boot</span>\n            <span data-skill=\"PHP\">PHP</span>\n            <span data-skill=\"Python\">Python</span>\n            <span data-skill=\"C#\">C#</span>\n            <span data-skill=\"C++\">C++</span>\n          </div>\n        </li>\n        <li class=\"skill-li-mid\">数据库\n          <div>\n            <span data-skill=\"MySQl\">MySQl</span>\n            <span data-skill=\"MongoDB\">MongoDB</span>\n            <span data-skill=\"Oracel\">Oracel</span>\n            <span data-skill=\"SQLServer\">SQL Server</span>\n          </div>\n        </li>\n        <li class=\"skill-li-mid\">UI设计\n          <div>\n            <span data-skill=\"PS\">PS</span>\n            <span data-skill=\"AI\">AI</span>\n          </div>\n        </li>\n        <li class=\"skill-li-mid\">爬虫\n          <div>\n            <span data-skill=\"PHP\">PHP</span>\n            <span data-skill=\"Python\">Python</span>\n          </div>\n        </li>\n        <li class=\"skill-li-mid\">移动开发\n          <div>\n            <span data-skill=\"Android\">Android</span>\n            <span data-skill=\"IOS\">IOS</span>\n            <span data-skill=\"Unity3D\">Unity 3D</span>\n            <span data-skill=\"Cocos2d-x\">Cocos2d-x</span>\n          </div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n  </ul>\n  <div class=\"skill-bottom clearfix\">\n    <button type=\"button\" class=\"skill-sure\">确定</button>\n    <button type=\"button\" class=\"skill-cancle\">取消</button>\n  </div>\n</div>";

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var skill_box_str = __webpack_require__(5);
function skill () {};
skill.prototype = {
  //需要频繁操作的技能盒子
  box: null,
  info:function () {
    var skill_box = $(".skill-box");
    skill_box.html(skill_box_str);
    this.box = $(".skill-list");
  },
  //入口
  action:function () {
    this.info();
    this.addEvent();
  },
  //根据显示隐藏技能框
  showSkillBox:function () {
    //若点击的技能表单是显示的，则隐藏它
    if (this.box.css("display") === "block") {
      this.box.slideUp(200);
    //点击的技能表单是隐藏的，则显示它
    //并且隐藏其他显示的技能表单
    } else {
      this.box.slideDown(200);
    }
  },
  //显示选取的技能
  showSkill:function () {
    this.showSkillBox();
    var skill = this.box.find(".skill-active"),
        skill_show = $(".skill-show");
    if (skill[0]) {
      skill_show.empty();
      for (var i = 0;i < skill.length;i++) {
        var data = skill.eq(i).attr("data-skill");
        skill_show.append("<span data-show-skill='"+data+"'>"+data+"</span>");
      }
    }
  },
  //绑定事件
  addEvent:function () {
    var that = this;
    $("body").on("click",".skill-box",function (event) {
      var target = $(event.target);
      //技能栏显示隐藏
      if (target.hasClass("select-skill") || target.hasClass("skill-cancle")) {
        that.showSkillBox();
      //技能栏内的菜单切换
      } 
      else if (target.hasClass("skill-li-left")) {
        target.find("ul").css("display","block");
        $(".skill-li-left").not(target).find("ul").css("display","none");
      } 
      else if (target.hasClass("skill-li-mid")) {
        target.find("div").css("display","block");
        $(".skill-li-mid").not(target).find("div").css("display","none");
      //点击激活技能
      } 
      else if (target.attr("data-skill")) {
      	var flag = target.hasClass("skill-active");
        if (flag) {
        	console.log("0")
        	target.removeClass("skill-active")
        	return false;
        } else {
  				console.log("2")
          target.addClass("skill-active");
          return false;
        }
      //确定技能选择
      } 
      else if (target.hasClass("skill-sure")) {
        that.showSkill();
      //点击删除技能,并且将技能选择栏中的激活状态去除
      } 
      else if (target.attr("data-show-skill")) {
        var skill = target.attr("data-show-skill");
        that.box.find("span[data-skill='"+skill+"']").removeClass("skill-active");
        target.remove();
      }
    });
  }
};
module.exports = skill;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(30);
__webpack_require__(9);
const content_path = __webpack_require__(1);
var user_str = __webpack_require__(26);
//time组件
const time = __webpack_require__(10);
const timeGo = new time();
//skill技能组件
const skill_box_str = __webpack_require__(5);
const skillBox = __webpack_require__(6);
const skill_box = new skillBox();

$("header").after(user_str);

(function($){
	var user = {
		//用户类型
		userType:"",
		//token
		token:"",
		//老师表单存储对象
    teacher_form:{
      username: "",
      sex:"",
      image: "",
      university: "",
      academy: "",
      rank: "",
      qq: ""
    },
    //学生表单存储对象
    student_form:{
      username: "",
      sex: "",
      image: "",
      university: "",
      academy: "",
      major: "",
      edu_background: "",
      entry_university: "",
      leave_university: "",
      skills: [],
      experience: "",
      self_feel: "",
      qq: ""
    },
    iniStudentForm:function(){
    	let that = this;
    	that.student_form.username = $('.user-stuOwnerData tr:eq(0) td:eq(1)').html();
  		that.student_form.edu_background = $('.user-stuOwnerData tr:eq(1) td:eq(1)').html();
  		that.student_form.sex = $('.user-stuOwnerData tr:eq(2) td:eq(1)').html();
  		that.student_form.image = $('.user-stuOwnerData tr:eq(0) td:eq(1)').html();
  		that.student_form.university = $('.user-stuOwnerData tr:eq(3) td:eq(1)').html();
  		that.student_form.academy = $('.user-stuOwnerData tr:eq(4) td:eq(1)').html();
  		that.student_form.major = $('.user-stuOwnerData tr:eq(5) td:eq(1)').html();
  		that.student_form.entry_university = $('.user-stuOwnerData tr:eq(6) td:eq(1)').html();
  		that.student_form.leave_university = $('.user-stuOwnerData tr:eq(7) td:eq(1)').html();
  		that.student_form.experience = $('.user-stuOwnerData tr:eq(9) td:eq(1)').html();
  		that.student_form.self_feel = $('.user-stuOwnerData tr:eq(11) td:eq(1)').html();
  		that.student_form.qq = $('.user-stuOwnerData tr:eq(10) td:eq(1)').html();
  		let skillsData = $('.user-stuOwnerData tr:eq(8) td:eq(1)').html();
  		let skillArray = skillsData.split(",");
  		let skillArrayLength = skillArray.length;
  		for( let i = 0; i < skillArrayLength; i ++){
  			that.student_form.skills[i] = skillArray[i];
  		}
    },
    function(){
    	let that = this;
    	that.teacher_form.username = $('.user-teaOwnerData tr:eq(0) td:eq(1)').html();
  		that.teacher_form.sex = $('.user-teaOwnerData tr:eq(1) td:eq(1)').html();
  		that.teacher_form.image = $('.user-teaOwnerData tr:eq(0) td:eq(1)').html();
  		that.teacher_form.university = $('.user-teaOwnerData tr:eq(2) td:eq(1)').html();
  		that.teacher_form.academy = $('.user-teaOwnerData tr:eq(3) td:eq(1)').html();
  		that.teacher_form.rank = $('.user-teaOwnerData tr:eq(4) td:eq(1)').html();
  		that.teacher_form.qq = $('.user-teaOwnerData tr:eq(5) td:eq(1)').html();
    },
    //初始化
		initial:function(){
			timeGo.action();
   		skill_box.action();
			this.eventBind();
			var that = this;
			var weikeData = JSON.parse(localStorage.weikeData);
			$(".user-name").html(weikeData.data.user_name);
			//获取token
			that.token = weikeData.data.token;
			that.userType = weikeData.data.role;

		  let navList = $('.user-navUl > li');
		  let sectionDiv = $('.user-section > div');

		  let navlistLength = navList.length;

		  for(let i = 0; i < navlistLength; i ++){

		  	navList[i].index = i;
				navList[i].onclick = function(){
					for(let j = 0;j < navlistLength; j ++){
						navList[j].className = "";
						sectionDiv[j].className = "";
					}
					this.className = "showLiList";
					sectionDiv[this.index].className = "showSectionDiv";
				};
		  };
		  //根据用户类型初始化
		  if(that.token){
		  	if(that.userType === "teacher"){
		  		that.iniTeacherForm();
		  		let weike = JSON.stringify(that.teacher_form);
					localStorage.setItem("weikeUser",weike);
					console.log(weike)
		  		//消息中心
		  		$.ajax({
		  			type:"GET",
		  			url:content_path + "",
		  			contentType: 'application/json;charset=UTF-8',
						beforeSend:function(request) {
							request.setRequestHeader("Authorization", that.token);
						},
						data:"",
						sync:true,
						success:function(response){
							if(response.ifSuccess){
								let messageCenter = response.messageCenter;
								let openProject = response.openProject;
								let joinProject = response.joinProject;
								let ownerMessage = response.ownerMessage;

								let messageLength = messageCenter.length;
								let openProjectLength = openProject.length;
								let joinProjectLength = joinProject.length;
								let ownerMessageLength = ownerMessage.length;
								//消息中心
								if(messageLength === 0){
									//无消息
								}
								else{
									for( let i = 0; i < messageLength; i ++){
										let module =  `<tr>
												    				<td>${messageCenter[i].name}</td>
												    				<td>${messageCenter[i].message}</td>
												    				<td>${messageCenter[i].date}</td>
												    				<td>${messageCenter[i].connect}</td>
												    				<td>
												    					<button name="show">查看</button><button name="delete">删除</button>
												    				</td>
												    			</tr>`;
										$('.user-messageCenter').append(module);
									}
								}
								//发起的项目
								if(openProjectLength === 0){
									//无消息
								}
								else{
									for( let i = 0; i < openProjectLength; i ++){
										let module = `<tr>
												    				<td>${openProject[i].name}</td>
												    				<td>${openProject[i].type}</td>
												    				<td>${openProject[i].introduction }</td>
												    				<td>${openProject[i].beginDate}~${openProject[i].endDate}</td>
												    				<td>${openProject[i].peopleRequire}</td>
												    				<td><button name="edit">编辑</button><button name="delete">删除</button></td>
												    			</tr>`;
										$('.user-openProject').append(module);
									}
								}
								//参与的项目
								if(joinProjectLength === 0){
									//无消息
								}
								else{
									for( let i = 0; i < joinProjectLength; i ++){
										let module = `<tr>
												    				<td>${joinProject[i].name}</td>
												    				<td>${joinProject[i].type}</td>
												    				<td>${joinProject[i].introduction }</td>
												    				<td>${joinProject[i].beginDate}~${openProject[i].endDate}</td>
												    				<td>${joinProject[i].peopleRequire}</td>
												    				<td><button name="edit">编辑</button><button name="delete">删除</button></td>
												    			</tr>`;
										$('.user-joinProject').append(module);
									}
								}

								//个人资料
								if(ownerMessageLength === 0){
									//无消息
								}
								else{
									for( let i = 0; i < ownerMessageLength; i ++){
										let module = `<tr><td>姓名</td><td>${ownerMessage[i].name}</td></tr>
													    			<tr><td>性别</td><td>${ownerMessage[i].sex}</td></tr>
													    			<tr><td>所在院校</td><td>${ownerMessage[i].university}</td></tr>
													    			<tr><td>所在院系</td><td>${ownerMessage[i].academy}</td></tr>
													    			<tr><td>职称</td><td>${ownerMessage[i].rank}</td></tr>
													    			<tr><td>QQ</td><td>${ownerMessage[i].qq}</td></tr>
													    			<tr><td colspan="2"><button class="user-update">修改/完善</button></td>
													    		</tr>`;
										$('.user-teaOwnerData').append(module);
									}
								}
							}
						},
						error:function(err){
							//alert("初始化失败");
						}
		  		});
		  		//个人资料
		  		$(".user-teaOwnerData").show();
		  	}
		  	else if(that.userType === "student"){

		  		that.iniStudentForm();
		  		let weike = JSON.stringify(that.student_form);
					console.log(weike)
					localStorage.setItem("weikeUser",weike);
		  		//消息中心
		  		$.ajax({
		  			type:"GET",
		  			url:"",
		  			contentType: 'application/json;charset=UTF-8',
						beforeSend:function(request) {
							request.setRequestHeader("Authorization", that.token);
						},
						data:"",
						sync:true,
						success:function(response){
							let messageCenter = response.messageCenter;
							let openProject = response.openProject;
							let joinProject = response.joinProject;
							let ownerMessage = response.ownerMessage;

							let messageLength = messageCenter.length;
							let openProjectLength = openProject.length;
							let joinProjectLength = joinProject.length;
							let ownerMessageLength = ownerMessage.length;
							//消息中心
							if(messageLength === 0){
								//无消息
							}
							else{
								for( let i = 0; i < messageLength; i ++){
									let module =  `<tr>
											    				<td>${messageCenter[i].name}</td>
											    				<td>${messageCenter[i].message}</td>
											    				<td>${messageCenter[i].date}</td>
											    				<td>${messageCenter[i].connect}</td>
											    				<td>
											    					<button name="show">查看</button><button name="delete">删除</button>
											    				</td>
											    			</tr>`;
									$('.user-messageCenter').append(module);
								}
							}
							//发起的项目
							if(openProjectLength === 0){
								//无消息
							}
							else{
								for( let i = 0; i < openProjectLength; i ++){
									let module = `<tr>
											    				<td>${openProject[i].name}</td>
											    				<td>${openProject[i].type}</td>
											    				<td>${openProject[i].introduction }</td>
											    				<td>${openProject[i].beginDate}~${openProject[i].endDate}</td>
											    				<td>${openProject[i].peopleRequire}</td>
											    				<td><button name="edit">编辑</button><button name="delete">删除</button></td>
											    			</tr>`;
									$('.user-openProject').append(module);
								}
							}
							//参与的项目
							if(joinProjectLength === 0){
								//无消息
							}
							else{
								for( let i = 0; i < joinProjectLength; i ++){
									let module = `<tr>
											    				<td>${joinProject[i].name}</td>
											    				<td>${joinProject[i].type}</td>
											    				<td>${joinProject[i].introduction }</td>
											    				<td>${joinProject[i].beginDate}~${openProject[i].endDate}</td>
											    				<td>${joinProject[i].peopleRequire}</td>
											    				<td><button name="edit">编辑</button><button name="delete">删除</button></td>
											    			</tr>`;
									$('.user-joinProject').append(module);
								}
							}

							//个人资料
							if(ownerMessageLength === 0){
								//无消息
							}
							else{
								for( let i = 0; i < ownerMessageLength; i ++){
									let module = `<tr><td>姓名</td><td>${ownerMessage[i].name}</td></tr>
																<tr><td>学历</td><td>${ownerMessage[i].edu_background}</td></tr>
											    			<tr><td>性别</td><td>${ownerMessage[i].sex}</td></tr>
											    			<tr><td>所在院校</td><td>${ownerMessage[i].university}</td></tr>
											    			<tr><td>所在院系</td><td>${ownerMessage[i].academy}</td></tr>
											    			<tr><td>专业</td><td>${ownerMessage[i].major}</td></tr>
											    			<tr><td>入学时间</td><td>${ownerMessage[i].entry_university}</td></tr>
											    			<tr><td>毕业时间</td><td>${leave_university}</td></tr>
											    			<tr><td>技能</td><td>${ownerMessage[i].skills}</td></tr>
											    			<tr><td>项目经验</td><td>${ownerMessage[i].experience}</td></tr>
											    			<tr><td>QQ</td><td>${ownerMessage[i].qq}</td></tr>
											    			<tr><td>自我评价</td><td>${ownerMessage[i].self_feel}</td></tr>
											    			<tr><td colspan="2"><button class="user-update">修改/完善</button></td></tr>`;
									$('.user-stuOwnerData').append(module);
								}
							}
						},
						error:function(err){
							//alert("初始化失败");
						}
		  		});
		  		//个人资料
		  		$(".user-stuOwnerData").show();
		  	}
		  }
		},
		//事件绑定
		eventBind:function(){
			let that = this;
			let deleteMessageUrl = null;
			if(that.userType === "teacher"){
	  		deleteMessageUrl = content_path + '/'
	  	}
	  	else if(that.userType === "student"){
	  		deleteMessageUrl = content_path + '/'
	  	}

			$("body").on("click", ".user", function(event){
				var target = event.target;

				//点击消息中心的查看后的关闭按钮
				if(target.className === "show-out"){
					$(".showContentContainer").css({
						'display':'none'
					});
					$(".showContent").html("");
				}
				else if(target.id === "submit"){
					if($("input[id = 'name'").val().length === 0){
						$(".error:eq(1)").show();
					}
				}
				//点击个人资料的修改按钮
				else if(target.className === "user-update"){
					window.open("register.html", "_self", "scrollbars = 1");
				}
			});


			let messageCenterShow = $(".user-messageCenter button[name = 'show']");
			let messageCenterDelete = $(".user-messageCenter button[name = 'delete']");
			let openProjectEdit = $(".user-openProject button[name = 'edit']");
			let openProjectDelete = $(".user-openProject button[name = 'delete']");
			let joinProjectShow = $(".user-joinProject button[name = 'show']");
			let joinProjectDelete = $(".user-joinProject button[name = 'delete']");

			let messageCenterTr = $(".user-messageCenter tr");
			let openProjectTr = $(".user-openProject tr");
			let joinProjectTr = $(".user-joinProject tr");
			let messageCenterShowLength = messageCenterShow.length;
			let openProjectEditLength = openProjectEdit.length;
			let joinProjectDeleteLength = joinProjectDelete.length;

			//个人中心查看按钮
			for(let i = 0 ; i < messageCenterShowLength; i ++){
				messageCenterShow[i].index = i;
				messageCenterShow[i].onclick = function(){
					for(let j = 0;j < messageCenterShowLength; j ++){
						messageCenterTr[j].className = "";
					}
					messageCenterTr[this.index + 1].className = "messageCurrentShow";
					$(".showContentContainer").show();
					let showContentData = `<p>发件人 : ${$(".messageCurrentShow td:eq(0)").html()}</p>
																<p>内容 : ${$(".messageCurrentShow td:eq(1)").html()}</p>
																<p>时间 : ${$(".messageCurrentShow td:eq(2)").html()}</p>
																<p>联系方式 : ${$(".messageCurrentShow td:eq(3)").html()}</p>`
					$(".showContent").append(showContentData);
				}
			}
			//个人中心查看删除
			for(let i = 0 ; i < messageCenterShowLength; i ++){
				messageCenterDelete[i].index = i;
				messageCenterDelete[i].onclick = function(){
					for(let j = 0;j < messageCenterShowLength; j ++){
						messageCenterTr[j].className = "";
					}
					messageCenterTr[this.index + 1].className = "messageCurrentDelete";
					var truthMessageDelete = window.confirm("单击“确定”删除,单击“取消”停止.");
					if (truthMessageDelete){
						$(".messageCurrentDelete").remove();
						//删除消息中心消息
						$.ajax({
							type: "POST",
							url:deleteMessageUrl,
							contentType: 'application/json;charset=UTF-8',
							beforeSend:function(request) {
								request.setRequestHeader("Authorization", that.token);
							},
							data:"",
							sync:true,
							success:function(response){

							},
							error:function(err){
								alert("删除失败");
							}
						});
					}
				}
			}

			//项目历史参与项目查看按钮
			for(let i = 0 ; i < joinProjectDeleteLength; i ++){
				joinProjectShow[i].index = i;
				joinProjectShow[i].onclick = function(){
					for(let j = 0;j < joinProjectDeleteLength; j ++){
						joinProjectTr[j].className = "";
					}
					joinProjectTr[this.index + 1].className = "joinCurrentShow";
					$(".showContentContainer").show();
					let showHistoryData = `<p>项目名称 : ${$(".joinCurrentShow td:eq(0)").html()}</p>
																<p>项目类型 : ${$(".joinCurrentShow td:eq(1)").html()}</p>
																<p>项目简介 : ${$(".joinCurrentShow td:eq(2)").html()}</p>
																<p>起止时间 : ${$(".joinCurrentShow td:eq(3)").html()}</p>
																<p>人员要求 : ${$(".joinCurrentShow td:eq(3)").html()}</p>`
					$(".showContent").append(showHistoryData);
				}
			}

			//项目历史参与项目删除按钮
			for(let i = 0 ; i < joinProjectDeleteLength; i ++){
				joinProjectDelete[i].index = i;
				joinProjectDelete[i].onclick = function(){
					for(let j = 0;j < joinProjectDeleteLength; j ++){
						messageCenterTr[j].className = "";
					}
					joinProjectTr[this.index + 1].className = "joinCurrentDelete";
					var truthJoinDelete = window.confirm("单击“确定”删除,单击“取消”停止.");
					if (truthJoinDelete){
						$(".joinCurrentDelete").remove();
						//删除消息中心消息
						$.ajax({
							type: "POST",
							url:deleteMessageUrl,
							contentType: 'application/json;charset=UTF-8',
							beforeSend:function(request) {
								request.setRequestHeader("Authorization", that.token);
							},
							data:"",
							sync:true,
							success:function(response){

							},
							error:function(err){
								alert("删除失败");
							}
						});
					}
				}
			}

			//项目历史发起项目编辑按钮
			for(let i = 0 ; i < openProjectEditLength; i ++){
				openProjectEdit[i].index = i;
				openProjectEdit[i].onclick = function(){
					for(let j = 0;j < openProjectEditLength; j ++){
						openProjectTr[j].className = "";
					}
					openProjectTr[this.index + 1].className = "openCurrentShow";
					let openProjectData = $(".openCurrentShow td");
					//获取起始时间
					let dateValue = $(".openCurrentShow td:eq(3)").html().split("~");
					//获取人员要求
					let peopleRequire = $(".openCurrentShow td:eq(4)").html().split(",");
					let peopleRequireLength = peopleRequire.length;

					for(let k = 0; k < peopleRequireLength; k ++){
						let skills = `<span data-show-skill="${peopleRequire[k]}">${peopleRequire[k]}</span>`;
						$(".user .skill-show").append(skills);
					}
					$(".user-projectUpdate").show();
					$(".user-openProject").hide();
					$(".user-joinProject").hide();

					$("input[id = 'name'").val($(".openCurrentShow td:eq(0)").html());
					$("input[id = 'type'").val($(".openCurrentShow td:eq(1)").html());
					$('.show-time:first-child').html(dateValue[0]);
					$('.show-time:eq(1)').html(dateValue[1]);
					$("textarea[id = 'summary'").val($(".openCurrentShow td:eq(2)").html());
				}
			}

			//项目历史发起项目删除按钮
			for(let i = 0 ; i < openProjectEditLength; i ++){
				openProjectDelete[i].index = i;
				openProjectDelete[i].onclick = function(){
					for(let j = 0;j < openProjectEditLength; j ++){
						openProjectTr[j].className = "";
					}
					openProjectTr[this.index + 1].className = "openCurrentDelete";
					var truthOpenDelete = window.confirm("单击“确定”删除,单击“取消”停止.");
					if (truthOpenDelete){
						$(".openCurrentDelete").remove();
						//删除消息中心消息
						$.ajax({
							type: "POST",
							url:deleteMessageUrl,
							contentType: 'application/json;charset=UTF-8',
							beforeSend:function(request) {
								request.setRequestHeader("Authorization", that.token);
							},
							data:"",
							sync:true,
							success:function(response){

							},
							error:function(err){
								alert("删除失败");
							}
						});
					}
				}
			}
		}
	}
	user.initial();
})(jQuery);


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "/* 全局样式 */\ni {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nbody {\n  min-width: 300px;\n  max-width: 1400px;\n}\nli {\n  list-style-type: none;\n}\n.error {\n  color: red;\n  position: absolute;\n}\n@media (max-width: 992px) {\n  .error {\n    right: 0;\n    top: 14px;\n  }\n}\n@media (min-width: 992px) {\n  .error {\n    right: 60px;\n    top: 24px;\n  }\n}\n.white-button {\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n.button {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n}\n.button:hover {\n  background-color: #3082f9;\n}\n.button:active {\n  background-color: #1F71E8;\n}\n.textarea {\n  outline: none;\n  border: 1px solid #E1E4E7;\n  padding: 10px;\n  border-radius: 3px;\n  transfrom: box-shadow;\n}\n.input-text {\n  height: 32px;\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  transfrom: box-shadow;\n}\n.clearfix {\n  zoom: 1;\n}\n.clearfix:before {\n  display: table;\n  content: \" \";\n}\n.clearfix:after {\n  display: table;\n  content: \" \";\n  clear: both;\n}\n.common-width {\n  width: 100%;\n}\n.index,\n.search,\n.release,\n.register,\n.user {\n  background-color: #F7F8FA;\n}\n.index .container,\n.search .container,\n.release .container,\n.register .container,\n.user .container {\n  background-color: #ffffff;\n}\n@media (min-width: 768px) {\n  .index .container,\n  .search .container,\n  .release .container,\n  .register .container,\n  .user .container {\n    border-left: 1px solid #E1E4E7;\n    border-right: 1px solid #E1E4E7;\n  }\n}\n.button-link:hover {\n  background-color: #3082f9;\n}\n.button-link:active {\n  background-color: #1F71E8;\n}\n.link:link {\n  color: #888888;\n  text-decoration: none;\n}\n.link:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.link:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.link:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.link-bg:link {\n  color: #888888;\n  text-decoration: none;\n}\n.link-bg:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.link-bg:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.link-bg:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.box-shadow {\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.box-shadow-focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.triangle {\n  position: relative;\n  display: block;\n}\n.triangle:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: auto;\n  border-bottom: 8px solid #E1E4E7;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.triangle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 1px;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  margin: auto;\n  border-bottom: 8px solid #ffffff;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n}\n/* header部分 */\nheader {\n  background: #ffffff;\n  border-bottom: 1px solid #E1E4E7;\n}\nheader ul {\n  margin: 0;\n  padding: 0;\n}\nheader nav {\n  margin: 0 auto;\n}\nheader nav .logo {\n  float: left;\n  padding: 8px 20px 2px 0;\n}\nheader nav .nav-ul li {\n  list-style-type: none;\n  float: left;\n}\nheader nav .nav-ul li a {\n  display: block;\n  height: 50px;\n  padding: 10px 24px;\n  line-height: 30px;\n  font-size: 14px;\n}\nheader nav .nav-ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .nav-ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .nav-ul li a:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .nav-ul li a:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign {\n  float: right;\n}\nheader nav .sign .not-logged {\n  display: block;\n  padding-right: 10px;\n}\nheader nav .sign .not-logged a {\n  font-size: 14px;\n  line-height: 50px;\n}\nheader nav .sign .not-logged a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .sign .not-logged #sign-in-bt {\n  padding-right: 8px;\n}\nheader nav .sign .logged .logged-user {\n  position: relative;\n  float: right;\n  background: #ffffff;\n  width: 120px;\n}\nheader nav .sign .logged .logged-user:hover .user-ul {\n  display: block;\n}\nheader nav .sign .logged .logged-user .user-message {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px;\n  cursor: pointer;\n  float: right;\n}\nheader nav .sign .logged .logged-user .user-message:hover {\n  background-color: #F5F5F5;\n}\nheader nav .sign .logged .logged-user .user-message span {\n  display: block;\n  float: left;\n}\nheader nav .sign .logged .logged-user .user-message .user-head {\n  width: 30px;\n  height: 30px;\n  background: url(" + __webpack_require__(8) + ") no-repeat;\n  background-size: cover;\n  border-radius: 4px;\n}\nheader nav .sign .logged .logged-user .user-message .user-name {\n  font-size: 10px;\n  color: #1F71E8;\n  font-weight: bold;\n  padding-left: 10px;\n  line-height: 30px;\n}\nheader nav .sign .logged .logged-user .user-ul {\n  display: none;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 120px;\n  z-index: 999;\n}\nheader nav .sign .logged .logged-user .user-ul .triangle {\n  height: 8px;\n  top: 2px;\n}\nheader nav .sign .logged .logged-user .user-ul ul {\n  border-radius: 4px;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n  background: #ffffff;\n  padding-top: 8px;\n  padding-bottom: 10px;\n  border: 1px solid #E1E4E7;\n}\nheader nav .sign .logged .logged-user .user-ul ul li {\n  list-style-type: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li i {\n  float: left;\n  font-size: 16px;\n  padding: 2px 10px 0 10px;\n  color: #888888 !important;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a {\n  width: 100%;\n  display: block;\n  padding: 5px 10px;\n  font-size: 10px;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign .logged .logged-message {\n  position: relative;\n  float: right;\n  padding-left: 20px;\n  padding-right: 20px;\n  cursor: pointer;\n  z-index: 999;\n}\nheader nav .sign .logged .logged-message:hover .message-box {\n  display: block;\n}\nheader nav .sign .logged .logged-message:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-message:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-message:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .sign .logged .logged-message:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign .logged .logged-message .iconfont {\n  font-size: 24px;\n  color: #888888;\n  line-height: 50px;\n}\nheader nav .sign .logged .logged-message .iconfont:hover {\n  color: #777777;\n}\nheader nav .sign .logged .logged-message .message-box {\n  display: none;\n  position: absolute;\n  top: 57px;\n  left: -120px;\n  width: 300px;\n  height: 260px;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\nheader nav .sign .logged .logged-message .message-box i {\n  height: 8px;\n  top: -8px;\n}\nheader nav .sign .logged .logged-message .message-box h6 {\n  text-align: center;\n  font-size: 10px;\n  color: #888888;\n  padding: 8px 10px 14px 10px;\n  border-bottom: 1px solid #F5F5F5;\n}\nheader nav .mobile-ul {\n  position: relative;\n}\nheader nav .mobile-ul #head-nav {\n  position: absolute;\n  right: 20px;\n  top: 5px;\n  font-size: 30px;\n  color: #888888;\n}\nheader nav .mobile-ul ul {\n  display: none;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 26%;\n  min-width: 100px;\n  border-top: 1px solid #E1E4E7;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\nheader nav .mobile-ul ul li {\n  width: 100%;\n  list-style-type: none;\n  text-indent: 10px;\n  border-top: 1px solid #F5F5F5;\n}\nheader nav .mobile-ul ul li a {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  display: block;\n  font-size: 10px;\n}\nheader nav .mobile-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul .logged-m {\n  display: none;\n}\n/* footer部分 */\nfooter {\n  background: #F5F5F5;\n}\nfooter .container {\n  background-color: #ffffff;\n  border-top: 1px solid #E1E4E7;\n  border-left: 1px solid #E1E4E7;\n  border-right: 1px solid #E1E4E7;\n}\nfooter .container .logo {\n  padding-top: 30px;\n  float: left;\n}\nfooter .container .foot-ul {\n  margin-left: 40%;\n}\nfooter .container .foot-ul ul {\n  float: left;\n  padding-left: 20px;\n  padding-top: 20px;\n}\nfooter .container .foot-ul ul li {\n  list-style-type: none;\n  padding: 15px 10px;\n}\nfooter .container .foot-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nfooter .container h5 {\n  padding-top: 10px;\n  padding-bottom: 5px;\n  text-align: center;\n  color: #888888;\n  font-size: 10px;\n}\n/* sign-box部分 */\n/* cut_picture部分 */\n.mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.65);\n}\n.cut-picture {\n  position: absolute;\n  left: 50%;\n  top: 51px;\n  width: 320px;\n  margin-left: -160px;\n  margin-top: 4vh;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.cut-picture #close-cut {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px;\n  font-size: 16px;\n  color: #aaaaaa;\n  cursor: pointer;\n}\n.cut-picture h3 {\n  font-size: 20px;\n  color: #888888;\n  text-align: center;\n  font-weight: bold;\n  padding: 10px 0 10px 0;\n}\n.cut-picture h4 {\n  font-size: 14px;\n  color: #aaaaaa;\n  text-align: center;\n}\n.cut-picture .pic-ctrl {\n  padding: 30px 40px;\n}\n.cut-picture .pic-ctrl canvas {\n  border: 1px solid #F5F5F5;\n  cursor: move;\n}\n.cut-picture .pic-ctrl .rank {\n  text-align: center;\n  margin: 0 auto;\n  padding: 10px 0;\n}\n.cut-picture .pic-ctrl .rank .iconfont {\n  display: inline-block;\n  font-size: 14px;\n  color: #888888;\n  vertical-align: top;\n}\n.cut-picture .pic-ctrl .rank .more {\n  font-size: 16px;\n}\n.cut-picture .pic-ctrl .rank input {\n  display: inline-block;\n  height: 4px;\n  width: 180px;\n  color: #888888;\n  border-radius: 10px;\n  outline: none;\n  background-color: #aaaaaa;\n  vertical-align: middle;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\n.cut-picture .pic-ctrl .rank input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n          appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  background-color: #888888;\n}\n.cut-picture .pic-ctrl button {\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  display: block;\n  width: 140px;\n  padding: 4px 0;\n  margin: 0 auto;\n  background-color: #4193ff;\n}\n.cut-picture .pic-ctrl button:hover {\n  background-color: #3082f9;\n}\n.cut-picture .pic-ctrl button:active {\n  background-color: #1F71E8;\n}\n/* 时间选择器 */\n.time-box-left {\n  position: absolute;\n  left: 0;\n  right: 60px;\n}\n@media (max-width: 768px) {\n  .time-box-left {\n    right: 26px;\n  }\n}\n@media (max-width: 992px) {\n  .time-box-left {\n    right: 50px;\n  }\n}\n@media (min-width: 992px) {\n  .time-box-left {\n    right: 70px;\n  }\n}\n.time-box-left .show-time {\n  width: 100%;\n  height: 32px;\n  color: #1F71E8;\n  font-size: 15px;\n  line-height: 32px;\n  padding-left: 20px;\n  border: 1px solid #E1E4E7;\n  border-radius: 4px;\n}\n@media (max-width: 768px) {\n  .time-box-left .show-time {\n    font-size: 10px;\n  }\n}\n.time-box-left .select-time {\n  display: none;\n  position: absolute;\n  top: 38px;\n  z-index: 1;\n  width: 100%;\n  height: auto;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.time-box-left .select-time .triangle {\n  height: 8px;\n  top: -8px;\n}\n.time-box-left .select-time .time-top {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\n.time-box-left .select-time .time-top div:nth-child(2) {\n  border-left: 1px solid #F5F5F5;\n  border-right: 1px solid #F5F5F5;\n}\n.time-box-left .select-time .time-top .time-col {\n  float: left;\n  width: 33%;\n  padding: 10px 10px;\n}\n.time-box-left .select-time .time-top .time-col i,\n.time-box-left .select-time .time-top .time-col input,\n.time-box-left .select-time .time-top .time-col h5 {\n  display: block;\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.time-box-left .select-time .time-top .time-col i {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: #888888;\n  cursor: pointer;\n  padding: 3px 0;\n}\n.time-box-left .select-time .time-top .time-col i:link {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-top .time-col i:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-top .time-col i:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.time-box-left .select-time .time-top .time-col i:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n@media (min-width: 768px) {\n  .time-box-left .select-time .time-top .time-col h5 {\n    font-size: 16px;\n    font-weight: bold;\n    padding-bottom: 20px;\n  }\n}\n.time-box-left .select-time .time-top .time-col input {\n  border: none;\n  width: 100%;\n  text-align: center;\n  box-shadow: none;\n  color: #1F71E8;\n  font-weight: bold;\n  font-size: 15px;\n}\n.time-box-left .select-time .time-top .time-col input:focus {\n  border: 1px solid #467EAD;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-top .time-col input {\n    font-size: 11px;\n  }\n}\n.time-box-left .select-time .time-bottom {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-top: 1px solid #E1E4E7;\n}\n.time-box-left .select-time .time-bottom button {\n  padding: 6px 20px;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n.time-box-left .select-time .time-bottom button:link {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-bottom button:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-bottom button:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.time-box-left .select-time .time-bottom button:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.time-box-left .select-time .time-bottom .get-time {\n  float: left;\n  margin-left: 30px;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-bottom .get-time {\n    margin-left: 10px;\n    padding: 6px 10px;\n  }\n}\n.time-box-left .select-time .time-bottom .close-time {\n  float: right;\n  margin-right: 30px;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-bottom .close-time {\n    margin-right: 10px;\n    padding: 6px 10px;\n  }\n}\n.start {\n  position: absolute;\n  top: 2px;\n  padding: 6px 8px;\n  cursor: pointer;\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .start {\n    right: -20px;\n  }\n}\n@media (max-width: 992px) {\n  .start {\n    right: 0;\n  }\n}\n@media (min-width: 992px) {\n  .start {\n    right: 10px;\n    padding: 4px 10px;\n  }\n}\n.start:hover {\n  background-color: #3082f9;\n}\n.start:active {\n  background-color: #1F71E8;\n}\n.start:hover {\n  background-color: #3082f9;\n}\n.start:active {\n  background-color: #1F71E8;\n}\n/* skill-box */\n.skill-box {\n  position: relative;\n  padding: 0;\n}\n.new-skill-box {\n  margin-top: 20px;\n}\n.skill-box-top {\n  width: 100%;\n}\n.skill-box-top .skill-show {\n  float: left;\n  width: 70%;\n  padding: 4px;\n  min-height: 112px;\n  border: 1px solid #E1E4E7;\n  border-radius: 4px;\n}\n.skill-box-top .skill-show span {\n  float: left;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n  padding: 4px;\n  margin-left: 4px;\n  margin-top: 4px;\n  cursor: pointer;\n}\n.skill-box-top .skill-show + div {\n  float: left;\n  width: 30%;\n  padding-left: 20px;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div {\n    padding-left: 6px;\n  }\n}\n.skill-box-top .skill-show + div .select-skill,\n.skill-box-top .skill-show + div #skill-people {\n  display: block;\n  padding: 5px;\n}\n.skill-box-top .skill-show + div .select-skill {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  padding: 4px 20px;\n}\n.skill-box-top .skill-show + div .select-skill:hover {\n  background-color: #3082f9;\n}\n.skill-box-top .skill-show + div .select-skill:active {\n  background-color: #1F71E8;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div .select-skill {\n    padding: 5px 13px;\n  }\n}\n.skill-box-top .skill-show + div .skill-people {\n  margin-top: 14px;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div .skill-people {\n    padding: 4px;\n  }\n}\n.skill-box-top .skill-show + div .delete {\n  font-size: 22px;\n  margin-top: 14px;\n  display: block;\n  padding-left: 20px;\n  color: #888888;\n  cursor: pointer;\n}\n.skill-box-top .skill-show + div .delete:link {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.skill-list {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 70%;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n@media (max-width: 768px) {\n  .skill-list {\n    width: 100%;\n  }\n}\n.skill-list .triangle {\n  top: -8px;\n}\n.skill-list ul,\n.skill-list li {\n  margin: 0;\n  padding: 4px 0;\n  cursor: pointer;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.skill-list .skill-ul-left li {\n  width: 25%;\n  height: auto;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border-right: 1px solid #F5F5F5;\n  overflow: hidden;\n}\n.skill-list .skill-ul-left li ul {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 25%;\n  width: 25%;\n}\n.skill-list .skill-ul-left li ul .triangle {\n  top: -8px;\n}\n.skill-list .skill-ul-left li ul li {\n  width: 100%;\n}\n.skill-list .skill-ul-left li ul li div {\n  display: none;\n  width: 200%;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  padding: 4px;\n}\n.skill-list .skill-ul-left li ul li div span {\n  position: relative;\n  font-size: 10px;\n  display: block;\n  float: left;\n  padding: 4px;\n  margin-right: 6px;\n  margin-top: 6px;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .skill-list .skill-ul-left li ul li div span {\n    margin-right: 2px;\n    margin-top: 2px;\n    padding: 2px;\n  }\n}\n.skill-bottom {\n  border-top: 1px solid #F5F5F5;\n  padding: 14px 20px;\n}\n.skill-bottom button {\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n  padding: 6px 14px;\n}\n.skill-bottom button:link {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-bottom button:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-bottom button:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.skill-bottom button:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.skill-bottom .skill-sure {\n  float: left;\n}\n.skill-bottom .skill-cancle {\n  float: right;\n}\n.skill-active {\n  background-color: #63b5ff !important;\n  color: #ffffff;\n}\nbody,\nul,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nol,\nli,\np,\nform,\nfieldset,\ntable,\ntd,\nimg,\ndiv,\ndl,\ndt,\ndd,\ninput {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-size: 12px;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\nimg,\ninput {\n  border: none;\n}\nli {\n  list-style: none;\n}\ninput,\nselect,\ntextarea {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\na {\n  text-decoration: none;\n}\n/*登录注册*/\n#common-login,\n#common-register,\n#common-checkLogin,\n#common-forget {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 1000px;\n  z-index: 9999;\n  display: none;\n  background-color: #ffffff;\n}\n.tea-register,\n.stu-register,\n.tea-checkLogin,\n.stu-checkLogin {\n  position: relative;\n  z-index: 69999;\n  float: left;\n  width: 120px;\n  height: 80px;\n  margin-top: 20%;\n  margin-left: 50px;\n  line-height: 80px;\n  font-size: 20px;\n  border-radius: 5px;\n  text-align: center;\n  cursor: pointer;\n  background: #EEE;\n}\n.tea-register,\n.tea-checkLogin {\n  margin-left: 40%;\n}\n.lo-container,\n.re-container {\n  z-index: 99999;\n  position: relative;\n  width: 300px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px #CCC;\n  margin-top: 10%;\n  margin-left: 40%;\n  border: 1px solid #CCC;\n}\n.re-container {\n  display: none;\n}\n.out,\n.re-out,\n.forget-out,\n.forget-pwdOut {\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: bold;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #B3B3B3;\n}\n.out:hover,\n.re-out:hover,\n.forget-out:hover,\n.forget-pwdOut:hover {\n  background: #787878;\n}\nh1 {\n  margin: 10px 0 !important;\n  text-align: center;\n  font-weight: bold;\n  font-size: 20px !important;\n}\nh2 {\n  margin-bottom: 10px !important;\n  text-align: center;\n  font-size: 16px !important;\n  color: #888 !important;\n}\n#uname,\n#pwd,\n#re-uname,\n#re-pwd,\n#re-email {\n  width: 200px;\n}\n.div-uname,\n.div-pwd,\n.re-div-uname,\n.re-div-pwd,\n.re-div-email {\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.div-pwd,\n.re-div-pwd,\n.re-div-email {\n  border-top: none;\n}\n.img-validate,\n.re-img-validate {\n  line-height: 48px;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.img-validate input,\n.re-img-validate input {\n  height: 30px;\n  border: 1px solid #CCC;\n  text-indent: 6px;\n  width: 80px !important;\n}\n#canvas {\n  position: absolute;\n  left: 135px;\n  top: 170px;\n  width: 80px;\n  height: 40px;\n  margin: 4px 10px;\n  text-indent: 10px;\n  line-height: 40px;\n  color: red;\n  font-size: 20px;\n  background-color: black;\n}\n.reload {\n  position: absolute;\n  right: 12px;\n  display: inline-block;\n  height: 20px;\n  line-height: 20px;\n  margin-top: 4px;\n  text-indent: 2px;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #CCC;\n}\n.bt-login {\n  line-height: 36px;\n  color: #fff;\n  margin: 10px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #0077d9;\n}\n#remember {\n  margin-left: 10px;\n  margin-bottom: 16px;\n}\n.unlogin {\n  cursor: pointer;\n}\n.unlogin:hover {\n  color: red;\n}\n.register {\n  float: right;\n  margin-top: 0;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.p-login,\n.p-pwd,\n.p-uname,\n.p-validate {\n  position: absolute;\n  display: inline-block;\n  margin-left: -10px;\n  width: 90px;\n  height: 32px;\n  line-height: 16px;\n  color: red;\n}\n.p-login {\n  margin-left: 4px;\n  line-height: 18px;\n}\n.p-validate {\n  text-indent: -10px;\n  margin-left: 10px;\n  top: 196px;\n  left: 240px;\n}\n.p-uname {\n  top: 86px;\n}\n.p-pwd {\n  top: 134px;\n}\n#re-validate {\n  margin: 0 10px ;\n}\n.re-reload {\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  margin-top: 10px;\n  text-indent: 2px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.re-bt-register {\n  line-height: 36px;\n  color: #fff;\n  margin: 10px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #0077d9;\n}\n.re-unlogin {\n  margin-left: 10px;\n}\n.re-bt-login {\n  display: inline-block;\n  margin-bottom: 16px;\n  cursor: pointer;\n  color: #259;\n}\n.re-p-validate,\n.re-p-pwd,\n.re-p-uname,\n.re-p-email {\n  position: absolute;\n  display: inline-block;\n  margin-top: 2px;\n  margin-left: -1px;\n  width: 80px;\n  height: 32px;\n  line-height: 16px;\n  color: red;\n}\n.re-p-validate {\n  width: 50px;\n  margin-left: 5px;\n  text-indent: -4px;\n}\n.re-p-uname {\n  top: 82px;\n}\n.re-p-pwd {\n  top: 134px;\n}\n.re-p-email {\n  top: 180px;\n}\n.re-p-validate {\n  top: 226px;\n}\n.re-promot {\n  display: inline-block;\n  text-indent: 10px;\n  color: red;\n}\n.forget-validate,\n.forget-pwd {\n  width: 300px;\n  position: relative;\n  border-radius: 10px;\n  box-shadow: 0 0 10px #CCC;\n  margin-top: 10%;\n  margin-left: 40%;\n  border: 1px solid #CCC;\n}\n.forget-validate p,\n.forget-pwd p {\n  margin: 10px 0;\n  text-align: center;\n  font-size: 18px;\n}\n.forget-validate input,\n.forget-pwd input {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.forget-validate input input,\n.forget-pwd input input {\n  width: 50%;\n}\n.forget-validate .forget-getValidateDiv,\n.forget-pwd .forget-getValidateDiv {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.forget-validate .forget-getValidateDiv input,\n.forget-pwd .forget-getValidateDiv input {\n  float: left;\n  width: 50%;\n  border-top: none;\n}\n.forget-validate .forget-getValidateDiv .forget-reload,\n.forget-pwd .forget-getValidateDiv .forget-reload {\n  width: 80px;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 4px;\n  margin-left: 40px;\n  text-indent: -2px;\n  border-radius: 5px;\n  text-align: center;\n}\n.forget-validate #forget-surePwd,\n.forget-pwd #forget-surePwd,\n.forget-validate #forget-email,\n.forget-pwd #forget-email {\n  border-top: none;\n}\n.forget-validate #forget-email,\n.forget-pwd #forget-email {\n  border-bottom: none;\n}\n.forget-validate .forget-pwdPromot,\n.forget-pwd .forget-pwdPromot,\n.forget-validate .forget-promot,\n.forget-pwd .forget-promot {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  margin: 5px 0;\n  color: red;\n}\n.forget-validate .forget-pwdBtn,\n.forget-pwd .forget-pwdBtn,\n.forget-validate .forget-btn,\n.forget-pwd .forget-btn {\n  width: 80px;\n  height: 30px;\n  margin-left: 36%;\n  margin-bottom: 5px;\n}\n.forget-pwd {\n  display: none;\n}\n@media (max-width: 992px) {\n  select,\n  option,\n  input,\n  h4,\n  h5,\n  span,\n  label,\n  span,\n  li,\n  button {\n    font-size: 10px;\n  }\n}\n@media (min-width: 992px) {\n  select,\n  input,\n  h4,\n  h5,\n  span,\n  label,\n  span,\n  li,\n  button {\n    font-size: 14px;\n  }\n}\n.select {\n  border-color: #d3d3d3;\n  padding: 4px 6px 6px 4px;\n  outline: none;\n  border-radius: 3px;\n}\n.select:focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.select:focus {\n  border-color: #467EAD;\n}\n.select option {\n  width: 100%;\n}\n.error {\n  display: none;\n  color: red;\n  position: absolute;\n}\n@media (max-width: 992px) {\n  .error {\n    right: 0;\n    top: 14px;\n  }\n}\n@media (min-width: 992px) {\n  .error {\n    right: 60px;\n    top: 24px;\n  }\n}\nform .input-box {\n  position: relative;\n  border-bottom: 1px solid #E1E4E7;\n}\n@media (max-width: 992px) {\n  form .input-box {\n    padding: 10px 10px;\n  }\n}\n@media (min-width: 992px) {\n  form .input-box {\n    padding: 20px 30px;\n  }\n}\nform .input-box h4 {\n  text-align: left;\n  font-weight: bold;\n  color: #444444;\n  padding: 0 10px;\n}\n@media (min-width: 992px) {\n  form .input-box h4 {\n    padding-left: 100px;\n  }\n}\nform .input-box input[type=\"text\"] {\n  height: 32px;\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  transfrom: box-shadow;\n}\nform .input-box input[type=\"text\"]:focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\nform .input-box select {\n  border-color: #d3d3d3;\n  padding: 4px 6px 6px 4px;\n  outline: none;\n  border-radius: 3px;\n}\nform .input-box select:focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\nform .input-box select:focus {\n  border-color: #467EAD;\n}\nform .input-box select option {\n  width: 100%;\n}\nform .input-box .sex input {\n  margin: 2px 6px 0 0;\n}\nform .input-box textarea {\n  outline: none;\n  border: 1px solid #E1E4E7;\n  padding: 10px;\n  border-radius: 3px;\n  transfrom: box-shadow;\n}\nform .input-box textarea:focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\nform .input-box .time-box {\n  position: relative;\n  padding: 0;\n}\nform .input-box #mail,\nform .input-box #qq {\n  ime-mode: disabled;\n}\nform .skill-content {\n  padding: 0;\n}\nform .add-skill-box {\n  position: relative;\n  width: 70%;\n  height: 30px;\n  border: 1px dashed #888888;\n  border-radius: 3px;\n  margin-top: 10px;\n  cursor: pointer;\n}\nform .add-skill-box:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 15px;\n  left: 0;\n  width: 100%;\n  height: 0;\n  border-bottom: 1px dashed #888888;\n}\nform .add-skill-box:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 100%;\n  border-left: 1px dashed #888888;\n}\nform .border-top {\n  border-top: 1px solid #E1E4E7;\n}\n#submit {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n#submit:hover {\n  background-color: #3082f9;\n}\n#submit:active {\n  background-color: #1F71E8;\n}\n", ""]);

// exports


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(7, function() {
			var newContent = __webpack_require__(7);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[63]);