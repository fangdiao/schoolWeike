require("../components/npm.js");
require("../../css/page/search.less");
const content_path = require("../components/content_path");
var list_str = require("../../view/search.html");

$("header").after(list_str);

(function($){
	
	var dataLength = 0;
	
	/*主页的搜索内容拿到搜索页*/
	if(localStorage.searchData){
		$('.search-bar input').val(localStorage.searchData);
		localStorage.removeItem("searchData");
	}
	
	//获取token
	var tokenData = localStorage.token;
	var token = "Bearer " + tokenData;
	
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
				success:function(response){
					
					//请求成功并且有数据
					if(response.ifSuccess){
						/*数据存在本地*/
						localStorage.searchResponse = JSON.stringify(response);
						
						var res = $.parseJSON(response);
						var resLen = res.data.length;
						var rows = Math.floor(resLen / 4);
						var remainder = resLen % 4;
						
						if(resLen === 0){
							var promot = `<p class = 'search-promot'>没有相关信息</p>`;
							$('.search-pro h3').after(promot);
						}
						else{
							if(rows <= 3){
								for(let i = 0; i < rows; i ++){
									let moduleRow = `<div class="row"></div>`;
									$('.late-pro h3').after(moduleRow);
									for(let j = 0; j < 4; j ++){
										var module = `<div class="col-xs-12 col-sm-6 col-md-3 project-box">
							          <a href="javascript:void(0)">
							            <div class="clearfix">
							              <p>项目名称:</p>
							              <p class="p-name">${res.data[i * 4 + j].projectName}</p>
							            </div>
							            <div class="clearfix">
							              <p>项目类型:</p>
							              <p class="p-type">${res.data[i * 4 + j].projectType}</p>
							            </div>
							            <div class="clearfix">
							              <p>项目人员:</p>
							              <p class="p-people">${res.data[i * 4 + j].projectPeople}</p>
							            </div>
							            <div class="clearfix">
							              <p class="pro-time">${res.data[i * 4 + j].projectDate}</p>
							            </div>
							            <div class="join-pro">
							              <button type="text">点击参与</button>
							            </div>
							          </a>
							        </div>`
										$('.search-pro .row').append(module);
									}	
								}
								if(rows === 0 && remainder !== 0){
									let moduleRow = `<div class="row"></div>`;
									$('.late-pro h3').after(moduleRow);
									for(let k = 0; k < remainder; k ++){
										let module = `<div class="col-xs-12 col-sm-6 col-md-3 project-box">
							          <a href="javascript:void(0)">
							            <div class="clearfix">
							              <p>项目名称:</p>
							              <p class="p-name">${res.data[k].projectName}</p>
							            </div>
							            <div class="clearfix">
							              <p>项目类型:</p>
							              <p class="p-type">${res.data[k].projectType}</p>
							            </div>
							            <div class="clearfix">
							              <p>项目人员:</p>
							              <p class="p-people">${res.data[k].projectPeople}</p>
							            </div>
							            <div class="clearfix">
							              <p class="pro-time">${res.data[k].projectDate}</p>
							            </div>
							            <div class="join-pro">
							              <button type="text">点击参与</button>
							            </div>
							          </a>
							        </div>`
											$('.late-pro .row').append(module);
									}
								}
								else if(rows !== 0 && remainder !== 0){
									let moduleRow = `<div class="row"></div>`;
									$('.late-pro h3').after(moduleRow);
									for(let k = 0; k < remainder; k ++){
										let module = `<div class="col-xs-12 col-sm-6 col-md-3 project-box">
							          <a href="javascript:void(0)">
							            <div class="clearfix">
							              <p>项目名称:</p>
							              <p class="p-name">${res.data[rows * 4 + k].projectName}</p>
							            </div>
							            <div class="clearfix">
							              <p>项目类型:</p>
							              <p class="p-type">${res.data[rows * 4 + k].projectType}</p>
							            </div>
							            <div class="clearfix">
							              <p>项目人员:</p>
							              <p class="p-people">${res.data[rows * 4 + k].projectPeople}</p>
							            </div>
							            <div class="clearfix">
							              <p class="pro-time">${res.data[rows * 4 + k].projectDate}</p>
							            </div>
							            <div class="join-pro">
							              <button type="text">点击参与</button>
							            </div>
							          </a>
							        </div>`
										$('.late-pro .row').append(module);
									}
								}
							}
							else{
								for(let i = 0; i < 3; i ++){
									let moduleRow = `<div class="row"></div>`;
									$('.late-pro h3').after(moduleRow);
									for(let j = 0;j < 4;j ++){
										let module = `<div class="col-xs-12 col-sm-6 col-md-3 project-box">
							          <a href="javascript:void(0)">
							            <div class="clearfix">
							              <p>项目名称:</p>
							              <p class="p-name">${res.data[i * 4 + k].projectName}</p>
							            </div>
							            <div class="clearfix">
							              <p>项目类型:</p>
							              <p class="p-type">${res.data[i * 4 + k].projectType}</p>
							            </div>
							            <div class="clearfix">
							              <p>项目人员:</p>
							              <p class="p-people">${res.data[i * 4 + k].projectPeople}</p>
							            </div>
							            <div class="clearfix">
							              <p class="pro-time">${res.data[i * 4 + k].projectDate}</p>
							            </div>
							            <div class="join-pro">
							              <button type="text">点击参与</button>
							            </div>
							          </a>
							        </div>`
										$('.late-pro .row').append(module);
									}	
								}
								//滚动加载
								searchOnScroll();
							}
						}	
					}
					//失败或没有相关信息
					else{
						var promot = `<p class = 'search-promot'>没有相关信息</p>`;
						$('.search-pro h3').after(promot);
					}
				},
				error:function(err){
					alert("搜索请求失败");
				}
			});
		}
		else{
			alert('搜索数据为空');
		}
	}
	
	/*鼠标滚动*/
	function searchOnScroll(){
		if(localStorage.searchResponse){
			var searchResponseData = localStorage.searchResponse;
			var res = $.parseJSON(searchResponseData);
			var resLen = res.data.length;
			var rows = Math.floor(resLen / 4);
			var remainder = resLen % 4;
			$(window).scroll(function(){
				if(resLen === dataLength){
					$(window).unbind('scroll');
				}
				for(var index = 3; index < rows; index ++){
					let moduleRow = `<div class="row"></div>`;
					$('.late-pro h3').after(moduleRow);
					for(let loop = 0; loop < 4; loop ++){
						var module = `<div class="col-xs-12 col-sm-6 col-md-3 project-box">
			          <a href="javascript:void(0)">
			            <div class="clearfix">
			              <p>项目名称:</p>
			              <p class="p-name">${res.data[index * 4 + loop].projectName}</p>
			            </div>
			            <div class="clearfix">
			              <p>项目类型:</p>
			              <p class="p-type">${res.data[index * 4 + loop].projectType}</p>
			            </div>
			            <div class="clearfix">
			              <p>项目人员:</p>
			              <p class="p-people">${res.data[index * 4 + loop].projectPeople}</p>
			            </div>
			            <div class="clearfix">
			              <p class="pro-time">${res.data[index * 4 + loop].projectDate}</p>
			            </div>
			            <div class="join-pro">
			              <button type="text">点击参与</button>
			            </div>
			          </a>
			        </div>`
						$('.late-pro .row').append(module);
						dataLength ++;
					}
				}
				if(remainder !== 0){
					let moduleRow = `<div class="row"></div>`;
					$('.late-pro h3').after(moduleRow);
					for(var remainderI = 0; remainderI < remainder;remainderI ++){
						var module = `<div class="col-xs-12 col-sm-6 col-md-3 project-box">
			          <a href="javascript:void(0)">
			            <div class="clearfix">
			              <p>项目名称:</p>
			              <p class="p-name">${res.data[rows * 4 + remainderI].projectName}</p>
			            </div>
			            <div class="clearfix">
			              <p>项目类型:</p>
			              <p class="p-type">${res.data[rows * 4 + remainderI].projectType}</p>
			            </div>
			            <div class="clearfix">
			              <p>项目人员:</p>
			              <p class="p-people">${res.data[rows * 4 + remainderI].projectPeople}</p>
			            </div>
			            <div class="clearfix">
			              <p class="pro-time">${res.data[rows * 4 + remainderI].projectDate}</p>
			            </div>
			            <div class="join-pro">
			              <button type="text">点击参与</button>
			            </div>
			          </a>
			        </div>`
						$('.late-pro .row').append(module);
						dataLength ++;
					}
				}
			});
		}
	}
	
	function search(){}
	
	search.prototype = {

		/*加载直接调用*/
		searchOnLoad:function(){
			$(".user-name").html(sessionStorage.user_name);
			let searchData = $('.search-bar input').val();
			let searchDataLength = searchData.length;
			if( searchDataLength !== 0){
				searchInputData();
			}
		},
		
		/*search页点击事件*/
		searchClick:function(){
			$('body').on('click','.search',function(event){
				var target = event.target;
				
				/*点击搜索*/
				if(target.className === 'iconfont'){
					var searchVal = $('.search-bar input').val();
					var searchRE = /((?=[\x21-\x7e]+)[^A-Za-z0-9])/g;
					if(searchRE.test(searchVal) || searchVal.length === 0){
						alert('不能为空或含有特殊字符，请检查搜索内容');
					}
					else{
						searchInputData();
					}
				}
				else if(target.className === 'sea-search-right'){
					window.open("release.html", "_self", "scrollbars = 1");
				}
			});
		},
		
		searchBegin:function(){
			this.searchOnLoad();
			this.searchClick();
		}
	}
	
	var searchNew = new search();
	searchNew.searchBegin();
})(jQuery)
