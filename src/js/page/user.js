require("../components/npm.js");
require("../../css/page/user.less");
const content_path = require("../components/content_path");
var user_str = require("../../view/user.html");


(function($) {
	console.log(localStorage.weikeData)
	var weikeData = localStorage.weikeData ? JSON.parse(localStorage.weikeData) : false;
	var token =  'Bearer ' + JSON.parse(localStorage.weikeData).data.token;
	var toRegister = `<div><a target='_blank' href='register.html'></a></div>`;
	var noData = `<h5>暂无消息</h5>`
	//菜单切换
	var exchageMenu = {
		info: function() {
			$('header').after(user_str);
			var li = $('.menu').find('li');
			var contentBox = $('.content-box');
			for (var i = 0; i < li.length; i ++) {
				li.eq(i).attr('index', i);
				contentBox.eq(i).attr('index', i);
			}
		},
		change: function(index) {
			$('.menu').find('li').eq(index).addClass('active').siblings().removeClass('active');
			$('.content-box').eq(index).css('display', 'block').siblings().css('display', 'none');
		},
		action: function () {
			this.info();
			this.eventClick();
		},
		eventClick: function() {
			var that = this;
			$('body').on('click', '.menu', function(event) {
				var target = $(event.target);
				that.change(target.attr('index'));
			});
		}
	}

	//获取留言
	var getMessage = {
		get: function() {
			var that = this;
			var url = content_path + '/WeiKe/messageList';
			if (localStorage.weikeData) {
				$.ajax({
					type: "get",
					url: url,
					beforeSend:function(request) {
						request.setRequestHeader("Authorization", token);
						request.setRequestHeader("Content-Type", 'application/json;charset=UTF-8');
					},
					success: function(response) {
						that.messageToDom(response.data);
					},
					error: function(err){
						console.log(err)
					}
				});
			}
		},
		messageToDom: function(data) {
			console.log(data)
			var receive = $('.receive').find('ul'),
					send = $('.send').find('ul'),
					receiveData = data.fromMessages,
					sendData = data.toMessages;
			//发送的消息
			if (receiveData.length > 0) {
				for (var i = 0; i < receiveData.length; i ++) {
					var module = `<li class="message-box clearfix">
													<div class="clearfix">
														<div class="left">
															<p>${receiveData[i].fromName}</p>
														</div>
														<div class="right clearfix">
															<p>${receiveData[i].content}</p>
														</div>
													</div>
													<span data-id=${receiveData[i].id} class="delete"><i class="iconfont">&#xf0008;</i>删除</span>
													<span>${this.getTime(receiveData[i].createDate)}</span>
												</li>`
					receive.append(module);
				}
			} else {
				receive.append(noData);
			}
			//接收的消息
			if (sendData.length > 0) {
				for (var i = 0; i < sendData.length; i ++) {
					var module = `<li class="message-box clearfix">
													<div class="clearfix">
														<div class="left">
															<p>${sendData[i].fromName}</p>
														</div>
														<div class="right clearfix">
															<p>${sendData[i].content}</p>
														</div>
													</div>
													<span data-id=${sendData[i].id} class="delete"><i class="iconfont">&#xf0008;</i>删除</span>
													<span>${this.getTime(sendData[i].createDate)}</span>
												</li>`
					send.append(module);
				}
			} else {
				send.append(noData);
			}
		},
		//处理时间戳
		getTime: function(data) {
			var date = new Date(data);
			Y = date.getFullYear() + '-';
			M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			D = date.getDate() + ' ';
			return Y + M + D;
		},
		//删除
		delete: function(data) {
			var url = content_path + '/WeiKe/deleteMessage';
			$.ajax({
				type: 'post',
				url: url,
				data: JSON.stringify({'id': data}),
				beforeSend: function(request) {
					request.setRequestHeader("Authorization", token);
					request.setRequestHeader("Content-Type", 'application/json;charset=UTF-8');
				},
				success: function(response) {
					if (response.ifSuccess) {
						var del = $('.delete');
						for (var i = 0; i < del.length; i ++) {
							if (del.eq(i).attr('data-id') === data) {
								del.eq(i).parent().remove();
							}
						}
					}
				},
				error: function(err){
					console.log(err)
				}
			});
		},
		eventClick: function() {
			var that = this;
			$('body').on('click', '.message', function(event) {
				var target = $(event.target);
				if (target.attr('data-id')) {
					console.log('1')
					that.delete(target.attr('data-id'));
				}
			});
		},
		action: function() {
			this.get();
			this.eventClick();
		}
	}
	//获取资料
	var getInformation = {
		info: function() {
			var information = $('.information');
			var noInformation = `<div class='no-information'>
															<p>您还没填写个人资料</p>
															<div>
																<a href="register.html" target="_blank">现在去填写</a>
															</div>
														</div>`
			if (!weikeData.data.isCompleted) {
				information.html(noInformation);
			} else {
				this.get();
			}
		},
		get: function() {
			var that = this;
			if (weikeData.data.role === 'ROLE_STUDENT') {
				$('.information ul').eq(0).css('display', 'block');
				var url = content_path + '/WeiKe/student/personalData';
			} else {
				$('.information ul').eq(1).css('display', 'block');
				var url = content_path + '/WeiKe/teacher/personalData';
			}
			if (localStorage.weikeData) {
				$.ajax({
					type: "GET",
					url: url,
					beforeSend:function(request) {
						request.setRequestHeader("Authorization", token);
						request.setRequestHeader("Content-Type", 'application/json;charset=UTF-8');
					},
					success: function(response) {
						that.informtionToDom(response.data);
					},
					error: function(err){
						console.log(err)
					}
				});
			}
		},
		informtionToDom: function(data) {
			localStorage.weikeUser = JSON.stringify(data);
			for (var attr in data) {
        if(!data[attr]) {
          data[attr] = '无';
        }
      }
			if (weikeData.data.role === 'ROLE_STUDENT') {
				//skill
				if (data.skills !== '无') {
					var skill = $('.s-skill');
					for (var i = 0; i < data.skills.length; i ++) {
						var span = `<span>${data.skills[i]}</span>`
						skill.append(span);
					}
				}
				$('.s-username').html(data.username);
				$('.s-sex').html(data.sex);
				$('.s-edu').html(data.eduBackgroud);
				$('.s-university').html(data.university);
				$('.s-major').html(data.majorAndGrade);
				$('.s-entry').html(data.entryUniversity);
				$('.s-leave').html(data.leaveUniversity);
				$('.s-qq').html(data.qq);
				$('.s-exp').html(data.experience);
				$('.s-self').html(data.selfFeel);
				$('.s-level').html(data.level);
				$('.s-email').html(data.email);
			} else {
				$('.t-username').html(data.username);
				$('.t-sex').html(data.sex);
				$('.t-university').html(data.university);
				$('.t-academy').html(data.academy);
				$('.t-rank').html(data.rank);
				$('.t-qq').html(data.qq);
				$('.t-email').html(data.email);
			}
		}
	}
	//获取项目
	var getProject= {
		getProject: function() {
			var that = this;
			if (weikeData.data.role === 'ROLE_STUDENT') {
				var url = content_path + '/WeiKe/student/allProject';
			} else {
				var url = content_path + '/WeiKe/teacher/allProject';
			}
			if (localStorage.weikeData) {
				$.ajax({
					type: "GET",
					url: url,
					beforeSend:function(request) {
						request.setRequestHeader("Authorization", token);
						request.setRequestHeader("Content-Type", 'application/json;charset=UTF-8');
					},
					success: function(response) {
						that.projectToDom(response.data);
					},
					error: function(err){
						console.log(err)
					}
				});
			}
		},
		projectToDom: function(data) {
			console.log(data)
			var projectHistory = $('.project-history ul');
			projectHistory.empty();
			if (data.length > 0) {
				for (var i = 0; i < data.length; i ++ ) {
					var module = `<li>
													<a href="details.html?projectName=${data[i]}" target='_blank'>${data[i]}</a>
												</li>`
					projectHistory.append(module);
				}
			} else {
				projectHistory.append(noData);
			}
		}
	}
 	exchageMenu.action();
	getInformation.info();
	getProject.getProject();
	getMessage.action();

})(jQuery);
