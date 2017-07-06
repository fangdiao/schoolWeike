const $ = require("jquery");
const rotation_str = require("../../view/rotation.html");
const rotation = function () {};
rotation.prototype = {
  index: 0,
  box: null,
  width: 0,
  timer: null,
  info: function () {
    var rotation = $(".rotation");
    rotation.html(rotation_str);
    var span = $(".icon").find("span");
    for (var i = 0;i < span.length;i++) {
      span.eq(i).attr("index", i);
    }
    this.width = rotation.width();
    this.box = rotation.find("ul");
  },
  autoPlay: function () {
    var that = this;
    this.timer = setInterval(function () {
      that.index = that.index === 4 ? 0 : ++that.index;
      that.move(that.index);
    },3000);
  },
  move: function (index) {
    var that = this;
    this.box.stop().animate({"left": - index * that.width},300,function () {
      $(".icon > span").eq(index).addClass("active").siblings().removeClass("active");
    });
  },
  action: function () {
    this.info();
    this.addEvent();
    this.autoPlay();
  },
  addEvent: function () {
    var that = this;
    $("body").on("click", ".rotation", function (event) {
      var target = $(event.target);
      if (target.hasClass("to-left") || target.parent().hasClass("to-left")) {
        that.index = that.index === 0 ? 4 : --that.index;
        that.move(that.index);
      } else if (target.hasClass("to-right") || target.parent().hasClass("to-right")) {
        that.index = that.index === 4 ? 0 : ++that.index;
        that.move(that.index);
      } else if (event.target.nodeName === "SPAN") {
        that.move(target.attr("index"));
      }
    });
    $(".rotation").on({
      mouseover: function () {
        clearInterval(that.timer);
      },
      mouseout: function () {
        clearInterval(that.timer);
        that.autoPlay();
      }
    });
    $(window).on({
      focus: function () {
        clearInterval(that.timer);
        that.autoPlay();
      },
      blur: function () {
        clearInterval(that.timer);
      }
    })
  }
};
module.exports = rotation;