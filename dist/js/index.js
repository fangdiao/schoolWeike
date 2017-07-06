webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "/* 全局样式 */\ni {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nbody {\n  min-width: 300px;\n  max-width: 1400px;\n}\nli {\n  list-style-type: none;\n}\n.error {\n  color: red;\n  position: absolute;\n}\n@media (max-width: 992px) {\n  .error {\n    right: 0;\n    top: 14px;\n  }\n}\n@media (min-width: 992px) {\n  .error {\n    right: 60px;\n    top: 24px;\n  }\n}\n.white-button {\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n.button {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n}\n.button:hover {\n  background-color: #3082f9;\n}\n.button:active {\n  background-color: #1F71E8;\n}\n.textarea {\n  outline: none;\n  border: 1px solid #E1E4E7;\n  padding: 10px;\n  border-radius: 3px;\n  transfrom: box-shadow;\n}\n.input-text {\n  height: 32px;\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  transfrom: box-shadow;\n}\n.clearfix {\n  zoom: 1;\n}\n.clearfix:before {\n  display: table;\n  content: \" \";\n}\n.clearfix:after {\n  display: table;\n  content: \" \";\n  clear: both;\n}\n.common-width {\n  width: 100%;\n}\n.index,\n.search,\n.release,\n.register,\n.user {\n  background-color: #F7F8FA;\n}\n.index .container,\n.search .container,\n.release .container,\n.register .container,\n.user .container {\n  background-color: #ffffff;\n}\n@media (min-width: 768px) {\n  .index .container,\n  .search .container,\n  .release .container,\n  .register .container,\n  .user .container {\n    border-left: 1px solid #E1E4E7;\n    border-right: 1px solid #E1E4E7;\n  }\n}\n.button-link:hover {\n  background-color: #3082f9;\n}\n.button-link:active {\n  background-color: #1F71E8;\n}\n.link:link {\n  color: #888888;\n  text-decoration: none;\n}\n.link:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.link:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.link:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.link-bg:link {\n  color: #888888;\n  text-decoration: none;\n}\n.link-bg:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.link-bg:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.link-bg:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.box-shadow {\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.box-shadow-focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.triangle {\n  position: relative;\n  display: block;\n}\n.triangle:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: auto;\n  border-bottom: 8px solid #E1E4E7;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.triangle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 1px;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  margin: auto;\n  border-bottom: 8px solid #ffffff;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n}\n/* header部分 */\nheader {\n  background: #ffffff;\n  border-bottom: 1px solid #E1E4E7;\n}\nheader ul {\n  margin: 0;\n  padding: 0;\n}\nheader nav {\n  margin: 0 auto;\n}\nheader nav .logo {\n  float: left;\n  padding: 8px 20px 2px 0;\n}\nheader nav .nav-ul li {\n  list-style-type: none;\n  float: left;\n}\nheader nav .nav-ul li a {\n  display: block;\n  height: 50px;\n  padding: 10px 24px;\n  line-height: 30px;\n  font-size: 14px;\n}\nheader nav .nav-ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .nav-ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .nav-ul li a:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .nav-ul li a:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign {\n  float: right;\n}\nheader nav .sign .not-logged {\n  display: block;\n  padding-right: 10px;\n}\nheader nav .sign .not-logged a {\n  font-size: 14px;\n  line-height: 50px;\n}\nheader nav .sign .not-logged a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .sign .not-logged #sign-in-bt {\n  padding-right: 8px;\n}\nheader nav .sign .logged .logged-user {\n  position: relative;\n  float: right;\n  background: #ffffff;\n  width: 120px;\n}\nheader nav .sign .logged .logged-user:hover .user-ul {\n  display: block;\n}\nheader nav .sign .logged .logged-user .user-message {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px;\n  cursor: pointer;\n  float: right;\n}\nheader nav .sign .logged .logged-user .user-message:hover {\n  background-color: #F5F5F5;\n}\nheader nav .sign .logged .logged-user .user-message span {\n  display: block;\n  float: left;\n}\nheader nav .sign .logged .logged-user .user-message .user-head {\n  width: 30px;\n  height: 30px;\n  background: url(" + __webpack_require__(8) + ") no-repeat;\n  background-size: cover;\n  border-radius: 4px;\n}\nheader nav .sign .logged .logged-user .user-message .user-name {\n  font-size: 10px;\n  color: #1F71E8;\n  font-weight: bold;\n  padding-left: 10px;\n  line-height: 30px;\n}\nheader nav .sign .logged .logged-user .user-ul {\n  display: none;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 120px;\n  z-index: 999;\n}\nheader nav .sign .logged .logged-user .user-ul .triangle {\n  height: 8px;\n  top: 2px;\n}\nheader nav .sign .logged .logged-user .user-ul ul {\n  border-radius: 4px;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n  background: #ffffff;\n  padding-top: 8px;\n  padding-bottom: 10px;\n  border: 1px solid #E1E4E7;\n}\nheader nav .sign .logged .logged-user .user-ul ul li {\n  list-style-type: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li i {\n  float: left;\n  font-size: 16px;\n  padding: 2px 10px 0 10px;\n  color: #888888 !important;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a {\n  width: 100%;\n  display: block;\n  padding: 5px 10px;\n  font-size: 10px;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign .logged .logged-message {\n  position: relative;\n  float: right;\n  padding-left: 20px;\n  padding-right: 20px;\n  cursor: pointer;\n  z-index: 999;\n}\nheader nav .sign .logged .logged-message:hover .message-box {\n  display: block;\n}\nheader nav .sign .logged .logged-message:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-message:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-message:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .sign .logged .logged-message:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign .logged .logged-message .iconfont {\n  font-size: 24px;\n  color: #888888;\n  line-height: 50px;\n}\nheader nav .sign .logged .logged-message .iconfont:hover {\n  color: #777777;\n}\nheader nav .sign .logged .logged-message .message-box {\n  display: none;\n  position: absolute;\n  top: 57px;\n  left: -120px;\n  width: 300px;\n  height: 260px;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\nheader nav .sign .logged .logged-message .message-box i {\n  height: 8px;\n  top: -8px;\n}\nheader nav .sign .logged .logged-message .message-box h6 {\n  text-align: center;\n  font-size: 10px;\n  color: #888888;\n  padding: 8px 10px 14px 10px;\n  border-bottom: 1px solid #F5F5F5;\n}\nheader nav .mobile-ul {\n  position: relative;\n}\nheader nav .mobile-ul #head-nav {\n  position: absolute;\n  right: 20px;\n  top: 5px;\n  font-size: 30px;\n  color: #888888;\n}\nheader nav .mobile-ul ul {\n  display: none;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 26%;\n  min-width: 100px;\n  border-top: 1px solid #E1E4E7;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\nheader nav .mobile-ul ul li {\n  width: 100%;\n  list-style-type: none;\n  text-indent: 10px;\n  border-top: 1px solid #F5F5F5;\n}\nheader nav .mobile-ul ul li a {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  display: block;\n  font-size: 10px;\n}\nheader nav .mobile-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul .logged-m {\n  display: none;\n}\n/* footer部分 */\nfooter {\n  background: #F5F5F5;\n}\nfooter .container {\n  background-color: #ffffff;\n  border-top: 1px solid #E1E4E7;\n  border-left: 1px solid #E1E4E7;\n  border-right: 1px solid #E1E4E7;\n}\nfooter .container .logo {\n  padding-top: 30px;\n  float: left;\n}\nfooter .container .foot-ul {\n  margin-left: 40%;\n}\nfooter .container .foot-ul ul {\n  float: left;\n  padding-left: 20px;\n  padding-top: 20px;\n}\nfooter .container .foot-ul ul li {\n  list-style-type: none;\n  padding: 15px 10px;\n}\nfooter .container .foot-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nfooter .container h5 {\n  padding-top: 10px;\n  padding-bottom: 5px;\n  text-align: center;\n  color: #888888;\n  font-size: 10px;\n}\n/* sign-box部分 */\n/* cut_picture部分 */\n.mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.65);\n}\n.cut-picture {\n  position: absolute;\n  left: 50%;\n  top: 51px;\n  width: 320px;\n  margin-left: -160px;\n  margin-top: 4vh;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.cut-picture #close-cut {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px;\n  font-size: 16px;\n  color: #aaaaaa;\n  cursor: pointer;\n}\n.cut-picture h3 {\n  font-size: 20px;\n  color: #888888;\n  text-align: center;\n  font-weight: bold;\n  padding: 10px 0 10px 0;\n}\n.cut-picture h4 {\n  font-size: 14px;\n  color: #aaaaaa;\n  text-align: center;\n}\n.cut-picture .pic-ctrl {\n  padding: 30px 40px;\n}\n.cut-picture .pic-ctrl canvas {\n  border: 1px solid #F5F5F5;\n  cursor: move;\n}\n.cut-picture .pic-ctrl .rank {\n  text-align: center;\n  margin: 0 auto;\n  padding: 10px 0;\n}\n.cut-picture .pic-ctrl .rank .iconfont {\n  display: inline-block;\n  font-size: 14px;\n  color: #888888;\n  vertical-align: top;\n}\n.cut-picture .pic-ctrl .rank .more {\n  font-size: 16px;\n}\n.cut-picture .pic-ctrl .rank input {\n  display: inline-block;\n  height: 4px;\n  width: 180px;\n  color: #888888;\n  border-radius: 10px;\n  outline: none;\n  background-color: #aaaaaa;\n  vertical-align: middle;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\n.cut-picture .pic-ctrl .rank input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n          appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  background-color: #888888;\n}\n.cut-picture .pic-ctrl button {\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  display: block;\n  width: 140px;\n  padding: 4px 0;\n  margin: 0 auto;\n  background-color: #4193ff;\n}\n.cut-picture .pic-ctrl button:hover {\n  background-color: #3082f9;\n}\n.cut-picture .pic-ctrl button:active {\n  background-color: #1F71E8;\n}\n/* 时间选择器 */\n.time-box-left {\n  position: absolute;\n  left: 0;\n  right: 60px;\n}\n@media (max-width: 768px) {\n  .time-box-left {\n    right: 26px;\n  }\n}\n@media (max-width: 992px) {\n  .time-box-left {\n    right: 50px;\n  }\n}\n@media (min-width: 992px) {\n  .time-box-left {\n    right: 70px;\n  }\n}\n.time-box-left .show-time {\n  width: 100%;\n  height: 32px;\n  color: #1F71E8;\n  font-size: 15px;\n  line-height: 32px;\n  padding-left: 20px;\n  border: 1px solid #E1E4E7;\n  border-radius: 4px;\n}\n@media (max-width: 768px) {\n  .time-box-left .show-time {\n    font-size: 10px;\n  }\n}\n.time-box-left .select-time {\n  display: none;\n  position: absolute;\n  top: 38px;\n  z-index: 1;\n  width: 100%;\n  height: auto;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.time-box-left .select-time .triangle {\n  height: 8px;\n  top: -8px;\n}\n.time-box-left .select-time .time-top {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\n.time-box-left .select-time .time-top div:nth-child(2) {\n  border-left: 1px solid #F5F5F5;\n  border-right: 1px solid #F5F5F5;\n}\n.time-box-left .select-time .time-top .time-col {\n  float: left;\n  width: 33%;\n  padding: 10px 10px;\n}\n.time-box-left .select-time .time-top .time-col i,\n.time-box-left .select-time .time-top .time-col input,\n.time-box-left .select-time .time-top .time-col h5 {\n  display: block;\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.time-box-left .select-time .time-top .time-col i {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: #888888;\n  cursor: pointer;\n  padding: 3px 0;\n}\n.time-box-left .select-time .time-top .time-col i:link {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-top .time-col i:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-top .time-col i:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.time-box-left .select-time .time-top .time-col i:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n@media (min-width: 768px) {\n  .time-box-left .select-time .time-top .time-col h5 {\n    font-size: 16px;\n    font-weight: bold;\n    padding-bottom: 20px;\n  }\n}\n.time-box-left .select-time .time-top .time-col input {\n  border: none;\n  width: 100%;\n  text-align: center;\n  box-shadow: none;\n  color: #1F71E8;\n  font-weight: bold;\n  font-size: 15px;\n}\n.time-box-left .select-time .time-top .time-col input:focus {\n  border: 1px solid #467EAD;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-top .time-col input {\n    font-size: 11px;\n  }\n}\n.time-box-left .select-time .time-bottom {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-top: 1px solid #E1E4E7;\n}\n.time-box-left .select-time .time-bottom button {\n  padding: 6px 20px;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n.time-box-left .select-time .time-bottom button:link {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-bottom button:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-bottom button:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.time-box-left .select-time .time-bottom button:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.time-box-left .select-time .time-bottom .get-time {\n  float: left;\n  margin-left: 30px;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-bottom .get-time {\n    margin-left: 10px;\n    padding: 6px 10px;\n  }\n}\n.time-box-left .select-time .time-bottom .close-time {\n  float: right;\n  margin-right: 30px;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-bottom .close-time {\n    margin-right: 10px;\n    padding: 6px 10px;\n  }\n}\n.start {\n  position: absolute;\n  top: 2px;\n  padding: 6px 8px;\n  cursor: pointer;\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .start {\n    right: -20px;\n  }\n}\n@media (max-width: 992px) {\n  .start {\n    right: 0;\n  }\n}\n@media (min-width: 992px) {\n  .start {\n    right: 10px;\n    padding: 4px 10px;\n  }\n}\n.start:hover {\n  background-color: #3082f9;\n}\n.start:active {\n  background-color: #1F71E8;\n}\n.start:hover {\n  background-color: #3082f9;\n}\n.start:active {\n  background-color: #1F71E8;\n}\n/* skill-box */\n.skill-box {\n  position: relative;\n  padding: 0;\n}\n.new-skill-box {\n  margin-top: 20px;\n}\n.skill-box-top {\n  width: 100%;\n}\n.skill-box-top .skill-show {\n  float: left;\n  width: 70%;\n  padding: 4px;\n  min-height: 112px;\n  border: 1px solid #E1E4E7;\n  border-radius: 4px;\n}\n.skill-box-top .skill-show span {\n  float: left;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n  padding: 4px;\n  margin-left: 4px;\n  margin-top: 4px;\n  cursor: pointer;\n}\n.skill-box-top .skill-show + div {\n  float: left;\n  width: 30%;\n  padding-left: 20px;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div {\n    padding-left: 6px;\n  }\n}\n.skill-box-top .skill-show + div .select-skill,\n.skill-box-top .skill-show + div #skill-people {\n  display: block;\n  padding: 5px;\n}\n.skill-box-top .skill-show + div .select-skill {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  padding: 4px 20px;\n}\n.skill-box-top .skill-show + div .select-skill:hover {\n  background-color: #3082f9;\n}\n.skill-box-top .skill-show + div .select-skill:active {\n  background-color: #1F71E8;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div .select-skill {\n    padding: 5px 13px;\n  }\n}\n.skill-box-top .skill-show + div .skill-people {\n  margin-top: 14px;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div .skill-people {\n    padding: 4px;\n  }\n}\n.skill-box-top .skill-show + div .delete {\n  font-size: 22px;\n  margin-top: 14px;\n  display: block;\n  padding-left: 20px;\n  color: #888888;\n  cursor: pointer;\n}\n.skill-box-top .skill-show + div .delete:link {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.skill-list {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 70%;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n@media (max-width: 768px) {\n  .skill-list {\n    width: 100%;\n  }\n}\n.skill-list .triangle {\n  top: -8px;\n}\n.skill-list ul,\n.skill-list li {\n  margin: 0;\n  padding: 4px 0;\n  cursor: pointer;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.skill-list .skill-ul-left li {\n  width: 25%;\n  height: auto;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border-right: 1px solid #F5F5F5;\n  overflow: hidden;\n}\n.skill-list .skill-ul-left li ul {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 25%;\n  width: 25%;\n}\n.skill-list .skill-ul-left li ul .triangle {\n  top: -8px;\n}\n.skill-list .skill-ul-left li ul li {\n  width: 100%;\n}\n.skill-list .skill-ul-left li ul li div {\n  display: none;\n  width: 200%;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  padding: 4px;\n}\n.skill-list .skill-ul-left li ul li div span {\n  position: relative;\n  font-size: 10px;\n  display: block;\n  float: left;\n  padding: 4px;\n  margin-right: 6px;\n  margin-top: 6px;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .skill-list .skill-ul-left li ul li div span {\n    margin-right: 2px;\n    margin-top: 2px;\n    padding: 2px;\n  }\n}\n.skill-bottom {\n  border-top: 1px solid #F5F5F5;\n  padding: 14px 20px;\n}\n.skill-bottom button {\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n  padding: 6px 14px;\n}\n.skill-bottom button:link {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-bottom button:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-bottom button:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.skill-bottom button:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.skill-bottom .skill-sure {\n  float: left;\n}\n.skill-bottom .skill-cancle {\n  float: right;\n}\n.skill-active {\n  background-color: #63b5ff !important;\n  color: #ffffff;\n}\nbody,\nul,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nol,\nli,\np,\nform,\nfieldset,\ntable,\ntd,\nimg,\ndiv,\ndl,\ndt,\ndd,\ninput {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-size: 12px;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\nimg,\ninput {\n  border: none;\n}\nli {\n  list-style: none;\n}\ninput,\nselect,\ntextarea {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\na {\n  text-decoration: none;\n}\n/*登录注册*/\n#common-login,\n#common-register,\n#common-checkLogin,\n#common-forget {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 1000px;\n  z-index: 9999;\n  display: none;\n  background-color: #ffffff;\n}\n.tea-register,\n.stu-register,\n.tea-checkLogin,\n.stu-checkLogin {\n  position: relative;\n  z-index: 69999;\n  float: left;\n  width: 120px;\n  height: 80px;\n  margin-top: 20%;\n  margin-left: 50px;\n  line-height: 80px;\n  font-size: 20px;\n  border-radius: 5px;\n  text-align: center;\n  cursor: pointer;\n  background: #EEE;\n}\n.tea-register,\n.tea-checkLogin {\n  margin-left: 40%;\n}\n.lo-container,\n.re-container {\n  z-index: 99999;\n  position: relative;\n  width: 300px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px #CCC;\n  margin-top: 10%;\n  margin-left: 40%;\n  border: 1px solid #CCC;\n}\n.re-container {\n  display: none;\n}\n.out,\n.re-out,\n.forget-out,\n.forget-pwdOut {\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: bold;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #B3B3B3;\n}\n.out:hover,\n.re-out:hover,\n.forget-out:hover,\n.forget-pwdOut:hover {\n  background: #787878;\n}\nh1 {\n  margin: 10px 0 !important;\n  text-align: center;\n  font-weight: bold;\n  font-size: 20px !important;\n}\nh2 {\n  margin-bottom: 10px !important;\n  text-align: center;\n  font-size: 16px !important;\n  color: #888 !important;\n}\n#uname,\n#pwd,\n#re-uname,\n#re-pwd,\n#re-email {\n  width: 200px;\n}\n.div-uname,\n.div-pwd,\n.re-div-uname,\n.re-div-pwd,\n.re-div-email {\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.div-pwd,\n.re-div-pwd,\n.re-div-email {\n  border-top: none;\n}\n.img-validate,\n.re-img-validate {\n  line-height: 48px;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.img-validate input,\n.re-img-validate input {\n  height: 30px;\n  border: 1px solid #CCC;\n  text-indent: 6px;\n  width: 80px !important;\n}\n#canvas {\n  position: absolute;\n  left: 135px;\n  top: 170px;\n  width: 80px;\n  height: 40px;\n  margin: 4px 10px;\n  text-indent: 10px;\n  line-height: 40px;\n  color: red;\n  font-size: 20px;\n  background-color: black;\n}\n.reload {\n  position: absolute;\n  right: 12px;\n  display: inline-block;\n  height: 20px;\n  line-height: 20px;\n  margin-top: 4px;\n  text-indent: 2px;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #CCC;\n}\n.bt-login {\n  line-height: 36px;\n  color: #fff;\n  margin: 10px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #0077d9;\n}\n#remember {\n  margin-left: 10px;\n  margin-bottom: 16px;\n}\n.unlogin {\n  cursor: pointer;\n}\n.unlogin:hover {\n  color: red;\n}\n.register {\n  float: right;\n  margin-top: 0;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.p-login,\n.p-pwd,\n.p-uname,\n.p-validate {\n  position: absolute;\n  display: inline-block;\n  margin-left: -10px;\n  width: 90px;\n  height: 32px;\n  line-height: 16px;\n  color: red;\n}\n.p-login {\n  margin-left: 4px;\n  line-height: 18px;\n}\n.p-validate {\n  text-indent: -10px;\n  margin-left: 10px;\n  top: 196px;\n  left: 240px;\n}\n.p-uname {\n  top: 86px;\n}\n.p-pwd {\n  top: 134px;\n}\n#re-validate {\n  margin: 0 10px ;\n}\n.re-reload {\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  margin-top: 10px;\n  text-indent: 2px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.re-bt-register {\n  line-height: 36px;\n  color: #fff;\n  margin: 10px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #0077d9;\n}\n.re-unlogin {\n  margin-left: 10px;\n}\n.re-bt-login {\n  display: inline-block;\n  margin-bottom: 16px;\n  cursor: pointer;\n  color: #259;\n}\n.re-p-validate,\n.re-p-pwd,\n.re-p-uname,\n.re-p-email {\n  position: absolute;\n  display: inline-block;\n  margin-top: 2px;\n  margin-left: -1px;\n  width: 80px;\n  height: 32px;\n  line-height: 16px;\n  color: red;\n}\n.re-p-validate {\n  width: 50px;\n  margin-left: 5px;\n  text-indent: -4px;\n}\n.re-p-uname {\n  top: 82px;\n}\n.re-p-pwd {\n  top: 134px;\n}\n.re-p-email {\n  top: 180px;\n}\n.re-p-validate {\n  top: 226px;\n}\n.re-promot {\n  display: inline-block;\n  text-indent: 10px;\n  color: red;\n}\n.forget-validate,\n.forget-pwd {\n  width: 300px;\n  position: relative;\n  border-radius: 10px;\n  box-shadow: 0 0 10px #CCC;\n  margin-top: 10%;\n  margin-left: 40%;\n  border: 1px solid #CCC;\n}\n.forget-validate p,\n.forget-pwd p {\n  margin: 10px 0;\n  text-align: center;\n  font-size: 18px;\n}\n.forget-validate input,\n.forget-pwd input {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.forget-validate input input,\n.forget-pwd input input {\n  width: 50%;\n}\n.forget-validate .forget-getValidateDiv,\n.forget-pwd .forget-getValidateDiv {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.forget-validate .forget-getValidateDiv input,\n.forget-pwd .forget-getValidateDiv input {\n  float: left;\n  width: 50%;\n  border-top: none;\n}\n.forget-validate .forget-getValidateDiv .forget-reload,\n.forget-pwd .forget-getValidateDiv .forget-reload {\n  width: 80px;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 4px;\n  margin-left: 40px;\n  text-indent: -2px;\n  border-radius: 5px;\n  text-align: center;\n}\n.forget-validate #forget-surePwd,\n.forget-pwd #forget-surePwd,\n.forget-validate #forget-email,\n.forget-pwd #forget-email {\n  border-top: none;\n}\n.forget-validate #forget-email,\n.forget-pwd #forget-email {\n  border-bottom: none;\n}\n.forget-validate .forget-pwdPromot,\n.forget-pwd .forget-pwdPromot,\n.forget-validate .forget-promot,\n.forget-pwd .forget-promot {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  margin: 5px 0;\n  color: red;\n}\n.forget-validate .forget-pwdBtn,\n.forget-pwd .forget-pwdBtn,\n.forget-validate .forget-btn,\n.forget-pwd .forget-btn {\n  width: 80px;\n  height: 30px;\n  margin-left: 36%;\n  margin-bottom: 5px;\n}\n.forget-pwd {\n  display: none;\n}\n.fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n}\n.container {\n  padding: 0;\n}\n.rotation {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.rotation:hover i {\n  color: rgba(255, 255, 255, 0.8);\n}\n.rotation ul {\n  position: relative;\n  width: 500%;\n  height: auto;\n  margin: 0;\n  padding: 0;\n}\n.rotation ul li {\n  float: left;\n  width: 20%;\n}\n.rotation ul li img {\n  width: 100%;\n  border: 0;\n}\n.rotation .icon {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10px;\n  text-align: center;\n}\n.rotation .icon span {\n  display: inline-block;\n  width: 50px;\n  border-top: 4px solid #001c93;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n@media (max-width: 768px) {\n  .rotation .icon span {\n    width: 30px;\n  }\n}\n.rotation .icon .active {\n  border-color: #1F71E8 !important;\n}\n.rotation .to-left,\n.rotation .to-right {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: inline-block;\n  width: 12%;\n  height: 100%;\n  color: rgba(255, 255, 255, 0);\n  cursor: pointer;\n  text-align: center;\n}\n.rotation .to-left i,\n.rotation .to-right i {\n  display: inline-block;\n  font-size: 42px;\n  text-align: center;\n  padding-top: 100%;\n}\n@media (max-width: 768px) {\n  .rotation .to-left i,\n  .rotation .to-right i {\n    font-size: 20px;\n  }\n}\n.rotation .to-left {\n  left: 0;\n}\n.rotation .to-right {\n  right: 0;\n}\n.search-sec {\n  padding: 10px 0;\n  background-color: #ffffff;\n  border-bottom: 1px solid #E1E4E7;\n}\n.search-sec .row {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n.search-sec .row .search-bar {\n  position: relative;\n}\n@media (max-width: 768px) {\n  .search-sec .row .search-bar {\n    margin-left: 10px;\n  }\n}\n.search-sec .row .search-bar i,\n.search-sec .row .search-bar input {\n  display: inline-block;\n}\n.search-sec .row .search-bar input {\n  width: 100%;\n  padding: 4px 10px;\n  line-height: 24px;\n  font-size: 14px;\n  border: 0;\n  outline: none;\n  border: 1px solid #E1E4E7;\n  border-radius: 3px;\n}\n.search-sec .row .search-bar input:focus {\n  border-color: #aeb1b4;\n}\n.search-sec .row .search-bar input:focus + i {\n  color: #1F71E8;\n}\n.search-sec .row .search-bar i {\n  position: absolute;\n  top: 0;\n  right: 20px;\n  font-weight: bold;\n  padding: 6px 10px;\n  cursor: pointer;\n}\n.search-sec .row .release-bt button {\n  border: 0;\n  outline: none;\n  font-size: 12px;\n  background-color: #1F71E8;\n  color: #ffffff;\n  border-radius: 3px;\n  height: 32px;\n}\n@media (max-width: 768px) {\n  .search-sec .row .release-bt button {\n    font-size: 10px;\n  }\n}\n.late-pro h3,\n.hot-pro h3 {\n  padding-top: 20px;\n  padding-left: 20px;\n  font-size: 20px;\n}\n.late-pro .row,\n.hot-pro .row {\n  margin: 0;\n  padding: 0;\n}\n.late-pro .row .project-box,\n.hot-pro .row .project-box {\n  padding: 20px;\n}\n.late-pro .row .project-box a,\n.hot-pro .row .project-box a {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  padding: 10px;\n  font-size: 14px;\n  cursor: pointer;\n  color: #003eb5;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border: 1px solid #E1E4E7;\n  border-radius: 4px;\n}\n.late-pro .row .project-box a:link,\n.hot-pro .row .project-box a:link {\n  color: #003eb5;\n}\n.late-pro .row .project-box a:visited,\n.hot-pro .row .project-box a:visited {\n  color: #003eb5;\n}\n.late-pro .row .project-box a:hover,\n.hot-pro .row .project-box a:hover {\n  color: #003eb5;\n}\n.late-pro .row .project-box a:hover .join-pro,\n.hot-pro .row .project-box a:hover .join-pro {\n  bottom: 0;\n}\n.late-pro .row .project-box a:active,\n.hot-pro .row .project-box a:active {\n  color: #002da4;\n}\n.late-pro .row .project-box a .clearfix,\n.hot-pro .row .project-box a .clearfix {\n  padding: 5px 0;\n}\n.late-pro .row .project-box a .clearfix p,\n.hot-pro .row .project-box a .clearfix p {\n  float: left;\n  word-break: break-all;\n}\n.late-pro .row .project-box a .clearfix p:first-child,\n.hot-pro .row .project-box a .clearfix p:first-child {\n  width: 34%;\n}\n.late-pro .row .project-box a .clearfix p:nth-child(2),\n.hot-pro .row .project-box a .clearfix p:nth-child(2) {\n  width: 66%;\n}\n.late-pro .row .project-box a .clearfix .pro-time,\n.hot-pro .row .project-box a .clearfix .pro-time {\n  font-size: 10px;\n  float: right;\n  color: #888888 !important;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.late-pro .row .project-box a .clearfix:nth-child(3),\n.hot-pro .row .project-box a .clearfix:nth-child(3) {\n  min-height: 40px;\n}\n.late-pro .row .project-box a .join-pro,\n.hot-pro .row .project-box a .join-pro {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -30px;\n  transition: all .5s;\n}\n.late-pro .row .project-box a .join-pro button,\n.hot-pro .row .project-box a .join-pro button {\n  width: 100%;\n  height: 26px;\n  line-height: 26px;\n  border: 0;\n  outline: 0;\n  background-color: #1F71E8;\n  color: #ffffff;\n  border-radius: 0 0 3px 3px;\n  font-size: 12px;\n}\n.sendMessageContainer {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 35%;\n  min-width: 400px;\n  max-width: 500px;\n  min-height: 300px;\n  max-height: 300px;\n  border-radius: 10px;\n  background-color: #FFF;\n}\n.sendMessageContainer .sendMessage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 400px;\n  max-width: 500px;\n  min-height: 200px;\n  max-height: 300px;\n  border-radius: 10px;\n  border: 1px solid #EEE;\n  background-color: #EEE;\n}\n.sendMessageContainer .sendMessage p {\n  width: 100%;\n  height: 16px;\n  line-height: 16px;\n  margin: 6px 0;\n  text-indent: 10px;\n  font-size: 18px;\n}\n.sendMessageContainer .sendMessage h4 {\n  width: 100%;\n  height: 16px;\n  line-height: 18px;\n  margin-top: 4px;\n  text-indent: 10px;\n}\n.sendMessageContainer .sendMessage textarea {\n  width: 100%;\n  max-width: 100%;\n  max-height: 200px;\n  word-break: break-all;\n  margin-top: 10px;\n  text-indent: 20px;\n  font-size: 20px;\n  border-left: none;\n  border-right: none;\n  background-color: #EEE;\n}\n.sendMessageContainer .sendMessage div {\n  width: 100%;\n  max-width: 100%;\n  height: 40px;\n}\n.sendMessageContainer .sendMessage div button {\n  width: 50px;\n  height: 30px;\n  margin-top: 4px;\n  margin-left: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = "<div class=\"index common-width\">\r\n  <div class=\"container\">\r\n    <section class=\"search-sec\">\r\n      <div class=\"row\">\r\n        <div class=\"hidden-xs col-sm-3\"></div>\r\n        <div class=\"col-xs-8 col-sm-6 search-bar\">\r\n          <input type=\"text\" placeholder=\"搜索你感兴趣的内容\">\r\n          <i class=\"iconfont\">&#xe59c;</i>\r\n        </div>\r\n        <div class=\"release-bt col-xs-3\">\r\n          <button type=\"text\" class=\"openProject\">发布项目</button>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"rotation\"></section>\r\n    <section class=\"late-pro\">\r\n      <h3>最近项目</h3>\r\n    </section>\r\n    <section class=\"hot-pro\">\r\n      <h3>热门项目</h3>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-6 col-md-3 project-box\">\r\n          <a href=\"javascript:void(0)\">\r\n            <div class=\"clearfix\">\r\n              <p>项目名称:</p>\r\n              <p class=\"p-name\">超级玛丽 for andriod</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目类型:</p>\r\n              <p class=\"p-type\">游戏开发</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目人员:</p>\r\n              <p class=\"p-people\">andriod开发工程师 UI设计师</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p class=\"pro-time\">2017-6-15</p>\r\n            </div>\r\n            <div class=\"join-pro\">\r\n              <button class=\"join\" type=\"text\">点击参与</button>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-3 project-box\">\r\n          <a href=\"javascript:void(0)\">\r\n            <div class=\"clearfix\">\r\n              <p>项目名称:</p>\r\n              <p class=\"p-name\">超级玛丽 for andriod</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目类型:</p>\r\n              <p class=\"p-type\">游戏开发</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目人员:</p>\r\n              <p class=\"p-people\">andriod开发工程师 UI设计师</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p class=\"pro-time\">2017-6-15</p>\r\n            </div>\r\n            <div class=\"join-pro\">\r\n              <button class=\"join\" type=\"text\">点击参与</button>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-3 project-box\">\r\n          <a href=\"javascript:void(0)\">\r\n            <div class=\"clearfix\">\r\n              <p>项目名称:</p>\r\n              <p class=\"p-name\">超级玛丽 for andriod</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目类型:</p>\r\n              <p class=\"p-type\">游戏开发</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目人员:</p>\r\n              <p class=\"p-people\">andriod开发工程师 UI设计师</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p class=\"pro-time\">2017-6-15</p>\r\n            </div>\r\n            <div class=\"join-pro\">\r\n              <button class=\"join\" type=\"text\">点击参与</button>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-3 project-box\">\r\n          <a href=\"javascript:void(0)\">\r\n            <div class=\"clearfix\">\r\n              <p>项目名称:</p>\r\n              <p class=\"p-name\">超级玛丽 for andriod</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目类型:</p>\r\n              <p class=\"p-type\">游戏开发</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目人员:</p>\r\n              <p class=\"p-people\">andriod开发工程师 UI设计师</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p class=\"pro-time\">2017-6-15</p>\r\n            </div>\r\n            <div class=\"join-pro\">\r\n              <button class=\"join\" type=\"text\">点击参与</button>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-3 project-box\">\r\n          <a href=\"javascript:void(0)\">\r\n            <div class=\"clearfix\">\r\n              <p>项目名称:</p>\r\n              <p class=\"p-name\">超级玛丽 for andriod</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目类型:</p>\r\n              <p class=\"p-type\">游戏开发</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目人员:</p>\r\n              <p class=\"p-people\">andriod开发工程师 UI设计师</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p class=\"pro-time\">2017-6-15</p>\r\n            </div>\r\n            <div class=\"join-pro\">\r\n              <button class=\"join\" type=\"text\">点击参与</button>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-3 project-box\">\r\n          <a href=\"javascript:void(0)\">\r\n            <div class=\"clearfix\">\r\n              <p>项目名称:</p>\r\n              <p class=\"p-name\">超级玛丽 for andriod</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目类型:</p>\r\n              <p class=\"p-type\">游戏开发</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目人员:</p>\r\n              <p class=\"p-people\">andriod开发工程师 UI设计师</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p class=\"pro-time\">2017-6-15</p>\r\n            </div>\r\n            <div class=\"join-pro\">\r\n              <button class=\"join\" type=\"text\">点击参与</button>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-3 project-box\">\r\n          <a href=\"javascript:void(0)\">\r\n            <div class=\"clearfix\">\r\n              <p>项目名称:</p>\r\n              <p class=\"p-name\">超级玛丽 for andriod</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目类型:</p>\r\n              <p class=\"p-type\">游戏开发</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目人员:</p>\r\n              <p class=\"p-people\">andriod开发工程师 UI设计师</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p class=\"pro-time\">2017-6-15</p>\r\n            </div>\r\n            <div class=\"join-pro\">\r\n              <button class=\"join\" type=\"text\">点击参与</button>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-3 project-box\">\r\n          <a href=\"javascript:void(0)\">\r\n            <div class=\"clearfix\">\r\n              <p>项目名称:</p>\r\n              <p class=\"p-name\">超级玛丽 for andriod</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目类型:</p>\r\n              <p class=\"p-type\">游戏开发</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p>项目人员:</p>\r\n              <p class=\"p-people\">andriod开发工程师 UI设计师</p>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <p class=\"pro-time\">2017-6-15</p>\r\n            </div>\r\n            <div class=\"join-pro\">\r\n              <button class=\"join\" type=\"text\">点击参与</button>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <div class=\"sendMessageContainer\">\r\n\t\t<div class=\"sendMessage\">\r\n\t\t\t<p class=\"sendProject\"></p>\r\n\t\t\t<h4>填写参与项目自身说明信息</h4>\r\n\t\t\t<textarea name=\"message\" rows=\"10\" cols=\"20\"></textarea>\r\n\t\t\t<div><button class=\"sendSure\">发送</button><button class=\"sendCancel\">取消</button></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(12, function() {
			var newContent = __webpack_require__(12);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

