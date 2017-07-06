require("../components/npm.js");
require("../../css/page/index.less");
const index_str = require("../../view/index.html");
const rotation = require("../components/rotation.js");
const content_path = require("../components/content_path");
const rotation_go = new rotation();

(function () {
	
	//token
	let tokenData = localStorage.token;
	let token = "Bearer " + tokenData;
  
  let index = {
  	initial:function(){
  		$(".user-name").html(sessionStorage.user_name);
  		$.ajax({
  			type:"GET",
  			contentType:"application/json;charset=UTF-8',",
  			url:content_path + "/weike/index",
  			async:true,
  			success:function(response){
  				let res = response;
  				console.log(response)
  				if(res.ifSuccess){
  					let moduleRow = `<div class="row"></div>`;
						$('.late-pro h3').after(moduleRow);
						$('.hot-pro h3').after(moduleRow);
						for(let i = 0;i < 8;i ++){
							let module = `<div class="col-xs-12 col-sm-6 col-md-3 project-box">
			          <a href="javascript:void(0)">
			            <div class="clearfix">
			              <p>项目名称:</p>
			              <p class="p-name">${res.data[i].projectName}</p>
			            </div>
			            <div class="clearfix">
			              <p>项目类型:</p>
			              <p class="p-type">${res.data[i].projectProfile}</p>
			            </div>
			            <div class="clearfix">
			              <p>项目人员:</p>
			              <p class="p-people">${res.data[i].email}</p>
			            </div>
			            <div class="clearfix">
			              <p class="pro-time">QQ:${res.data[i].qq}</p>
			            </div>
			            <div class="join-pro">
			              <button class="join" type="text">点击参与</button>
			            </div>
			          </a>
			        </div>`
							$('.late-pro .row').append(module);
	  				}
						for(let j = 8;j < 16;j ++){
							let module = `<div class="col-xs-12 col-sm-6 col-md-3 project-box">
				          <a href="javascript:void(0)">
				            <div class="clearfix">
				              <p>项目名称:</p>
				              <p class="p-name">${res.data[j].projectName}</p>
				            </div>
				            <div class="clearfix">
				              <p>项目类型:</p>
				              <p class="p-type">${res.data[j].projectType}</p>
				            </div>
				            <div class="clearfix">
				              <p>项目人员:</p>
				              <p class="p-people">${res.data[j].projectPeople}</p>
				            </div>
				            <div class="clearfix">
				              <p class="pro-time">${res.data[j].projectDate}</p>
				            </div>
				            <div class="join-pro">
				              <button class="join" type="text">点击参与</button>
				            </div>
				          </a>
				        </div>`
							$('.hot-pro .row').append(module);
						}
	  			}
  				else{
  					alert("获取数据失败")
  				}
  			},
  			error:function(err){
  				alert("获取数据失败");
  			}
  		});
  		
  	},
    action:function () {
      $("header").after(index_str);
      rotation_go.action();
      this.initial();
      this.addEvent();
    },
    windowScroll: function () {
      var top = $(document).scrollTop(),
          search = $(".search-sec");
      if (top > 100) {
        if (!search.hasClass("fixed")) {
          search.hide().addClass("fixed").slideDown(200);
        }
      } else if (top <= 100) {
        if (search.hasClass("fixed")) {
          search.removeClass("fixed");
        }
      }
    },
    addEvent:function () {
      var that = this;
      //鼠标滚动事件
      $(window).scroll(function () {
        that.windowScroll();
      });
      
      //点击事件
      $('body').on('click','.index',function(event){
				var target = event.target;
				/*点击搜索*/
				if(target.className === 'iconfont'){
					
					var searchVal = $('.search-bar input').val();
					var searchRE = /((?=[\x21-\x7e]+)[^A-Za-z0-9])/g;
					if(searchRE.test(searchVal) || searchVal.length === 0){
						alert('不能为空或含有特殊字符，请检查搜索内容');
					}
					else{
						window.open("search.html", "_self", "scrollbars = 1");
						localStorage.searchData = searchVal;
					}
				}
				else if(target.className === 'join'){
					let projectName = $(target).parents(".project-box").find(".p-name").html();
					let topHeight = $(document).scrollTop() + 200;
					$(".index .sendProject").html("项目名 : " + projectName);
					$(".index .sendMessageContainer").css({
						'top' : topHeight
					}).show();
					
				}
				else if(target.className === "sendSure"){
					let content = $("textarea[name='message']").val();
					
					$.ajax({
						type:"POST",
						contentType: 'application/json;charset=UTF-8',
          	url: content_path + "/WeiKe/sendMessage",
          	dataType: "json",
          	data: {'projectName':"",'content':""},
						beforeSend:function(request) {
							request.setRequestHeader("Authorization", token);
						},
						async:true,
						success:function(response){
							alert("参与成功")
						},
						error:function(){
							alert("参与失败")
						}
					});
				}
				else if(target.className === "sendCancel"){
					$(".sendMessageContainer").hide();
					$("textarea[name='message']").val("");
				}
				else if(target.className === 'openProject'){
					window.open("release.html", "_self", "scrollbars = 1");
				}
			});
    }
  };
  index.action();
})(jQuery);