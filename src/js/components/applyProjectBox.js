require('../../css/page/index.less');
const content_path = require("../components/content_path");
const applyProjectBox_str = require('../../view/applyProjectBox.html');
module.exports = {
  projectName: '',
  sendMessage: function() {
    let that = this;
    let content = $("textarea[name='message']").val();
    let token = 'Bearer ' + JSON.parse(localStorage.weikeData).data.token;
    $.ajax({
      type:"POST",
      url: content_path + "/WeiKe/sendMessage",
      dataType: "json",
      data: JSON.stringify({'projectName': that.projectName,'content': content}),
      beforeSend:function(request) {
        request.setRequestHeader("Authorization", token);
        request.setRequestHeader('content-Type', 'application/json;charset=UTF-8')
      },
      async:true,
      success:function(response){
        alert("参与成功")
      },
      error:function(){
        alert("参与失败")
      }
    });
  },
  show: function(projectName) {
    $('body').append(applyProjectBox_str);
    this.projectName = projectName;
    let topHeight = $(document).scrollTop() + 200;
    $(".sendProject").html("项目名 : " + this.projectName);
    $(".sendMessageContainer").css({
      'top' : topHeight
    }).show();
    return false;
  },
  eventClick: function() {
    var that = this;
    $('body').on('click', '.sendMessageContainer', function(event) {

      var target = $(event.target);
      if (target.hasClass('sendSure')) {
        that.sendMessage();
      } else if (target.hasClass('sendCancel')) {
        $(".sendMessageContainer").hide();
        $("textarea[name='message']").val("");
        $('body').remove('.sendMessageContainer');
      }
    });
  }
}
