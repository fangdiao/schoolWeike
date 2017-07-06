var $ = require("jquery");
var cut_picture_str = require("../../view/cut_picture.html");
function cutPicture () {};
cutPicture.prototype = {
  user_type: "",
  //用户上传图片的模板
  img: null,
  //画布
  canvas_context: null,
  //放大缩小后的img
  bg: null,
  //当前显示的bg位置
  position:{width: 0,height: 0},
  //用户上传图片预处理
  getFile:function (file) {
    var that = this;
    var img = new Image();
    var img_url = window.URL.createObjectURL(file) || window.webkitURL.createObjectURL(file);
    img.src = img_url;
    img.onload = function () { 
      var rate = 0;
      if (img.width <= img.height) {
        rate = img.width / 180;
      } else {
        rate = img.height /180;
      }
      var drawing = document.createElement("canvas");
      var context = drawing.getContext("2d");
      drawing.setAttribute("width",parseInt(img.width / rate));
      drawing.setAttribute("height",parseInt(img.height / rate));
      context.drawImage(img,0,0,img.width,img.height,0,0,img.width / rate,img.height / rate);
      that.img = drawing;
      if (drawing.width >= drawing.height) {
        that.canvas_context.drawImage(drawing,(drawing.width - 240) / 2,0,240,240,0,40,240,240);
        that.position.width = (drawing.width - 240) / 2;
        that.position.height = 0;
      } else {
        that.canvas_context.drawImage(drawing,0,(drawing.height - 240) / 2,240,240,40,0,240,240);
        that.position.width = 0;
        that.position.height = (drawing.height - 240) / 2;
      }
      /*that.zoomImg(1);*/
    }
  },
  //放大缩小图片
  zoomImg:function (range) {
    var width = parseInt(this.img.width * range),
        height = parseInt(this.img.height * range);
    this.bg.setAttribute("width",width + 80);
    this.bg.setAttribute("height",height + 80);
    this.bg.getContext("2d").drawImage(this.img,0,0,this.img.width,this.img.height,40,40,width,height);
    this.canvas_context.clearRect(0,0,240,240);
    this.canvas_context.drawImage(this.bg,((this.position.width + 80) * range) - 80,((this.position.height + 80) * range) - 80,240,240,0,0,240,240);
  },
  //入口
  action:function (file,type) {
    $("body").append($(cut_picture_str));
    this.user_type = type;
    var canvas = $(".cut-canvas")[0];
    this.canvas_context = canvas.getContext("2d");
    this.bg = document.createElement("canvas");
    this.getFile(file);
    this.addEvent();
  },
  //拖动canvas
  moveCanvas:function (x,y) {
    this.position.width = x;
    this.position.height = y;
    this.canvas_context.clearRect(0,0,240,240);
    this.canvas_context.drawImage(this.bg,x,y,240,240,0,0,240,240);
  },
  //截取图像并且显示出来
  cutShow:function () {
    var cut = document.createElement("canvas");
    var img =  $(".user-img > img")[0];
    cut.width = "160";
    cut.height = "160";
    cut.getContext("2d").drawImage($(".cut-canvas")[0],40,40,160,160,0,0,160,160);
    var src = cut.toDataURL("image/png");
    img.src = src;
    img.style.display = "block";
    $(".mask,.cut-picture").remove();
    $(".head-img").val(null);
  },
  //事件绑定
  addEvent:function () {
    var that = this;
    var start_x;
    var start_y;
    $(".cut-canvas").on("mousedown",function (event) {
      start_x = event.screenX;
      start_y = event.screenY;
      event.preventDefault();
      $(window).on({
        mousemove:function (event) {
          var width = that.position.width - (event.screenX - start_x);
          width = width <= 0 ? 0:width;
          width = width >= that.bg.width - 240 ? that.bg.width - 240 : width;
          var height = that.position.height - (event.screenY - start_y);
          height = height <= 0 ? 0:height;
          height = height >= that.bg.height - 240 ? that.bg.height - 240 : height;
          that.moveCanvas(width,height);
        },
        mouseup:function () {
          move = false;
          $(window).unbind("mousemove");
        }
      });
    });
    $("body").on("input propertychange","input[type=range]",function (event) {
      that.zoomImg($(event.target).val());
    });
    //确定以及关闭按钮
    $("body").on("click",".cut-picture",function (event) {
      var target = event.target;
      if (target.id === "close-cut") {
        $(".mask,.cut-picture").remove();
        $(".head-img").val(null);
      } else if (target.id === "cut-button") {
        that.cutShow();
      }
    });
  }
}
module.exports = cutPicture;











