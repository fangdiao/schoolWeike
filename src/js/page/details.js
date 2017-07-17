(function($) {
  require("../components/npm.js");
  require("../../css/page/details.less");
  const details_str = require("../../view/details.html");
  const content_path = require("../components/content_path");
  const applyProjectBox = require('../components/applyProjectBox');

  var weikeData = localStorage.weikeData ? JSON.parse(localStorage.weikeData) : false;
  var token = weikeData ? 'Bearer ' + weikeData.data.token : false;


  var details = {
    load: function(projectName) {
      var that = this;
      $.ajax({
        type: 'get',
        url: content_path + '/weike/projectName',
        data: {'projectName': projectName},
        beforeSend:function(request) {
          request.setRequestHeader("Content-Type", 'application/json;charset=UTF-8');
        },
        success: function(response) {
          that.messageToDom(response.data);
        },
        error: function(err){
          console.log(err)
        }
      });
    },
    messageToDom: function(data) {
      for (var attr in data) {
        if(!data[attr]) {
          data[attr] = '无';
        }
      }
      console.log(data)
      if (data.projectNeed !== '无') {
        var skill = $('.p-skill');
        for (var i = 0; i < data.projectNeed.length; i ++) {
          var span = `<span>${data.projectNeed[i]}</span>`
          skill.append(span);
        }
      }
      $('.p-name').html(data.projectName);
      $('.p-kind').html(data.projectKind);
      $('.p-connec').html(data.projectConnector);
      $('.p-qq').html(data.qq);
      $('.p-email').html(data.email);
      $('.p-num').html(data.numNeed);
      $('.p-start').html(data.projectStart);
      $('.p-end').html(data.projectEnd);
      $('.p-profile').html(data.projectProfile);
    },
    getUrlParam:function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg);  //匹配目标参数
      if (r != null) {
        this.load(unescape(r[2]));
        $('button').attr('value', unescape(r[2]));
      } else {
        return null; //返回参数值
      }
    },
    eventClick: function() {
      var that = this;
      $('body').on('click', '.details', function(event) {
        var target = $(event.target);
        if (target.attr('id') === 'join') {x
          var projectName = target.attr('value');
          applyProjectBox.show(projectName);
        }
      });
    },
    action: function() {
      $('header').after(details_str);
      this.getUrlParam('projectName');
      applyProjectBox.eventClick();
      this.eventClick();
    }
  }

  details.action();
  applyProjectBox.eventClick();
})(jQuery);
