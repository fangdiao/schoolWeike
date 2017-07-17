webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "/* 全局样式 */\ni {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nbody {\n  min-width: 300px;\n  max-width: 1400px;\n}\nli {\n  list-style-type: none;\n}\n.error {\n  color: red;\n  position: absolute;\n}\n@media (max-width: 992px) {\n  .error {\n    right: 0;\n    top: 14px;\n  }\n}\n@media (min-width: 992px) {\n  .error {\n    right: 60px;\n    top: 24px;\n  }\n}\n.white-button {\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n.button {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n}\n.button:hover {\n  background-color: #3082f9;\n}\n.button:active {\n  background-color: #1F71E8;\n}\n.textarea {\n  outline: none;\n  border: 1px solid #E1E4E7;\n  padding: 10px;\n  border-radius: 3px;\n  transfrom: box-shadow;\n}\n.input-text {\n  height: 32px;\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  transfrom: box-shadow;\n}\n.clearfix {\n  zoom: 1;\n}\n.clearfix:before {\n  display: table;\n  content: \" \";\n}\n.clearfix:after {\n  display: table;\n  content: \" \";\n  clear: both;\n}\n.common-width {\n  width: 100%;\n}\n.index,\n.search,\n.release,\n.register,\n.user {\n  background-color: #F7F8FA;\n}\n.index .container,\n.search .container,\n.release .container,\n.register .container,\n.user .container {\n  background-color: #ffffff;\n}\n@media (min-width: 768px) {\n  .index .container,\n  .search .container,\n  .release .container,\n  .register .container,\n  .user .container {\n    border-left: 1px solid #E1E4E7;\n    border-right: 1px solid #E1E4E7;\n  }\n}\n.button-link:hover {\n  background-color: #3082f9;\n}\n.button-link:active {\n  background-color: #1F71E8;\n}\n.link:link {\n  color: #888888;\n  text-decoration: none;\n}\n.link:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.link:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.link:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.link-bg:link {\n  color: #888888;\n  text-decoration: none;\n}\n.link-bg:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.link-bg:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.link-bg:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.box-shadow {\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.box-shadow-focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.triangle {\n  position: relative;\n  display: block;\n}\n.triangle:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: auto;\n  border-bottom: 8px solid #E1E4E7;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.triangle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 1px;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  margin: auto;\n  border-bottom: 8px solid #ffffff;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n}\n/* header部分 */\nheader {\n  background: #ffffff;\n  border-bottom: 1px solid #E1E4E7;\n}\nheader ul {\n  margin: 0;\n  padding: 0;\n}\nheader nav {\n  margin: 0 auto;\n}\nheader nav .logo {\n  float: left;\n  padding: 8px 20px 2px 0;\n}\nheader nav .nav-ul li {\n  list-style-type: none;\n  float: left;\n}\nheader nav .nav-ul li a {\n  display: block;\n  height: 50px;\n  padding: 10px 24px;\n  line-height: 30px;\n  font-size: 14px;\n}\nheader nav .nav-ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .nav-ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .nav-ul li a:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .nav-ul li a:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign {\n  float: right;\n}\nheader nav .sign .not-logged {\n  display: block;\n  padding-right: 10px;\n}\nheader nav .sign .not-logged a {\n  font-size: 14px;\n  line-height: 50px;\n}\nheader nav .sign .not-logged a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .sign .not-logged #sign-in-bt {\n  padding-right: 8px;\n}\nheader nav .sign .logged .logged-user {\n  position: relative;\n  float: right;\n  background: #ffffff;\n  width: 120px;\n}\nheader nav .sign .logged .logged-user:hover .user-ul {\n  display: block;\n}\nheader nav .sign .logged .logged-user .user-message {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px;\n  cursor: pointer;\n  float: right;\n}\nheader nav .sign .logged .logged-user .user-message:hover {\n  background-color: #F5F5F5;\n}\nheader nav .sign .logged .logged-user .user-message span {\n  display: block;\n  float: left;\n}\nheader nav .sign .logged .logged-user .user-message .user-head {\n  width: 30px;\n  height: 30px;\n  background: url(" + __webpack_require__(5) + ") no-repeat;\n  background-size: cover;\n  border-radius: 4px;\n}\nheader nav .sign .logged .logged-user .user-message .user-name {\n  font-size: 10px;\n  color: #1F71E8;\n  font-weight: bold;\n  padding-left: 10px;\n  line-height: 30px;\n}\nheader nav .sign .logged .logged-user .user-ul {\n  display: none;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 120px;\n  z-index: 999;\n}\nheader nav .sign .logged .logged-user .user-ul .triangle {\n  height: 8px;\n  top: 2px;\n}\nheader nav .sign .logged .logged-user .user-ul ul {\n  border-radius: 4px;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n  background: #ffffff;\n  padding-top: 8px;\n  padding-bottom: 10px;\n  border: 1px solid #E1E4E7;\n}\nheader nav .sign .logged .logged-user .user-ul ul li {\n  list-style-type: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li i {\n  float: left;\n  font-size: 16px;\n  padding: 2px 10px 0 10px;\n  color: #888888 !important;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a {\n  width: 100%;\n  display: block;\n  padding: 5px 10px;\n  font-size: 10px;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign .logged .logged-message {\n  position: relative;\n  float: right;\n  padding-left: 20px;\n  padding-right: 20px;\n  cursor: pointer;\n  z-index: 999;\n}\nheader nav .sign .logged .logged-message:hover .message-box {\n  display: block;\n}\nheader nav .sign .logged .logged-message:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-message:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-message:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .sign .logged .logged-message:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign .logged .logged-message .iconfont {\n  font-size: 24px;\n  color: #888888;\n  line-height: 50px;\n}\nheader nav .sign .logged .logged-message .iconfont:hover {\n  color: #777777;\n}\nheader nav .sign .logged .logged-message .message-box {\n  display: none;\n  position: absolute;\n  top: 57px;\n  left: -120px;\n  width: 300px;\n  height: 260px;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\nheader nav .sign .logged .logged-message .message-box i {\n  height: 8px;\n  top: -8px;\n}\nheader nav .sign .logged .logged-message .message-box h6 {\n  text-align: center;\n  font-size: 10px;\n  color: #888888;\n  padding: 8px 10px 14px 10px;\n  border-bottom: 1px solid #F5F5F5;\n}\nheader nav .mobile-ul {\n  position: relative;\n}\nheader nav .mobile-ul #head-nav {\n  position: absolute;\n  right: 20px;\n  top: 5px;\n  font-size: 30px;\n  color: #888888;\n}\nheader nav .mobile-ul ul {\n  display: none;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 26%;\n  min-width: 100px;\n  border-top: 1px solid #E1E4E7;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\nheader nav .mobile-ul ul li {\n  width: 100%;\n  list-style-type: none;\n  text-indent: 10px;\n  border-top: 1px solid #F5F5F5;\n}\nheader nav .mobile-ul ul li a {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  display: block;\n  font-size: 10px;\n}\nheader nav .mobile-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul .logged-m {\n  display: none;\n}\n/* footer部分 */\nfooter {\n  background: #F5F5F5;\n}\nfooter .container {\n  background-color: #ffffff;\n  border-top: 1px solid #E1E4E7;\n  border-left: 1px solid #E1E4E7;\n  border-right: 1px solid #E1E4E7;\n}\nfooter .container .logo {\n  padding-top: 30px;\n  float: left;\n}\nfooter .container .foot-ul {\n  margin-left: 40%;\n}\nfooter .container .foot-ul ul {\n  float: left;\n  padding-left: 20px;\n  padding-top: 20px;\n}\nfooter .container .foot-ul ul li {\n  list-style-type: none;\n  padding: 15px 10px;\n}\nfooter .container .foot-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nfooter .container h5 {\n  padding-top: 10px;\n  padding-bottom: 5px;\n  text-align: center;\n  color: #888888;\n  font-size: 10px;\n}\n/* sign-box部分 */\n/* cut_picture部分 */\n.mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.65);\n}\n.cut-picture {\n  position: absolute;\n  left: 50%;\n  top: 51px;\n  width: 320px;\n  margin-left: -160px;\n  margin-top: 4vh;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.cut-picture #close-cut {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px;\n  font-size: 16px;\n  color: #aaaaaa;\n  cursor: pointer;\n}\n.cut-picture h3 {\n  font-size: 20px;\n  color: #888888;\n  text-align: center;\n  font-weight: bold;\n  padding: 10px 0 10px 0;\n}\n.cut-picture h4 {\n  font-size: 14px;\n  color: #aaaaaa;\n  text-align: center;\n}\n.cut-picture .pic-ctrl {\n  padding: 30px 40px;\n}\n.cut-picture .pic-ctrl canvas {\n  border: 1px solid #F5F5F5;\n  cursor: move;\n}\n.cut-picture .pic-ctrl .rank {\n  text-align: center;\n  margin: 0 auto;\n  padding: 10px 0;\n}\n.cut-picture .pic-ctrl .rank .iconfont {\n  display: inline-block;\n  font-size: 14px;\n  color: #888888;\n  vertical-align: top;\n}\n.cut-picture .pic-ctrl .rank .more {\n  font-size: 16px;\n}\n.cut-picture .pic-ctrl .rank input {\n  display: inline-block;\n  height: 4px;\n  width: 180px;\n  color: #888888;\n  border-radius: 10px;\n  outline: none;\n  background-color: #aaaaaa;\n  vertical-align: middle;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\n.cut-picture .pic-ctrl .rank input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n          appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  background-color: #888888;\n}\n.cut-picture .pic-ctrl button {\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  display: block;\n  width: 140px;\n  padding: 4px 0;\n  margin: 0 auto;\n  background-color: #4193ff;\n}\n.cut-picture .pic-ctrl button:hover {\n  background-color: #3082f9;\n}\n.cut-picture .pic-ctrl button:active {\n  background-color: #1F71E8;\n}\n/* 时间选择器 */\n.time-box-left {\n  position: absolute;\n  left: 0;\n  right: 60px;\n}\n@media (max-width: 768px) {\n  .time-box-left {\n    right: 26px;\n  }\n}\n@media (max-width: 992px) {\n  .time-box-left {\n    right: 50px;\n  }\n}\n@media (min-width: 992px) {\n  .time-box-left {\n    right: 70px;\n  }\n}\n.time-box-left .show-time {\n  width: 100%;\n  height: 32px;\n  color: #1F71E8;\n  font-size: 15px;\n  line-height: 32px;\n  padding-left: 20px;\n  border: 1px solid #E1E4E7;\n  border-radius: 4px;\n}\n@media (max-width: 768px) {\n  .time-box-left .show-time {\n    font-size: 10px;\n  }\n}\n.time-box-left .select-time {\n  display: none;\n  position: absolute;\n  top: 38px;\n  z-index: 1;\n  width: 100%;\n  height: auto;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.time-box-left .select-time .triangle {\n  height: 8px;\n  top: -8px;\n}\n.time-box-left .select-time .time-top {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\n.time-box-left .select-time .time-top div:nth-child(2) {\n  border-left: 1px solid #F5F5F5;\n  border-right: 1px solid #F5F5F5;\n}\n.time-box-left .select-time .time-top .time-col {\n  float: left;\n  width: 33%;\n  padding: 10px 10px;\n}\n.time-box-left .select-time .time-top .time-col i,\n.time-box-left .select-time .time-top .time-col input,\n.time-box-left .select-time .time-top .time-col h5 {\n  display: block;\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.time-box-left .select-time .time-top .time-col i {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: #888888;\n  cursor: pointer;\n  padding: 3px 0;\n}\n.time-box-left .select-time .time-top .time-col i:link {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-top .time-col i:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-top .time-col i:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.time-box-left .select-time .time-top .time-col i:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n@media (min-width: 768px) {\n  .time-box-left .select-time .time-top .time-col h5 {\n    font-size: 16px;\n    font-weight: bold;\n    padding-bottom: 20px;\n  }\n}\n.time-box-left .select-time .time-top .time-col input {\n  border: none;\n  width: 100%;\n  text-align: center;\n  box-shadow: none;\n  color: #1F71E8;\n  font-weight: bold;\n  font-size: 15px;\n}\n.time-box-left .select-time .time-top .time-col input:focus {\n  border: 1px solid #467EAD;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-top .time-col input {\n    font-size: 11px;\n  }\n}\n.time-box-left .select-time .time-bottom {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-top: 1px solid #E1E4E7;\n}\n.time-box-left .select-time .time-bottom button {\n  padding: 6px 20px;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n.time-box-left .select-time .time-bottom button:link {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-bottom button:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-bottom button:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.time-box-left .select-time .time-bottom button:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.time-box-left .select-time .time-bottom .get-time {\n  float: left;\n  margin-left: 30px;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-bottom .get-time {\n    margin-left: 10px;\n    padding: 6px 10px;\n  }\n}\n.time-box-left .select-time .time-bottom .close-time {\n  float: right;\n  margin-right: 30px;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-bottom .close-time {\n    margin-right: 10px;\n    padding: 6px 10px;\n  }\n}\n.start {\n  position: absolute;\n  top: 2px;\n  padding: 6px 8px;\n  cursor: pointer;\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .start {\n    right: -20px;\n  }\n}\n@media (max-width: 992px) {\n  .start {\n    right: 0;\n  }\n}\n@media (min-width: 992px) {\n  .start {\n    right: 10px;\n    padding: 4px 10px;\n  }\n}\n.start:hover {\n  background-color: #3082f9;\n}\n.start:active {\n  background-color: #1F71E8;\n}\n.start:hover {\n  background-color: #3082f9;\n}\n.start:active {\n  background-color: #1F71E8;\n}\n/* skill-box */\n.skill-box {\n  position: relative;\n  padding: 0;\n}\n.new-skill-box {\n  margin-top: 20px;\n}\n.skill-box-top {\n  width: 100%;\n}\n.skill-box-top .skill-show {\n  float: left;\n  width: 70%;\n  padding: 4px;\n  min-height: 112px;\n  border: 1px solid #E1E4E7;\n  border-radius: 4px;\n}\n.skill-box-top .skill-show span {\n  float: left;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n  padding: 4px;\n  margin-left: 4px;\n  margin-top: 4px;\n  cursor: pointer;\n}\n.skill-box-top .skill-show + div {\n  float: left;\n  width: 30%;\n  padding-left: 20px;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div {\n    padding-left: 6px;\n  }\n}\n.skill-box-top .skill-show + div .select-skill,\n.skill-box-top .skill-show + div #skill-people {\n  display: block;\n  padding: 5px;\n}\n.skill-box-top .skill-show + div .select-skill {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  padding: 4px 20px;\n}\n.skill-box-top .skill-show + div .select-skill:hover {\n  background-color: #3082f9;\n}\n.skill-box-top .skill-show + div .select-skill:active {\n  background-color: #1F71E8;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div .select-skill {\n    padding: 5px 13px;\n  }\n}\n.skill-box-top .skill-show + div .skill-people {\n  margin-top: 14px;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div .skill-people {\n    padding: 4px;\n  }\n}\n.skill-box-top .skill-show + div .delete {\n  font-size: 22px;\n  margin-top: 14px;\n  display: block;\n  padding-left: 20px;\n  color: #888888;\n  cursor: pointer;\n}\n.skill-box-top .skill-show + div .delete:link {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.skill-list {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 70%;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n@media (max-width: 768px) {\n  .skill-list {\n    width: 100%;\n  }\n}\n.skill-list .triangle {\n  top: -8px;\n}\n.skill-list ul,\n.skill-list li {\n  margin: 0;\n  padding: 4px 0;\n  cursor: pointer;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.skill-list .skill-ul-left li {\n  width: 25%;\n  height: auto;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border-right: 1px solid #F5F5F5;\n  overflow: hidden;\n}\n.skill-list .skill-ul-left li ul {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 25%;\n  width: 25%;\n}\n.skill-list .skill-ul-left li ul .triangle {\n  top: -8px;\n}\n.skill-list .skill-ul-left li ul li {\n  width: 100%;\n}\n.skill-list .skill-ul-left li ul li div {\n  display: none;\n  width: 200%;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  padding: 4px;\n}\n.skill-list .skill-ul-left li ul li div span {\n  position: relative;\n  font-size: 10px;\n  display: block;\n  float: left;\n  padding: 4px;\n  margin-right: 6px;\n  margin-top: 6px;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .skill-list .skill-ul-left li ul li div span {\n    margin-right: 2px;\n    margin-top: 2px;\n    padding: 2px;\n  }\n}\n.skill-bottom {\n  border-top: 1px solid #F5F5F5;\n  padding: 14px 20px;\n}\n.skill-bottom button {\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n  padding: 6px 14px;\n}\n.skill-bottom button:link {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-bottom button:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-bottom button:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.skill-bottom button:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.skill-bottom .skill-sure {\n  float: left;\n}\n.skill-bottom .skill-cancle {\n  float: right;\n}\n.skill-active {\n  background-color: #63b5ff !important;\n  color: #ffffff;\n}\nbody,\nul,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nol,\nli,\np,\nform,\nfieldset,\ntable,\ntd,\nimg,\ndiv,\ndl,\ndt,\ndd,\ninput {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-size: 12px;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\nimg,\ninput {\n  border: none;\n}\nli {\n  list-style: none;\n}\ninput,\nselect,\ntextarea {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\na {\n  text-decoration: none;\n}\n/*登录注册*/\n#common-login,\n#common-register,\n#common-checkLogin,\n#common-forget {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 1000px;\n  z-index: 9999;\n  display: none;\n  background-color: #ffffff;\n}\n.tea-register,\n.stu-register,\n.tea-checkLogin,\n.stu-checkLogin {\n  position: relative;\n  z-index: 69999;\n  float: left;\n  width: 120px;\n  height: 80px;\n  margin-top: 20%;\n  margin-left: 50px;\n  line-height: 80px;\n  font-size: 20px;\n  border-radius: 5px;\n  text-align: center;\n  cursor: pointer;\n  background: #EEE;\n}\n.tea-register,\n.tea-checkLogin {\n  margin-left: 40%;\n}\n.lo-container,\n.re-container {\n  z-index: 99999;\n  position: relative;\n  width: 300px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px #CCC;\n  margin-top: 10%;\n  margin-left: 40%;\n  border: 1px solid #CCC;\n}\n.re-container {\n  display: none;\n}\n.out,\n.re-out,\n.forget-out,\n.forget-pwdOut {\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: bold;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #B3B3B3;\n}\n.out:hover,\n.re-out:hover,\n.forget-out:hover,\n.forget-pwdOut:hover {\n  background: #787878;\n}\nh1 {\n  margin: 10px 0 !important;\n  text-align: center;\n  font-weight: bold;\n  font-size: 20px !important;\n}\nh2 {\n  margin-bottom: 10px !important;\n  text-align: center;\n  font-size: 16px !important;\n  color: #888 !important;\n}\n#uname,\n#pwd,\n#re-uname,\n#re-pwd,\n#re-email {\n  width: 200px;\n}\n.div-uname,\n.div-pwd,\n.re-div-uname,\n.re-div-pwd,\n.re-div-email {\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.div-pwd,\n.re-div-pwd,\n.re-div-email {\n  border-top: none;\n}\n.img-validate,\n.re-img-validate {\n  line-height: 48px;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.img-validate input,\n.re-img-validate input {\n  height: 30px;\n  border: 1px solid #CCC;\n  text-indent: 6px;\n  width: 80px !important;\n}\n#canvas {\n  position: absolute;\n  left: 135px;\n  top: 170px;\n  width: 80px;\n  height: 40px;\n  margin: 4px 10px;\n  text-indent: 10px;\n  line-height: 40px;\n  color: red;\n  font-size: 20px;\n  background-color: black;\n}\n.reload {\n  position: absolute;\n  right: 12px;\n  display: inline-block;\n  height: 20px;\n  line-height: 20px;\n  margin-top: 4px;\n  text-indent: 2px;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #CCC;\n}\n.bt-login {\n  line-height: 36px;\n  color: #fff;\n  margin: 10px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #0077d9;\n}\n#remember {\n  margin-left: 10px;\n  margin-bottom: 16px;\n}\n.unlogin {\n  cursor: pointer;\n}\n.unlogin:hover {\n  color: red;\n}\n.register {\n  float: right;\n  margin-top: 0;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.p-login,\n.p-pwd,\n.p-uname,\n.p-validate {\n  position: absolute;\n  display: inline-block;\n  margin-left: -10px;\n  width: 90px;\n  height: 32px;\n  line-height: 16px;\n  color: red;\n}\n.p-login {\n  margin-left: 4px;\n  line-height: 18px;\n}\n.p-validate {\n  text-indent: -10px;\n  margin-left: 10px;\n  top: 196px;\n  left: 240px;\n}\n.p-uname {\n  top: 86px;\n}\n.p-pwd {\n  top: 134px;\n}\n#re-validate {\n  margin: 0 10px ;\n}\n.re-reload {\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  margin-top: 10px;\n  text-indent: 2px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.re-bt-register {\n  line-height: 36px;\n  color: #fff;\n  margin: 10px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #0077d9;\n}\n.re-unlogin {\n  margin-left: 10px;\n}\n.re-bt-login {\n  display: inline-block;\n  margin-bottom: 16px;\n  cursor: pointer;\n  color: #259;\n}\n.re-p-validate,\n.re-p-pwd,\n.re-p-uname,\n.re-p-email {\n  position: absolute;\n  display: inline-block;\n  margin-top: 2px;\n  margin-left: -1px;\n  width: 80px;\n  height: 32px;\n  line-height: 16px;\n  color: red;\n}\n.re-p-validate {\n  width: 50px;\n  margin-left: 5px;\n  text-indent: -4px;\n}\n.re-p-uname {\n  top: 82px;\n}\n.re-p-pwd {\n  top: 134px;\n}\n.re-p-email {\n  top: 180px;\n}\n.re-p-validate {\n  top: 226px;\n}\n.re-promot {\n  display: inline-block;\n  text-indent: 10px;\n  color: red;\n}\n.forget-validate,\n.forget-pwd {\n  width: 300px;\n  position: relative;\n  border-radius: 10px;\n  box-shadow: 0 0 10px #CCC;\n  margin-top: 10%;\n  margin-left: 40%;\n  border: 1px solid #CCC;\n}\n.forget-validate p,\n.forget-pwd p {\n  margin: 10px 0;\n  text-align: center;\n  font-size: 18px;\n}\n.forget-validate input,\n.forget-pwd input {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.forget-validate input input,\n.forget-pwd input input {\n  width: 50%;\n}\n.forget-validate .forget-getValidateDiv,\n.forget-pwd .forget-getValidateDiv {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.forget-validate .forget-getValidateDiv input,\n.forget-pwd .forget-getValidateDiv input {\n  float: left;\n  width: 50%;\n  border-top: none;\n}\n.forget-validate .forget-getValidateDiv .forget-reload,\n.forget-pwd .forget-getValidateDiv .forget-reload {\n  width: 80px;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 4px;\n  margin-left: 40px;\n  text-indent: -2px;\n  border-radius: 5px;\n  text-align: center;\n}\n.forget-validate #forget-surePwd,\n.forget-pwd #forget-surePwd,\n.forget-validate #forget-email,\n.forget-pwd #forget-email {\n  border-top: none;\n}\n.forget-validate #forget-email,\n.forget-pwd #forget-email {\n  border-bottom: none;\n}\n.forget-validate .forget-pwdPromot,\n.forget-pwd .forget-pwdPromot,\n.forget-validate .forget-promot,\n.forget-pwd .forget-promot {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  margin: 5px 0;\n  color: red;\n}\n.forget-validate .forget-pwdBtn,\n.forget-pwd .forget-pwdBtn,\n.forget-validate .forget-btn,\n.forget-pwd .forget-btn {\n  width: 80px;\n  height: 30px;\n  margin-left: 36%;\n  margin-bottom: 5px;\n}\n.forget-pwd {\n  display: none;\n}\n.register .container {\n  padding-top: 20px;\n}\n@media (max-width: 992px) {\n  select,\n  option,\n  input,\n  h4,\n  h5,\n  span,\n  label,\n  span,\n  li,\n  button {\n    font-size: 10px;\n  }\n}\n@media (min-width: 992px) {\n  select,\n  input,\n  h4,\n  h5,\n  span,\n  label,\n  span,\n  li,\n  button {\n    font-size: 14px;\n  }\n}\n.select {\n  border-color: #d3d3d3;\n  padding: 4px 6px 6px 4px;\n  outline: none;\n  border-radius: 3px;\n}\n.select:focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.select option {\n  width: 100%;\n}\n.label {\n  padding-right: 20px;\n  padding-top: 4px;\n  font-weight: normal;\n}\n.span {\n  text-align: center;\n  display: block;\n  background-color: #4193ff;\n  color: #ffffff;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.skill-active {\n  background-color: #63b5ff !important;\n  color: #ffffff;\n}\nform {\n  padding-top: 30px;\n}\n@media (max-width: 992px) {\n  form .user-img-m {\n    zoom: 1;\n  }\n  form .user-img-m:before {\n    display: table;\n    content: \" \";\n  }\n  form .user-img-m:after {\n    display: table;\n    content: \" \";\n    clear: both;\n  }\n}\nform .user-img-m h4 {\n  padding-left: 8px;\n  font-weight: bold;\n  color: #222222;\n}\n@media (min-width: 992px) {\n  form .user-img-m h4 {\n    display: none;\n  }\n}\nform .user-img-m .user-img {\n  position: relative;\n  width: 160px;\n  height: 160px;\n  border-radius: 5px;\n}\n@media (min-width: 992px) {\n  form .user-img-m .user-img {\n    float: left;\n    left: 30px;\n  }\n}\n@media (max-width: 992px) {\n  form .user-img-m .user-img {\n    float: left;\n    bottom: 20px;\n  }\n}\nform .user-img-m .user-img .img-mask {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: .4;\n  border-radius: 5px;\n}\nform .user-img-m .user-img i {\n  position: absolute;\n  left: 60px;\n  top: 35px;\n  font-size: 40px;\n  color: #ffffff;\n}\nform .user-img-m .user-img h5 {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 30px;\n  color: #ffffff;\n  text-align: center;\n}\nform .user-img-m .user-img input[type=\"file\"] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  width: 160px;\n  height: 160px;\n}\nform .user-img-m .user-img img {\n  border-radius: 3px;\n  display: none;\n  border: none;\n}\nform .user-text {\n  overflow: hidden;\n}\n@media (min-width: 992px) {\n  form .user-text {\n    margin-left: 230px;\n  }\n}\nform .user-text .input-box {\n  position: relative;\n  border-bottom: 1px solid #E1E4E7;\n}\n@media (max-width: 992px) {\n  form .user-text .input-box {\n    padding: 10px 10px;\n  }\n}\n@media (min-width: 992px) {\n  form .user-text .input-box {\n    padding: 20px 30px;\n  }\n}\nform .user-text .input-box h4 {\n  text-align: left;\n  font-weight: bold;\n  color: #444444;\n  padding: 0 10px;\n}\nform .user-text .input-box input[type=\"text\"] {\n  height: 32px;\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  transfrom: box-shadow;\n}\nform .user-text .input-box input[type=\"text\"]:focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\nform .user-text .input-box select {\n  border-color: #d3d3d3;\n  padding: 4px 6px 6px 4px;\n  outline: none;\n  border-radius: 3px;\n}\nform .user-text .input-box select:focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\nform .user-text .input-box select option {\n  width: 100%;\n}\nform .user-text .input-box .sex input {\n  margin: 2px 6px 0 0;\n}\nform .user-text .input-box .sex label {\n  padding-right: 20px;\n  padding-top: 4px;\n  font-weight: normal;\n}\nform .user-text .input-box textarea {\n  outline: none;\n  border: 1px solid #E1E4E7;\n  padding: 10px;\n  border-radius: 3px;\n  transfrom: box-shadow;\n}\nform .user-text .input-box textarea:focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\nform .user-text .border-top {\n  border-top: 1px solid #E1E4E7;\n}\n.skill-box {\n  position: relative;\n  padding: 0;\n}\n#submit {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  text-align: center;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n#submit:hover {\n  background-color: #3082f9;\n}\n#submit:active {\n  background-color: #1F71E8;\n}\n", ""]);

