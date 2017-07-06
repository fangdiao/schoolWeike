var $ = require("jquery");
var time_str = require("../../view/time.html");
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