const $ = __webpack_require__(0);
const rotation_str = __webpack_require__(45);
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

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<ul>\r\n  <li><a href=\"javascript:void(0);\"><img src=\"" + __webpack_require__(53) + "\" alt=\"1\"></a></li>\r\n  <li><a href=\"javascript:void(0);\"><img src=\"" + __webpack_require__(54) + "\" alt=\"2\"></a></li>\r\n  <li><a href=\"javascript:void(0);\"><img src=\"" + __webpack_require__(55) + "\" alt=\"3\"></a></li>\r\n  <li><a href=\"javascript:void(0);\"><img src=\"" + __webpack_require__(56) + "\" alt=\"4\"></a></li>\r\n  <li><a href=\"javascript:void(0);\"><img src=\"" + __webpack_require__(57) + "\" alt=\"5\"></a></li>\r\n</ul>\r\n<div class=\"icon\">\r\n  <span class=\"active\"></span>\r\n  <span></span>\r\n  <span></span>\r\n  <span></span>\r\n  <span></span>\r\n</div>\r\n<div class=\"to-left\">\r\n  <i class=\"iconfont\">&#xe618;</i>\r\n</div>\r\n<div class=\"to-right\">\r\n  <i class=\"iconfont\">&#xe61c;</i>\r\n</div>";

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/b0b2d9191279e7e5234872fc60966e52.jpg";

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/e696171ee6ff4408ace98943c305685a.jpg";

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/4ac3e161f7f6229ae170c878f4a1133b.jpg";

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/f22459f9c846cf2ac5c79d08f649b9fb.jpg";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/bff83e6cd541bfbe98a11ca8cd6b29a9.jpg";

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(28);
const index_str = __webpack_require__(23);
const rotation = __webpack_require__(33);
const content_path = __webpack_require__(1);
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

/***/ })

},[62]);