// exports


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "<div class=\"register common-width\">\n  <div class=\"container\">\n    <form class=\"teacher\">\n      <div class=\"user-img-m\">\n        <h4 class=\"col-xs-3 col-sm-2\">头像</h4>\n        <div class=\"user-img\">\n          <div class=\"img-mask\"></div>\n          <i class=\"iconfont\">&#xe62e;</i>\n          <h5>点击上传头像</h5>\n          <input id=\"t-img\" class=\"head-img\" type=\"file\">\n          <img src=\"xxxHTMLLINKxxx0.7150617934949790.5755724380336225xxx\" alt=\"1\">\n        </div>\n      </div>\n      <div class=\"user-text\">\n        <div class=\"input-box border-top\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">姓名</h4>\n            <input id=\"t-name\" class=\"col-xs-5 col-sm-3 must\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">性别</h4>\n            <div class=\"sex\">\n              <label><input type=\"radio\" value=\"男\" name=\"t-sex\" checked=\"checked\">男</label>\n              <label><input type=\"radio\" value=\"女\" name=\"t-sex\">女</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">所在院校</h4>\n            <select id=\"t-university\">\n              <option value=\"西南石油大学\">西南石油大学</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">所在院系</h4>\n            <select id=\"t-academy\">\n              <option value=\"计算机科学与技术学院\">计算机科学与技术学院</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">职称</h4>\n            <select id=\"t-rank\">\n              <option value=\"助教\">助教</option>\n              <option value=\"讲师\">讲师</option>\n              <option value=\"副教授\">副教授</option>\n              <option value=\"教授\">教授</option>\n              <option value=\"博士生导师\">博士生导师</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">QQ</h4>\n            <input class=\"col-xs-8 col-sm-4 must\" id=\"t-qq\" type=\"text\">\n          </div>\n        </div>\n      </div>\n    </form>\n    <form class=\"student\">\n      <div class=\"user-img-m\">\n        <h4 class=\"col-xs-3 col-sm-2\">头像</h4>\n        <div class=\"user-img\">\n          <div class=\"img-mask\"></div>\n          <i class=\"iconfont\">&#xe62e;</i>\n          <h5>点击上传头像</h5>\n          <input id=\"s-img\" class=\"head-img\" type=\"file\">\n          <img src=\"xxxHTMLLINKxxx0.0351683329361505150.9365519243293705xxx\" alt=\"head\">\n        </div>\n      </div>\n      <div class=\"user-text\">\n        <div class=\"input-box border-top\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">姓名</h4>\n            <input class=\"col-xs-5 col-sm-3 must\" id=\"s-name\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">学历</h4>\n            <select name=\"\" id=\"s-edu-background\">\n              <option value=\"大专\">大专</option>\n              <option value=\"本科\">本科</option>\n              <option value=\"硕士\">硕士</option>\n              <option value=\"博士\">博士</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">性别</h4>\n            <div class=\"sex\">\n              <label><input type=\"radio\" value=\"男\" name=\"s-sex\" checked>男</label>\n              <label><input type=\"radio\" value=\"女\" name=\"s-sex\">女</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">所在院校</h4>\n            <select id=\"s-university\">\n              <option value=\"西南石油大学\">西南石油大学</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">所在院系</h4>\n            <select id=\"s-academy\">\n              <option value=\"计算机科学与技术学院\">计算机科学与技术学院</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">专业</h4>\n            <select id=\"s-major\">\n              <option value=\"网络工程\">网络工程</option>\n              <option value=\"软件工程\">软件工程</option>\n              <option value=\"物理网工程\">物理网工程</option>\n              <option value=\"计算机科学与技术\">计算机科学与技术</option>\n              <option value=\"信息管理\">心里管理</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">入学时间</h4>\n            <select id=\"s-entry-university\">\n              <option value=\"2010\">2010年</option>\n              <option value=\"2011\">2011年</option>\n              <option value=\"2012\">2012年</option>\n              <option value=\"2013\">2013年</option>\n              <option value=\"2014\">2014年</option>\n              <option value=\"2015\">2015年</option>\n              <option value=\"2016\">2016年</option>\n              <option value=\"2017\">2017年</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">毕业时间</h4>\n            <select id=\"s-leave-university\">\n              <option value=\"2014\">2014年</option>\n              <option value=\"2015\">2015年</option>\n              <option value=\"2016\">2016年</option>\n              <option value=\"2017\">2017年</option>\n              <option value=\"2018\">2018年</option>\n              <option value=\"2019\">2019年</option>\n              <option value=\"2020\">2020年</option>\n              <option value=\"2021\">2021年</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">技能</h4>\n            <div class=\"col-xs-8 col-md-9 skill-box\"></div>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">项目经验</h4>\n            <textarea class=\"col-xs-8 col-sm-8\" id=\"s-experience\" rows=\"6\" placeholder=\"(选填)\"></textarea>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">QQ</h4>\n            <input class=\"col-xs-8 col-sm-4 must\" id=\"s-qq\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <div class=\"row\">\n            <h4 class=\"col-xs-3 col-md-2\">自我评价</h4>\n            <textarea class=\"col-xs-8 col-sm-8\" id=\"s-self-feel\" cols=\"30\" rows=\"3\" placeholder=\"(选填)\"></textarea>\n          </div>\n        </div>\n      </div>\n    </form>\n    <div class=\"row\">\n      <div class=\"col-xs-3 col-md-3\"></div>\n      <button type=\"button\" id=\"submit\" class=\"col-xs-7 col-md-1\">提交</button>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(22, function() {
			var newContent = __webpack_require__(22);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var cut_picture_str = __webpack_require__(55);
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













