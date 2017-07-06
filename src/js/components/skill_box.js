var $ = require("jquery");
var skill_box_str = require("../../view/skill_box.html");
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