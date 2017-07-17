require("../components/npm.js");
require("../../css/page/search.less");
const content_path = require("../components/content_path");
var list_str = require("../../view/search.html");
const applyProjectBox = require('../components/applyProjectBox');
$("header").after(list_str);

(function($){

	var dataLength = 0;

	/*主页的搜索内容拿到搜索页*/
	if(sessionStorage.searchData){
		$('.search-bar input').val(sessionStorage.searchData);
		sessionStorage.removeItem('searchData');
	}

	//获取token
	const weikeData = JSON.parse(localStorage.weikeData);
	var token = "Bearer " + weikeData.data.token;

	//点击搜索执行
	function searchInputData(){

		if(typeof $('.search-promot') !== 'undefined'){
			$('.search-promot').remove();
		}
		var searchBoxVal = $('.search-bar input').val();
		var searchBoxValLength = searchBoxVal.length;
		if(searchBoxValLength !== 0){
			$.ajax({
				type:"GET",
				contentType: 'application/json;charset=UTF-8',
				url: content_path + "/weike/projectsByWords",
				dataType: 'json',
				data:{'keyWords': searchBoxVal},
				beforeSend:function(request) {
					request.setRequestHeader("Authorization", token);
				},
				async:true,
				success: function(response){
					//请求成功并且有数据
					console.log(response)
					let moduleRow = $('.search-box');
					moduleRow.empty();
					if (response.ifSuccess) {
						dataLength = response.data.length;
						for (let i = 0; i < dataLength; i++) {
							let module = `<div class="col-xs-12 col-sm-6 col-md-3 project-box">
								<a href="details.html?projectName=${response.data[i].projectName}">
									<div class="clearfix">
										<p>项目名称 :</p>
										<p class="p-name">${response.data[i].projectName}</p>
									</div>
									<div class="clearfix">
										<p>项目类型 :</p>
										<p class="p-type">${response.data[i].projectProfile}</p>
									</div>
									<div class="clearfix">
										<p>联系人&nbsp;&nbsp;&nbsp;:</p>
										<p class="p-people">${response.data[i].projectConnector}</p>
									</div>
									<div class="clearfix h-email">
										<p>邮箱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</p>
										<p class="p-people">${response.data[i].email}</p>
									</div>
									<div class="clearfix">
										<p class="pro-qq">QQ:${response.data[i].qq}</p>
									</div>
									<div class="join-pro">
										<button class="join" type="text">点击参与</button>
									</div>
								</a>
							</div>`
							moduleRow.append(module);
						}
					} else {

						var noData = `<h4 class='no-data'>没有数据!</h4>`;
						console.log('no')
						moduleRow.html(noData);
					}
				},
				error: function(data) {
					console.log(data);
				}
			});
		}
	}

	function search(){}

	search.prototype = {

		/*加载直接调用*/
		searchOnLoad:function() {
			$(".user-name").html(weikeData.data.user_name);
			let searchData = $('.search-bar input').val();
			let searchDataLength = searchData.length;
			if( searchDataLength !== 0){
				searchInputData();
			}
		},

		/*search页点击事件*/
		searchClick:function() {
			$('body').on('click','.search',function(event){
				var target = $(event.target);
				console.log(event)
				/*点击搜索*/
				if(target.hasClass('iconfont')){
					var searchVal = $('.search-bar input').val();
					var searchRE = /((?=[\x21-\x7e]+)[^A-Za-z0-9])/g;
					if(searchRE.test(searchVal) || searchVal.length === 0){
						alert('不能为空或含有特殊字符，请检查搜索内容');
					}
					else{
						searchInputData();

					}
				} else if(target.hasClass('sea-search-right')){
					window.open("release.html", "_self", "scrollbars = 1");
				} else if(event.target.className === 'join'){
					event.preventDefault();
					var projectName = $(event.target).parents(".project-box").find(".p-name").html();
					applyProjectBox.show(projectName);
					return false;
				}
			});
		},

		searchBegin:function(){
			this.searchOnLoad();
			this.searchClick();
			applyProjectBox.eventClick();
		}
	}

	var searchNew = new search();
	searchNew.searchBegin();
})(jQuery)