/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = "<div class=\"mask\"></div>\n<div class=\"cut-picture\">\n  <i class=\"iconfont\" id=\"close-cut\">&#xe648;</i>\n  <h3>编辑头像</h3>\n  <h4>调整头像尺寸和位置</h4>\n  <div class=\"pic-ctrl\">\n    <canvas class=\"cut-canvas\" width=\"240\" height=\"240px\" style=\"width: 240px;height: 240px;\"></canvas>\n    <div class=\"rank\">\n      <i class=\"iconfont less\">&#xe625;</i>\n      <input type=\"range\" step=\"0.01\" min=\"1\" max=\"2\" value=\"1\">\n      <i class=\"iconfont more\">&#xe610;</i>\n    </div>\n    <button id=\"cut-button\" type=\"button\">确定</button>\n  </div>\n</div>";

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = "<div class=\"skill-box-top clearfix\">\n  <div class=\"skill-show\"></div>\n  <div>\n    <button type=\"button\" class=\"select-skill\">选择</button>\n  </div>\n</div>\n<div class=\"skill-list\">\n  <ul class=\"skill-ul-left clearfix\">\n    <li class=\"skill-li-left\">IT\n      <ul class=\"skill-ul-mid\">\n        <li class=\"skill-li-mid\">前端开发\n          <div>\n            <span data-skill='HTML/CSS'>HTML/CSS</span>\n            <span data-skill='javaScript'>javaScript</span>\n            <span data-skill='HTML5'>HTML5</span>\n            <span data-skill='CSS3'>CSS3</span>\n            <span data-skill='jQuery'>jQuery</span>\n            <span data-skill='Node.js'>Node.js</span>\n            <span data-skill='Bootstrap'>Bootstrap</span>\n            <span data-skill='Less/Sass'>Less/Sass</span>\n          </div>\n        </li>\n        <li class=\"skill-li-mid\">后端开发\n          <div>\n            <span data-skill=\"java\">java</span>\n            <span data-skill=\"Spring\">Spring</span>\n            <span data-skill=\"SpringBoot\">Spring Boot</span>\n            <span data-skill=\"PHP\">PHP</span>\n            <span data-skill=\"Python\">Python</span>\n            <span data-skill=\"C#\">C#</span>\n            <span data-skill=\"C++\">C++</span>\n          </div>\n        </li>\n        <li class=\"skill-li-mid\">数据库\n          <div>\n            <span data-skill=\"MySQl\">MySQl</span>\n            <span data-skill=\"MongoDB\">MongoDB</span>\n            <span data-skill=\"Oracel\">Oracel</span>\n            <span data-skill=\"SQLServer\">SQL Server</span>\n          </div>\n        </li>\n        <li class=\"skill-li-mid\">UI设计\n          <div>\n            <span data-skill=\"PS\">PS</span>\n            <span data-skill=\"AI\">AI</span>\n          </div>\n        </li>\n        <li class=\"skill-li-mid\">爬虫\n          <div>\n            <span data-skill=\"PHP\">PHP</span>\n            <span data-skill=\"Python\">Python</span>\n          </div>\n        </li>\n        <li class=\"skill-li-mid\">移动开发\n          <div>\n            <span data-skill=\"Android\">Android</span>\n            <span data-skill=\"IOS\">IOS</span>\n            <span data-skill=\"Unity3D\">Unity 3D</span>\n            <span data-skill=\"Cocos2d-x\">Cocos2d-x</span>\n          </div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n    <li class=\"skill-li-left\">敬请期待\n      <ul class=\"skill-ul-left\">\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n        <li class=\"skill-li-mid\">敬请期待\n          <div></div>\n        </li>\n      </ul>\n    </li>\n  </ul>\n  <div class=\"skill-bottom clearfix\">\n    <button type=\"button\" class=\"skill-sure\">确定</button>\n    <button type=\"button\" class=\"skill-cancle\">取消</button>\n  </div>\n</div>";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
__webpack_require__(50);
//获取技能盒子组件
const skillBox = __webpack_require__(7);
const skill_box = new skillBox();
//获取图片裁剪组件
const cutPicture = __webpack_require__(53);
const cut_picture = new cutPicture();
//获取register页面的html模板
const register_str = __webpack_require__(45);
//请求路径
const content_path = __webpack_require__(1);
(function () {
var register = {
    //用户类型
    user_type:"",
    //token值
    token: "",
    //学生表单存储对象
    student_form:{
      sex: "",
      image: "test",
      university: "",
      majorAndGrade: "",
      eduBackgroud: "",
      entryUniversity: "",
      leaveUniversity: "",
      skills: [],
      experience: "",
      selfFeel: "",
      qq: ""
    },
    //老师表单存储对象
    teacher_form:{
      sex:"",
      image: "",
      university: "",
      academy: "",
      rank: "",
      qq: ""
    },
    //初始化
    info:function () {
      var weikeData = JSON.parse(localStorage.weikeData);
      $(".user-name").html(weikeData.data.username);
      //获取token,提交表单使用
      var tokenData = weikeData.data.token
			var token = "Bearer " + tokenData;
			//根据localStorage的值获取用户类型,呈现不同的表单
      this.user_type = weikeData.data.role;
      this.token = token;
      if (this.user_type === "ROLE_STUDENT") {
        $("header").after(register_str);
        $(".teacher").remove();
      } else {
        $(".register").find(".student").remove();
        $("header").after(register_str);
         $(".student").remove();
      }
      skill_box.action();
      //删除teacherForm一起引入的user html
      $(".user").remove();



      let weikeUser = JSON.parse(localStorage.getItem("weikeUser"));
      let studentForm = weikeUser;
      let teacherForm = weikeUser;



      if (weikeUser) {
        //初始化教师的资料
        $(".teacher img").src = teacherForm.image;
        $(".teacher input[id='t-name']").val(teacherForm.username);
        if(teacherForm.sex === "男"){
        	$(".teacher .sex input[value='男']").attr("checked", true);
        }else{
        	$(".teacher .sex input[value='女']").attr("checked", true);
        }
        let rankOption = $(".teacher #t-rank option");
        let rankOptionLength = rankOption.length;
        for(let i = 0; i < rankOptionLength; i ++){
        	if($(".teacher #t-rank option").eq(i).val() === teacherForm.rank){
        		$(".teacher #t-rank option").eq(i).attr("selected",true);
        	}
        }
        $(".teacher input[id='t-qq']").val(teacherForm.qq);

        //初始化学生的资料
        $(".student img").src = studentForm.image;
        $(".student input[id='s-name']").val(studentForm.username);
        if(studentForm.sex === "男"){
        	$(".student .sex input[value='男']").attr("checked", true);
        }else{
        	$(".student .sex input[value='女']").attr("checked", true);
        }
        //学历
        let eduOption = $(".student #s-edu-background option");
        let eduOptionLength = eduOption.length;
        for(let i = 0; i < eduOptionLength; i ++){
        	if($(".student #s-edu-background option").eq(i).val() === studentForm.edu_background){
        		$(".student #s-edu-background option").eq(i).attr("selected",true);
        	}
        }
        //专业
        let majorOption = $(".student #s-major option");
        let majorOptionLength = majorOption.length;
        for(let i = 0; i < majorOptionLength; i ++){
        	if($(".student #s-major option").eq(i).val() === studentForm.major){
        		$(".student #s-major option").eq(i).attr("selected",true);
        	}
        }
        //入学时间
        let entryOption = $(".student #s-entry-university option");
        let entryOptionLength = entryOption.length;
        for(let i = 0; i < entryOptionLength; i ++){
        	if($(".student #s-entry-university option").eq(i).val() === studentForm.entry_university){
        		$(".student #s-entry-university option").eq(i).attr("selected",true);
        	}
        }
        //毕业时间
        let leaveOption = $(".student #s-leave-university option");
        let leaveOptionLength = leaveOption.length;
        for(let i = 0; i < leaveOptionLength; i ++){
        	if($(".student #s-leave-university option").eq(i).val() === studentForm.leave_university){
        		$(".student #s-leave-university option").eq(i).attr("selected",true);
        	}
        }
        //技能
        let skillLength = studentForm.skills.length;
        for(let k = 0; k < skillLength; k ++){
  				let skills = `<span data-show-skill="${studentForm.skills[k]}">${studentForm.skills[k]}</span>`;
  				$(".s .skill-show").append(skills);
  			}
        $("textarea[id = 's-experience'").val(studentForm.experience);
        $(".student input[id='s-qq']").val(studentForm.qq);
        $("textarea[id = 's-self-feel'").val(studentForm.self_feel);
      }

    },
    //错误信息提示
    error: function (ele) {
      var error = "<i class='iconfont error'>&#xe648;</i>";
      if (!ele.next()[0]) {
        ele.after(error);
      }
    },
    //获得学生表单信息
    getStudentForm:function () {
      //判断必填内容是否全部填写
      var flag = true,
          name = $("#s-name"),
          skill = $("span[data-show-skill]"),
          qq = $("#s-qq");
      //必填信息之技能
      if (!skill.length > 0) {
        this.error($(".skill-box"));
        flag = false;
      } else {
        //将技能内容拼接到skills数组
        for (var i = 0;i < skill.length;i++) {
          var each = skill.eq(i).attr("data-show-skill");
          this.student_form.skills.push(each);
        }
      }
      //必填信息之qq
      if (qq.val() === "") {
        this.error(qq);
        flag = false;
      } else {
        this.student_form.qq = qq.val();
      }
      //当flag为true时,则三个必填信息都OK
      //我们才会进行其他信息获取,并且提交
      //因为这些信息都是有默认值的选择框,或者是非必填内容
      if (flag) {
        this.student_form.sex = $("input:radio[name='s-sex']:checked").val();
        this.student_form.university = $("#s-university").val();
        this.student_form.majorAndGrade = $("#s-major").val();
        this.student_form.eduBackgroud = $("#s-edu-background").val();
        this.student_form.entryUniversity = $("#s-entry-university").val();
        this.student_form.leaveUniversity = $("#s-leave-university").val();
        this.student_form.experience = $("#s-experience").val();
        this.student_form.selfFeel = $("#s-self-feel").val();
        //提交表单
        this.upStudentFrom();
      }
    },
    //获取老师表单信息
    getTeacherForm:function () {
      //判断必填内容是否全部填写
      var flag = true,
          name = $("#t-name"),
          qq = $("#t-qq");
      //必填信息之姓名
      if (!name.val()) {
        this.error(name);
        flag = false;
      } else {
        this.teacher_form.username = name.val();
      }
      //必填信息之qq
      if (!qq.val()) {
        this.error(qq);
        flag = false;
      } else {
        this.teacher_form.qq = qq.val();
      }
      //当flag为true时,则二个必填信息都OK
      //我们才会进行其他信息获取,并且提交
      //因为这些信息都是有默认值的选择框,或者是非必填内容
      if (flag) {
        this.teacher_form.image = 'test';
        this.teacher_form.sex = $("input:radio[name='t-sex']:checked").val();
        this.teacher_form.university = $("#t-university").val();
        this.teacher_form.academy = $("#t-academy").val();
        this.teacher_form.rank = $("#t-rank").val();
        //提交表单
        this.upTeacherForm();
      }
    },
    //提交学生表单
    upStudentFrom:function () {
      var that = this,
      		form = JSON.stringify(that.student_form),
          path_stu = '';
      var token = that.token;
      if (!localStorage.weikeUser) {
        path_stu = content_path + '/WeiKe/student/addPersonalDeail';
      } else {
        path_stu = content_path + '/WeiKe/student/updateInfo';
      }
      console.log(that.token)
      $.ajax({
        url: path_stu,
        type: "POST",
        data: form,
        dataType: 'json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', token);
          xhr.setRequestHeader("Content-Type", 'application/json;charset=utf-8');
        },

        success: function (data) {
          if (data.ifSuccess) {
            alert('个人信息填写成功，返回主页');
            window.location.href = 'index.html';
          }
        },
        error: function (data) {
          alert('错误');
        }
      });
    },
    //提交老师表单
    upTeacherForm:function () {
      var that = this;
          path_stu = '';
      if (!localStorage.weikeUser) {
        path_stu = content_path + '/WeiKe/teacher/addPersonal';
      } else {
        path_stu = content_path + '/WeiKe/teacher/updateInfo';
      }
      $.ajax({
        url: path_stu,
        type: "post",
        contentType: "application/json",
        beforeSend:function(request) {
					request.setRequestHeader("Authorization", that.token);
				},
        data: JSON.stringify(that.teacher_form),
        success: function (data) {
          if (data.ifSuccess) {
            alert('个人信息填写成功，返回主页');
            window.location.href = 'index.html';
          }
        },
        error: function (data) {
          alert('错误');
        }
      });
    },
    //程序入口
    action:function () {
      this.info();
      this.addEvent();
    },
    //绑定事件
    addEvent:function () {
      var that = this;
      $(".register").on("click",function (event) {
        var target = event.target;
        //提交表单
        if (target.id === "submit") {
          if (that.user_type === "ROLE_STUDENT") {
            that.getStudentForm();
          } else {
            that.getTeacherForm();
          }
        //已选择的技能点击一下就删除且在技能栏内移出激活状态
        }
      });
      $(".head-img").on("change",function (event) {
        if (this.files[0].type.match(/image.*/)) {
         cut_picture.action(this.files[0],that.user_type);
        } else {
          alert("只能上传图片");
        }
      });
      //聚焦必填文本框时隐藏后面的小红叉
      $(".must").on("focus",function () {
        $(this).next().hide();
      });
      //qq文本框只能输入数字
      $("#t-qq,#s-qq").on("blur",function (event) {
        $(this).val($(this).val().replace(/[^0-9.]/g, ''));
      });
    }
};
register.action();
})(jQuery);


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var skill_box_str = __webpack_require__(6);
function skill () {};
skill.prototype = {
  //需要频繁操作的技能盒子
  box: null,
  info:function () {
    var skill_box = $(".skill-box");
    skill_box.html(skill_box_str);
    this.box = $(".skill-list");
  },
  //入口
  action:function () {
    this.info();
    this.addEvent();
  },
  //根据显示隐藏技能框
  showSkillBox:function () {
    //若点击的技能表单是显示的，则隐藏它
    if (this.box.css("display") === "block") {
      this.box.slideUp(200);
    //点击的技能表单是隐藏的，则显示它
    //并且隐藏其他显示的技能表单
    } else {
      this.box.slideDown(200);
    }
  },
  //显示选取的技能
  showSkill:function () {
    this.showSkillBox();
    var skill = this.box.find(".skill-active"),
        skill_show = $(".skill-show");
    if (skill[0]) {
      skill_show.empty();
      for (var i = 0;i < skill.length;i++) {
        var data = skill.eq(i).attr("data-skill");
        skill_show.append("<span data-show-skill='"+data+"'>"+data+"</span>");
      }
    }
  },
  //绑定事件
  addEvent:function () {
    var that = this;
    $("body").on("click",".skill-box",function (event) {
      var target = $(event.target);
      //技能栏显示隐藏
      if (target.hasClass("select-skill") || target.hasClass("skill-cancle")) {
        that.showSkillBox();
      //技能栏内的菜单切换
      } 
      else if (target.hasClass("skill-li-left")) {
        target.find("ul").css("display","block");
        $(".skill-li-left").not(target).find("ul").css("display","none");
      } 
      else if (target.hasClass("skill-li-mid")) {
        target.find("div").css("display","block");
        $(".skill-li-mid").not(target).find("div").css("display","none");
      //点击激活技能
      } 
      else if (target.attr("data-skill")) {
      	var flag = target.hasClass("skill-active");
        if (flag) {
        	console.log("0")
        	target.removeClass("skill-active")
        	return false;
        } else {
  				console.log("2")
          target.addClass("skill-active");
          return false;
        }
      //确定技能选择
      } 
      else if (target.hasClass("skill-sure")) {
        that.showSkill();
      //点击删除技能,并且将技能选择栏中的激活状态去除
      } 
      else if (target.attr("data-show-skill")) {
        var skill = target.attr("data-show-skill");
        that.box.find("span[data-skill='"+skill+"']").removeClass("skill-active");
        target.remove();
      }
    });
  }
};
module.exports = skill;

/***/ })

},[64]);