require("../components/npm.js");
require("../../css/page/register.less");
//获取技能盒子组件
const skillBox = require("../components/skill_box.js");
const skill_box = new skillBox();
//获取图片裁剪组件
const cutPicture = require("../components/cut_picture.js");
const cut_picture = new cutPicture();
//获取register页面的html模板
const register_str = require("../../view/register.html");
//请求路径
const content_path = require("../components/content_path");
(function () {
var register = {
    //用户类型
    user_type:"",
    //token值
    token: "",
    //学生表单存储对象
    student_form:{
      sex: "",
      image: "test",
      university: "",
      majorAndGrade: "",
      eduBackgroud: "",
      entryUniversity: "",
      leaveUniversity: "",
      skills: [],
      experience: "",
      selfFeel: "",
      qq: ""
    },
    //老师表单存储对象
    teacher_form:{
      sex:"",
      image: "",
      university: "",
      academy: "",
      rank: "",
      qq: ""
    },
    //初始化
    info:function () {
      var weikeData = JSON.parse(localStorage.weikeData);
      $(".user-name").html(weikeData.data.username);
      //获取token,提交表单使用
      var tokenData = weikeData.data.token
			var token = "Bearer " + tokenData;
			//根据localStorage的值获取用户类型,呈现不同的表单
      this.user_type = weikeData.data.role;
      this.token = token;
      if (this.user_type === "ROLE_STUDENT") {
        $("header").after(register_str);
        $(".teacher").remove();
      } else {
        $(".register").find(".student").remove();
        $("header").after(register_str);
         $(".student").remove();
      }
      skill_box.action();
      //删除teacherForm一起引入的user html
      $(".user").remove();



      let weikeUser = JSON.parse(localStorage.getItem("weikeUser"));
      let studentForm = weikeUser;
      let teacherForm = weikeUser;



      if (weikeUser) {
        //初始化教师的资料
        $(".teacher img").src = teacherForm.image;
        $(".teacher input[id='t-name']").val(teacherForm.username);
        if(teacherForm.sex === "男"){
        	$(".teacher .sex input[value='男']").attr("checked", true);
        }else{
        	$(".teacher .sex input[value='女']").attr("checked", true);
        }
        let rankOption = $(".teacher #t-rank option");
        let rankOptionLength = rankOption.length;
        for(let i = 0; i < rankOptionLength; i ++){
        	if($(".teacher #t-rank option").eq(i).val() === teacherForm.rank){
        		$(".teacher #t-rank option").eq(i).attr("selected",true);
        	}
        }
        $(".teacher input[id='t-qq']").val(teacherForm.qq);

        //初始化学生的资料
        $(".student img").src = studentForm.image;
        $(".student input[id='s-name']").val(studentForm.username);
        if(studentForm.sex === "男"){
        	$(".student .sex input[value='男']").attr("checked", true);
        }else{
        	$(".student .sex input[value='女']").attr("checked", true);
        }
        //学历
        let eduOption = $(".student #s-edu-background option");
        let eduOptionLength = eduOption.length;
        for(let i = 0; i < eduOptionLength; i ++){
        	if($(".student #s-edu-background option").eq(i).val() === studentForm.edu_background){
        		$(".student #s-edu-background option").eq(i).attr("selected",true);
        	}
        }
        //专业
        let majorOption = $(".student #s-major option");
        let majorOptionLength = majorOption.length;
        for(let i = 0; i < majorOptionLength; i ++){
        	if($(".student #s-major option").eq(i).val() === studentForm.major){
        		$(".student #s-major option").eq(i).attr("selected",true);
        	}
        }
        //入学时间
        let entryOption = $(".student #s-entry-university option");
        let entryOptionLength = entryOption.length;
        for(let i = 0; i < entryOptionLength; i ++){
        	if($(".student #s-entry-university option").eq(i).val() === studentForm.entry_university){
        		$(".student #s-entry-university option").eq(i).attr("selected",true);
        	}
        }
        //毕业时间
        let leaveOption = $(".student #s-leave-university option");
        let leaveOptionLength = leaveOption.length;
        for(let i = 0; i < leaveOptionLength; i ++){
        	if($(".student #s-leave-university option").eq(i).val() === studentForm.leave_university){
        		$(".student #s-leave-university option").eq(i).attr("selected",true);
        	}
        }
        //技能
        if (studentForm.skills) {
          let skillLength = studentForm.skills.length;
          for(let k = 0; k < skillLength; k ++){
    				let skills = `<span data-show-skill="${studentForm.skills[k]}">${studentForm.skills[k]}</span>`;
    				$(".s .skill-show").append(skills);
    			}
        }
        $("textarea[id = 's-experience'").val(studentForm.experience);
        $(".student input[id='s-qq']").val(studentForm.qq);
        $("textarea[id = 's-self-feel'").val(studentForm.self_feel);
      }

    },
    //错误信息提示
    error: function (ele) {
      var error = "<i class='iconfont error'>&#xe648;</i>";
      if (!ele.next()[0]) {
        ele.after(error);
      }
    },
    //获得学生表单信息
    getStudentForm:function () {
      //判断必填内容是否全部填写
      var flag = true,
          name = $("#s-name"),
          skill = $("span[data-show-skill]"),
          qq = $("#s-qq");
      //必填信息之技能
      if (!skill.length > 0) {
        this.error($(".skill-box"));
        flag = false;
      } else {
        //将技能内容拼接到skills数组
        for (var i = 0;i < skill.length;i++) {
          var each = skill.eq(i).attr("data-show-skill");
          this.student_form.skills.push(each);
        }
      }
      //必填信息之qq
      if (qq.val() === "") {
        this.error(qq);
        flag = false;
      } else {
        this.student_form.qq = qq.val();
      }
      //当flag为true时,则三个必填信息都OK
      //我们才会进行其他信息获取,并且提交
      //因为这些信息都是有默认值的选择框,或者是非必填内容
      if (flag) {
        this.student_form.sex = $("input:radio[name='s-sex']:checked").val();
        this.student_form.university = $("#s-university").val();
        this.student_form.majorAndGrade = $("#s-major").val();
        this.student_form.eduBackgroud = $("#s-edu-background").val();
        this.student_form.entryUniversity = $("#s-entry-university").val();
        this.student_form.leaveUniversity = $("#s-leave-university").val();
        this.student_form.experience = $("#s-experience").val();
        this.student_form.selfFeel = $("#s-self-feel").val();
        //提交表单
        this.upStudentFrom();
      }
    },
    //获取老师表单信息
    getTeacherForm:function () {
      //判断必填内容是否全部填写
      var flag = true,
          name = $("#t-name"),
          qq = $("#t-qq");
      //必填信息之姓名
      if (!name.val()) {
        this.error(name);
        flag = false;
      } else {
        this.teacher_form.username = name.val();
      }
      //必填信息之qq
      if (!qq.val()) {
        this.error(qq);
        flag = false;
      } else {
        this.teacher_form.qq = qq.val();
      }
      //当flag为true时,则二个必填信息都OK
      //我们才会进行其他信息获取,并且提交
      //因为这些信息都是有默认值的选择框,或者是非必填内容
      if (flag) {
        this.teacher_form.image = 'test';
        this.teacher_form.sex = $("input:radio[name='t-sex']:checked").val();
        this.teacher_form.university = $("#t-university").val();
        this.teacher_form.academy = $("#t-academy").val();
        this.teacher_form.rank = $("#t-rank").val();
        //提交表单
        this.upTeacherForm();
      }
    },
    //提交学生表单
    upStudentFrom:function () {
      var that = this,
      		form = JSON.stringify(that.student_form),
          path_stu = '';
      var token = that.token;
      if (!localStorage.weikeUser) {
        path_stu = content_path + '/WeiKe/student/addPersonalDeail';
      } else {
        path_stu = content_path + '/WeiKe/student/updateInfo';
      }
      console.log(that.token)
      $.ajax({
        url: path_stu,
        type: "POST",
        data: form,
        dataType: 'json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', token);
          xhr.setRequestHeader("Content-Type", 'application/json;charset=utf-8');
        },

        success: function (data) {
          if (data.ifSuccess) {
            if (localStorage.weikeUser) {
              alert('个人信息修改成功，返回主页');
            } else {
              alert('个人信息填写成功，返回主页');
            }
            window.location.href = 'index.html';
          }
        },
        error: function (data) {
          alert('错误');
        }
      });
    },
    //提交老师表单
    upTeacherForm:function () {
      var that = this;
          path_stu = '';
      if (!localStorage.weikeUser) {
        path_stu = content_path + '/WeiKe/teacher/addPersonal';
      } else {
        path_stu = content_path + '/WeiKe/teacher/updateInfo';
      }
      $.ajax({
        url: path_stu,
        type: "post",
        contentType: "application/json",
        beforeSend:function(request) {
					request.setRequestHeader("Authorization", that.token);
				},
        data: JSON.stringify(that.teacher_form),
        success: function (data) {
          if (data.ifSuccess) {
            console.log(localStorage.weikeUser)
            if (localStorage.weikeUser) {
              alert('个人信息修改成功，返回主页');
            } else {
              alert('个人信息填写成功，返回主页');
            }
            window.location.href = 'index.html';
          }
        },
        error: function (data) {
          alert('错误');
        }
      });
    },
    //程序入口
    action:function () {
      this.info();
      this.addEvent();
    },
    //绑定事件
    addEvent:function () {
      var that = this;
      $(".register").on("click",function (event) {
        var target = event.target;
        //提交表单
        if (target.id === "submit") {
          if (that.user_type === "ROLE_STUDENT") {
            that.getStudentForm();
          } else {
            that.getTeacherForm();
          }
        //已选择的技能点击一下就删除且在技能栏内移出激活状态
        }
      });
      $(".head-img").on("change",function (event) {
        if (this.files[0].type.match(/image.*/)) {
         cut_picture.action(this.files[0],that.user_type);
        } else {
          alert("只能上传图片");
        }
      });
      //聚焦必填文本框时隐藏后面的小红叉
      $(".must").on("focus",function () {
        $(this).next().hide();
      });
      //qq文本框只能输入数字
      $("#t-qq,#s-qq").on("blur",function (event) {
        $(this).val($(this).val().replace(/[^0-9.]/g, ''));
      });
    }
};
register.action();
})(jQuery);
