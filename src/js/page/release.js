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
let token = 'Bearer ' + JSON.parse(localStorage.weikeData).data.token;
  //表单
let form = {
  projectName: "",
  projectKind: "",
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
  //获取时间
  getTime: function() {
    form.projectStart = $('.num-y').eq(0).val() + $('.num-m').eq(0).val() + $('.num-d').eq(0).val();
    form.projectEnd = $('.num-y').eq(1).val() + $('.num-m').eq(1).val() + $('.num-d').eq(1).val();
  },
  //获得表单
  getForm:function () {
    this.getTime();
		form.projectName = $('input[id="name"]').val();
    form.projectType = $('#type').val();
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

      let userType = JSON.parse(localStorage.weikeData).data.role;
      let addProjectUrl = null;
      if (userType === 'ROLE_STUDENT'){
      	 addProjectUrl = content_path + "/WeiKe/student/addProject";
      } else {
      	 addProjectUrl = content_path + "/WeiKe/teacher/addProject";
      }

      //提交表单
      if(target.id === 'submit'){
      	that.getForm();
        console.log(form);
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
              window.location.href = 'index.html';
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
