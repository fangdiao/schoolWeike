require("../components/npm.js");
require("../../css/page/release.less");
const release_str = require("../../view/release.html");
const content_path = require("../components/content_path");
//time组件
const time = require("../components/time.js");
const timeGo = new time();
//skill技能组件
const skill_box_str = require("../../view/skill_box.html");
const skillBox = require("../components/skill_box.js");
const skill_box = new skillBox();
	//token
let tokenData = localStorage.token;
let token = "Bearer " + tokenData;
  //表单
let form = {
  projectName: "",
  projectType: "",
  projectStart: "",
  projectEnd: "",
  numNeed: "",
  projectNeed: [],
  projectProfile: "" 
};

const release = {
  info: function () {
    $("header").after(release_str);
    timeGo.action();
    skill_box.action();
		$(".user-name").html(sessionStorage.user_name);
  },
  action:function () {
    this.info();
    this.addEvent();
  },
  //获得表单
  getForm:function () {
		form.projectName = $('input[id="name"]').val();
		form.projectType = $('input[id="type"]').val();
		form.projectStart = $('.show-time:first-child').html();
		form.projectEnd = $('.show-time:eq(1)').html();
		form.numNeed = $('.skill-people').val();
		form.projectProfile = $('#summary').val();
		var skillShow = $('.skill-show > span');
		var skillShowLength = skillShow.length;
		for(let i = 0; i < skillShowLength; i ++){
			form.projectNeed[i] = $('.skill-show span').eq(i).html();
		}
  },
  //添加事件
  addEvent:function () {
    var that = this;
    $("body").on("click", ".release", function (event) {
      target = event.target;
      
      let userType = sessionStorage.userType;
      let addProjectUrl = null;
      if(userType === 'teacher'){
      	addProjectUrl = content_path + "/WeiKe/teacher/addProject";
      }else if(userType === 'student'){
      	addProjectUrl = content_path + "/WeiKe/student/addProject";
      }
          
      //提交表单
      if(target.id === 'submit'){
      	that.getForm();
      	$.ajax({
    			type: "POST",
          contentType: 'application/json;charset=UTF-8',
          url: addProjectUrl,
          dataType: "json",
          data: JSON.stringify(form),
          beforeSend:function(request) {
						request.setRequestHeader("Authorization", token);
					},
          async: true,
          success: function(response){
          	if(response.ifSuccess){
          		alert("项目发布成功");
          	}else{
          		alert("项目已存在" + response.msg);
          	}
          },
          error: function(err){
          	console.log(err)
          }
      	})
      }
    });
  }
};
release.action();