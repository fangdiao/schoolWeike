require("../components/npm.js");
require("../../css/page/user.less");
require("../../css/page/release.less");
const content_path = require("../components/content_path");
var user_str = require("../../view/user.html");
//time组件
const time = require("../components/time.js");
const timeGo = new time();
//skill技能组件
const skill_box_str = require("../../view/skill_box.html");
const skillBox = require("../components/skill_box.js");
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
			$(".user-name").html(sessionStorage.user_name);
			//获取token
			that.token = localStorage.token;
			that.userType = sessionStorage.userType;
			
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
					localStorage.setItem("weike",weike);
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
					localStorage.setItem("weike",weike);
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
