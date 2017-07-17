require("../components/npm.js");
require("../../css/page/index.less");
const index_str = require("../../view/index.html");
const rotation = require("../components/rotation.js");
const content_path = require("../components/content_path");
const rotation_go = new rotation();
const applyProjectBox = require('../components/applyProjectBox');

(function () {

	//token
	if (localStorage.weikeData) {
		const weikeData = JSON.parse(localStorage.weikeData);
		const token = "Bearer " + weikeData.data.token;
	}

  let index = {
  	initial:function(){
  		//$(".user-name").html(weikeData.data.user_name);
  		$.ajax({
  			type:"GET",
  			contentType:"application/json;charset=UTF-8',",
  			url:content_path + "/weike/index",
  			async:true,
  			success:function(response){
  				let res = response;
  				console.log(response)
  				if(res.ifSuccess){
  					const moduleRow = $('.pro-box');
						for (let i = 0;i < 16;i ++) {
								let module = `<div class="col-xs-12 col-sm-6 col-md-3 project-box">
				          <a href="details.html?projectName=${res.data[i].projectName}" target='_blank'>
				            <div class="clearfix">
				              <p>项目名称:</p>
				              <p class="p-name">${res.data[i].projectName}</p>
				            </div>
				            <div class="clearfix">
				              <p>项目类型:</p>
				              <p class="p-type">${res.data[i].projectProfile}</p>
				            </div>
										<div class="clearfix">
				              <p>联系人&nbsp;&nbsp;&nbsp;:</p>
				              <p class="p-people">${res.data[i].projectConnector}</p>
				            </div>
				            <div class="clearfix h-email">
				              <p>邮箱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
				              <p class="p-people">${res.data[i].email}</p>
				            </div>
				            <div class="clearfix">
				              <p class="pro-qq">QQ:${res.data[i].qq}</p>
				            </div>
				            <div class="join-pro">
				              <button class="join" type="text">点击参与</button>
				            </div>
				          </a>
				        </div>`
								moduleRow.append(module);
							}
						}
					}
				});
  	},
    action:function () {
      $("header").after(index_str);
      rotation_go.action();
      this.initial();
      this.addEvent();
			applyProjectBox.eventClick();
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
						sessionStorage.searchData = searchVal;
					}
				}
				else if(target.className === 'join'){
					event.preventDefault();
					var projectName = $(target).parents(".project-box").find(".p-name").html();
					applyProjectBox.show(projectName);
					return false;

				} else if(target.className === 'openProject'){
					if (localStorage.weikeData) {
						var weikeData = JSON.parse(localStorage.getItem('weikeData'));
						if (weikeData.data.isCompleted) {
							window.open("release.html", "_self", "scrollbars = 1");
						} else {
							window.open("register.html", "_self", "scrollbars = 1");
						}
					} else {
						alert('请登录')
					}


				}
			});
    }
  };
  index.action();
})(jQuery);
