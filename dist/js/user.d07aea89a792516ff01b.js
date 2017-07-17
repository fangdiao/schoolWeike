webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "/* 全局样式 */\ni {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nbody {\n  min-width: 300px;\n  max-width: 1400px;\n}\nli {\n  list-style-type: none;\n}\n.error {\n  color: red;\n  position: absolute;\n}\n@media (max-width: 992px) {\n  .error {\n    right: 0;\n    top: 14px;\n  }\n}\n@media (min-width: 992px) {\n  .error {\n    right: 60px;\n    top: 24px;\n  }\n}\n.white-button {\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n.button {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n}\n.button:hover {\n  background-color: #3082f9;\n}\n.button:active {\n  background-color: #1F71E8;\n}\n.textarea {\n  outline: none;\n  border: 1px solid #E1E4E7;\n  padding: 10px;\n  border-radius: 3px;\n  transfrom: box-shadow;\n}\n.input-text {\n  height: 32px;\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  transfrom: box-shadow;\n}\n.clearfix {\n  zoom: 1;\n}\n.clearfix:before {\n  display: table;\n  content: \" \";\n}\n.clearfix:after {\n  display: table;\n  content: \" \";\n  clear: both;\n}\n.common-width {\n  width: 100%;\n}\n.index,\n.search,\n.release,\n.register,\n.user {\n  background-color: #F7F8FA;\n}\n.index .container,\n.search .container,\n.release .container,\n.register .container,\n.user .container {\n  background-color: #ffffff;\n}\n@media (min-width: 768px) {\n  .index .container,\n  .search .container,\n  .release .container,\n  .register .container,\n  .user .container {\n    border-left: 1px solid #E1E4E7;\n    border-right: 1px solid #E1E4E7;\n  }\n}\n.button-link:hover {\n  background-color: #3082f9;\n}\n.button-link:active {\n  background-color: #1F71E8;\n}\n.link:link {\n  color: #888888;\n  text-decoration: none;\n}\n.link:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.link:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.link:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.link-bg:link {\n  color: #888888;\n  text-decoration: none;\n}\n.link-bg:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.link-bg:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.link-bg:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.box-shadow {\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.box-shadow-focus {\n  border: 1px solid #bfc2c5;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.triangle {\n  position: relative;\n  display: block;\n}\n.triangle:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: auto;\n  border-bottom: 8px solid #E1E4E7;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.triangle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 1px;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  margin: auto;\n  border-bottom: 8px solid #ffffff;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n}\n/* header部分 */\nheader {\n  background: #ffffff;\n  border-bottom: 1px solid #E1E4E7;\n}\nheader ul {\n  margin: 0;\n  padding: 0;\n}\nheader nav {\n  margin: 0 auto;\n}\nheader nav .logo {\n  float: left;\n  padding: 8px 20px 2px 0;\n}\nheader nav .nav-ul li {\n  list-style-type: none;\n  float: left;\n}\nheader nav .nav-ul li a {\n  display: block;\n  height: 50px;\n  padding: 10px 24px;\n  line-height: 30px;\n  font-size: 14px;\n}\nheader nav .nav-ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .nav-ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .nav-ul li a:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .nav-ul li a:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign {\n  float: right;\n}\nheader nav .sign .not-logged {\n  display: block;\n  padding-right: 10px;\n}\nheader nav .sign .not-logged a {\n  font-size: 14px;\n  line-height: 50px;\n}\nheader nav .sign .not-logged a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .sign .not-logged a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .sign .not-logged #sign-in-bt {\n  padding-right: 8px;\n}\nheader nav .sign .logged .logged-user {\n  position: relative;\n  float: right;\n  background: #ffffff;\n  width: 120px;\n}\nheader nav .sign .logged .logged-user:hover .user-ul {\n  display: block;\n}\nheader nav .sign .logged .logged-user .user-message {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px;\n  cursor: pointer;\n  float: right;\n}\nheader nav .sign .logged .logged-user .user-message:hover {\n  background-color: #F5F5F5;\n}\nheader nav .sign .logged .logged-user .user-message span {\n  display: block;\n  float: left;\n}\nheader nav .sign .logged .logged-user .user-message .user-head {\n  width: 30px;\n  height: 30px;\n  background: url(" + __webpack_require__(6) + ") no-repeat;\n  background-size: cover;\n  border-radius: 4px;\n}\nheader nav .sign .logged .logged-user .user-message .user-name {\n  font-size: 10px;\n  color: #1F71E8;\n  font-weight: bold;\n  padding-left: 10px;\n  line-height: 30px;\n}\nheader nav .sign .logged .logged-user .user-ul {\n  display: none;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 120px;\n  z-index: 999;\n}\nheader nav .sign .logged .logged-user .user-ul .triangle {\n  height: 8px;\n  top: 2px;\n}\nheader nav .sign .logged .logged-user .user-ul ul {\n  border-radius: 4px;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n  background: #ffffff;\n  padding-top: 8px;\n  padding-bottom: 10px;\n  border: 1px solid #E1E4E7;\n}\nheader nav .sign .logged .logged-user .user-ul ul li {\n  list-style-type: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li i {\n  float: left;\n  font-size: 16px;\n  padding: 2px 10px 0 10px;\n  color: #888888 !important;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a {\n  width: 100%;\n  display: block;\n  padding: 5px 10px;\n  font-size: 10px;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .sign .logged .logged-user .user-ul ul li a:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign .logged .logged-message {\n  position: relative;\n  float: right;\n  padding-left: 20px;\n  padding-right: 20px;\n  cursor: pointer;\n  z-index: 999;\n}\nheader nav .sign .logged .logged-message:hover .message-box {\n  display: block;\n}\nheader nav .sign .logged .logged-message:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-message:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .sign .logged .logged-message:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\nheader nav .sign .logged .logged-message:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\nheader nav .sign .logged .logged-message .iconfont {\n  font-size: 24px;\n  color: #888888;\n  line-height: 50px;\n}\nheader nav .sign .logged .logged-message .iconfont:hover {\n  color: #777777;\n}\nheader nav .sign .logged .logged-message .message-box {\n  display: none;\n  position: absolute;\n  top: 57px;\n  left: -120px;\n  width: 300px;\n  height: 260px;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\nheader nav .sign .logged .logged-message .message-box i {\n  height: 8px;\n  top: -8px;\n}\nheader nav .sign .logged .logged-message .message-box h6 {\n  text-align: center;\n  font-size: 10px;\n  color: #888888;\n  padding: 8px 10px 14px 10px;\n  border-bottom: 1px solid #F5F5F5;\n}\nheader nav .mobile-ul {\n  position: relative;\n}\nheader nav .mobile-ul #head-nav {\n  position: absolute;\n  right: 20px;\n  top: 5px;\n  font-size: 30px;\n  color: #888888;\n}\nheader nav .mobile-ul ul {\n  display: none;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 26%;\n  min-width: 100px;\n  border-top: 1px solid #E1E4E7;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\nheader nav .mobile-ul ul li {\n  width: 100%;\n  list-style-type: none;\n  text-indent: 10px;\n  border-top: 1px solid #F5F5F5;\n}\nheader nav .mobile-ul ul li a {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  display: block;\n  font-size: 10px;\n}\nheader nav .mobile-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul li a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nheader nav .mobile-ul ul .logged-m {\n  display: none;\n}\n/* footer部分 */\nfooter {\n  background: #F5F5F5;\n}\nfooter .container {\n  background-color: #ffffff;\n  border-top: 1px solid #E1E4E7;\n  border-left: 1px solid #E1E4E7;\n  border-right: 1px solid #E1E4E7;\n}\nfooter .container .logo {\n  padding-top: 30px;\n  float: left;\n}\nfooter .container .foot-ul {\n  margin-left: 40%;\n}\nfooter .container .foot-ul ul {\n  float: left;\n  padding-left: 20px;\n  padding-top: 20px;\n}\nfooter .container .foot-ul ul li {\n  list-style-type: none;\n  padding: 15px 10px;\n}\nfooter .container .foot-ul ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\nfooter .container .foot-ul ul li a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\nfooter .container h5 {\n  padding-top: 10px;\n  padding-bottom: 5px;\n  text-align: center;\n  color: #888888;\n  font-size: 10px;\n}\n/* sign-box部分 */\n/* cut_picture部分 */\n.mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.65);\n}\n.cut-picture {\n  position: absolute;\n  left: 50%;\n  top: 51px;\n  width: 320px;\n  margin-left: -160px;\n  margin-top: 4vh;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.cut-picture #close-cut {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px;\n  font-size: 16px;\n  color: #aaaaaa;\n  cursor: pointer;\n}\n.cut-picture h3 {\n  font-size: 20px;\n  color: #888888;\n  text-align: center;\n  font-weight: bold;\n  padding: 10px 0 10px 0;\n}\n.cut-picture h4 {\n  font-size: 14px;\n  color: #aaaaaa;\n  text-align: center;\n}\n.cut-picture .pic-ctrl {\n  padding: 30px 40px;\n}\n.cut-picture .pic-ctrl canvas {\n  border: 1px solid #F5F5F5;\n  cursor: move;\n}\n.cut-picture .pic-ctrl .rank {\n  text-align: center;\n  margin: 0 auto;\n  padding: 10px 0;\n}\n.cut-picture .pic-ctrl .rank .iconfont {\n  display: inline-block;\n  font-size: 14px;\n  color: #888888;\n  vertical-align: top;\n}\n.cut-picture .pic-ctrl .rank .more {\n  font-size: 16px;\n}\n.cut-picture .pic-ctrl .rank input {\n  display: inline-block;\n  height: 4px;\n  width: 180px;\n  color: #888888;\n  border-radius: 10px;\n  outline: none;\n  background-color: #aaaaaa;\n  vertical-align: middle;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\n.cut-picture .pic-ctrl .rank input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n          appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  background-color: #888888;\n}\n.cut-picture .pic-ctrl button {\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  display: block;\n  width: 140px;\n  padding: 4px 0;\n  margin: 0 auto;\n  background-color: #4193ff;\n}\n.cut-picture .pic-ctrl button:hover {\n  background-color: #3082f9;\n}\n.cut-picture .pic-ctrl button:active {\n  background-color: #1F71E8;\n}\n/* 时间选择器 */\n.time-box-left {\n  position: absolute;\n  left: 0;\n  right: 60px;\n}\n@media (max-width: 768px) {\n  .time-box-left {\n    right: 26px;\n  }\n}\n@media (max-width: 992px) {\n  .time-box-left {\n    right: 50px;\n  }\n}\n@media (min-width: 992px) {\n  .time-box-left {\n    right: 70px;\n  }\n}\n.time-box-left .show-time {\n  width: 100%;\n  height: 32px;\n  color: #1F71E8;\n  font-size: 15px;\n  line-height: 32px;\n  padding-left: 20px;\n  border: 1px solid #E1E4E7;\n  border-radius: 4px;\n}\n@media (max-width: 768px) {\n  .time-box-left .show-time {\n    font-size: 10px;\n  }\n}\n.time-box-left .select-time {\n  display: none;\n  position: absolute;\n  top: 38px;\n  z-index: 1;\n  width: 100%;\n  height: auto;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n.time-box-left .select-time .triangle {\n  height: 8px;\n  top: -8px;\n}\n.time-box-left .select-time .time-top {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\n.time-box-left .select-time .time-top div:nth-child(2) {\n  border-left: 1px solid #F5F5F5;\n  border-right: 1px solid #F5F5F5;\n}\n.time-box-left .select-time .time-top .time-col {\n  float: left;\n  width: 33%;\n  padding: 10px 10px;\n}\n.time-box-left .select-time .time-top .time-col i,\n.time-box-left .select-time .time-top .time-col input,\n.time-box-left .select-time .time-top .time-col h5 {\n  display: block;\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.time-box-left .select-time .time-top .time-col i {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: #888888;\n  cursor: pointer;\n  padding: 3px 0;\n}\n.time-box-left .select-time .time-top .time-col i:link {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-top .time-col i:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-top .time-col i:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.time-box-left .select-time .time-top .time-col i:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n@media (min-width: 768px) {\n  .time-box-left .select-time .time-top .time-col h5 {\n    font-size: 16px;\n    font-weight: bold;\n    padding-bottom: 20px;\n  }\n}\n.time-box-left .select-time .time-top .time-col input {\n  border: none;\n  width: 100%;\n  text-align: center;\n  box-shadow: none;\n  color: #1F71E8;\n  font-weight: bold;\n  font-size: 15px;\n}\n.time-box-left .select-time .time-top .time-col input:focus {\n  border: 1px solid #467EAD;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-top .time-col input {\n    font-size: 11px;\n  }\n}\n.time-box-left .select-time .time-bottom {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-top: 1px solid #E1E4E7;\n}\n.time-box-left .select-time .time-bottom button {\n  padding: 6px 20px;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n.time-box-left .select-time .time-bottom button:link {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-bottom button:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.time-box-left .select-time .time-bottom button:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.time-box-left .select-time .time-bottom button:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.time-box-left .select-time .time-bottom .get-time {\n  float: left;\n  margin-left: 30px;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-bottom .get-time {\n    margin-left: 10px;\n    padding: 6px 10px;\n  }\n}\n.time-box-left .select-time .time-bottom .close-time {\n  float: right;\n  margin-right: 30px;\n}\n@media (max-width: 768px) {\n  .time-box-left .select-time .time-bottom .close-time {\n    margin-right: 10px;\n    padding: 6px 10px;\n  }\n}\n.start {\n  position: absolute;\n  top: 2px;\n  padding: 6px 8px;\n  cursor: pointer;\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .start {\n    right: -20px;\n  }\n}\n@media (max-width: 992px) {\n  .start {\n    right: 0;\n  }\n}\n@media (min-width: 992px) {\n  .start {\n    right: 10px;\n    padding: 4px 10px;\n  }\n}\n.start:hover {\n  background-color: #3082f9;\n}\n.start:active {\n  background-color: #1F71E8;\n}\n.start:hover {\n  background-color: #3082f9;\n}\n.start:active {\n  background-color: #1F71E8;\n}\n/* skill-box */\n.skill-box {\n  position: relative;\n  padding: 0;\n}\n.new-skill-box {\n  margin-top: 20px;\n}\n.skill-box-top {\n  width: 100%;\n}\n.skill-box-top .skill-show {\n  float: left;\n  width: 70%;\n  padding: 4px;\n  min-height: 112px;\n  border: 1px solid #E1E4E7;\n  border-radius: 4px;\n}\n.skill-box-top .skill-show span {\n  float: left;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n  padding: 4px;\n  margin-left: 4px;\n  margin-top: 4px;\n  cursor: pointer;\n}\n.skill-box-top .skill-show + div {\n  float: left;\n  width: 30%;\n  padding-left: 20px;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div {\n    padding-left: 6px;\n  }\n}\n.skill-box-top .skill-show + div .select-skill,\n.skill-box-top .skill-show + div #skill-people {\n  display: block;\n  padding: 5px;\n}\n.skill-box-top .skill-show + div .select-skill {\n  background-color: #4193ff;\n  color: #ffffff;\n  border: 0;\n  outline: none;\n  border-radius: 3px;\n  padding: 4px 20px;\n}\n.skill-box-top .skill-show + div .select-skill:hover {\n  background-color: #3082f9;\n}\n.skill-box-top .skill-show + div .select-skill:active {\n  background-color: #1F71E8;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div .select-skill {\n    padding: 5px 13px;\n  }\n}\n.skill-box-top .skill-show + div .skill-people {\n  margin-top: 14px;\n}\n@media (max-width: 768px) {\n  .skill-box-top .skill-show + div .skill-people {\n    padding: 4px;\n  }\n}\n.skill-box-top .skill-show + div .delete {\n  font-size: 22px;\n  margin-top: 14px;\n  display: block;\n  padding-left: 20px;\n  color: #888888;\n  cursor: pointer;\n}\n.skill-box-top .skill-show + div .delete:link {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.skill-box-top .skill-show + div .delete:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.skill-list {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 70%;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #E1E4E7;\n  box-shadow: 0 5px 20px rgba(0, 34, 77, 0.1);\n}\n@media (max-width: 768px) {\n  .skill-list {\n    width: 100%;\n  }\n}\n.skill-list .triangle {\n  top: -8px;\n}\n.skill-list ul,\n.skill-list li {\n  margin: 0;\n  padding: 4px 0;\n  cursor: pointer;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.skill-list .skill-ul-left li {\n  width: 25%;\n  height: auto;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border-right: 1px solid #F5F5F5;\n  overflow: hidden;\n}\n.skill-list .skill-ul-left li ul {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 25%;\n  width: 25%;\n}\n.skill-list .skill-ul-left li ul .triangle {\n  top: -8px;\n}\n.skill-list .skill-ul-left li ul li {\n  width: 100%;\n}\n.skill-list .skill-ul-left li ul li div {\n  display: none;\n  width: 200%;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  padding: 4px;\n}\n.skill-list .skill-ul-left li ul li div span {\n  position: relative;\n  font-size: 10px;\n  display: block;\n  float: left;\n  padding: 4px;\n  margin-right: 6px;\n  margin-top: 6px;\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .skill-list .skill-ul-left li ul li div span {\n    margin-right: 2px;\n    margin-top: 2px;\n    padding: 2px;\n  }\n}\n.skill-bottom {\n  border-top: 1px solid #F5F5F5;\n  padding: 14px 20px;\n}\n.skill-bottom button {\n  background-color: #ffffff;\n  border: 1px solid #E1E4E7;\n  outline: none;\n  border-radius: 3px;\n  padding: 6px 14px;\n}\n.skill-bottom button:link {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-bottom button:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.skill-bottom button:hover {\n  color: #222222;\n  text-decoration: none;\n  background-color: #F7F7F7;\n}\n.skill-bottom button:active {\n  color: #222222;\n  text-decoration: none;\n  background-color: #e6e6e6;\n}\n.skill-bottom .skill-sure {\n  float: left;\n}\n.skill-bottom .skill-cancle {\n  float: right;\n}\n.skill-active {\n  background-color: #63b5ff !important;\n  color: #ffffff;\n}\nbody,\nul,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nol,\nli,\np,\nform,\nfieldset,\ntable,\ntd,\nimg,\ndiv,\ndl,\ndt,\ndd,\ninput {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-size: 12px;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\nimg,\ninput {\n  border: none;\n}\nli {\n  list-style: none;\n}\ninput,\nselect,\ntextarea {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\na {\n  text-decoration: none;\n}\n/*登录注册*/\n#common-login,\n#common-register,\n#common-checkLogin,\n#common-forget {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 1000px;\n  z-index: 9999;\n  display: none;\n  background-color: #ffffff;\n}\n.tea-register,\n.stu-register,\n.tea-checkLogin,\n.stu-checkLogin {\n  position: relative;\n  z-index: 69999;\n  float: left;\n  width: 120px;\n  height: 80px;\n  margin-top: 20%;\n  margin-left: 50px;\n  line-height: 80px;\n  font-size: 20px;\n  border-radius: 5px;\n  text-align: center;\n  cursor: pointer;\n  background: #EEE;\n}\n.tea-register,\n.tea-checkLogin {\n  margin-left: 40%;\n}\n.lo-container,\n.re-container {\n  z-index: 99999;\n  position: relative;\n  width: 300px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px #CCC;\n  margin-top: 10%;\n  margin-left: 40%;\n  border: 1px solid #CCC;\n}\n.re-container {\n  display: none;\n}\n.out,\n.re-out,\n.forget-out,\n.forget-pwdOut {\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: bold;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #B3B3B3;\n}\n.out:hover,\n.re-out:hover,\n.forget-out:hover,\n.forget-pwdOut:hover {\n  background: #787878;\n}\nh1 {\n  margin: 10px 0 !important;\n  text-align: center;\n  font-weight: bold;\n  font-size: 20px !important;\n}\nh2 {\n  margin-bottom: 10px !important;\n  text-align: center;\n  font-size: 16px !important;\n  color: #888 !important;\n}\n#uname,\n#pwd,\n#re-uname,\n#re-pwd,\n#re-email {\n  width: 200px;\n}\n.div-uname,\n.div-pwd,\n.re-div-uname,\n.re-div-pwd,\n.re-div-email {\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.div-pwd,\n.re-div-pwd,\n.re-div-email {\n  border-top: none;\n}\n.img-validate,\n.re-img-validate {\n  line-height: 48px;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.img-validate input,\n.re-img-validate input {\n  height: 30px;\n  border: 1px solid #CCC;\n  text-indent: 6px;\n  width: 80px !important;\n}\n#canvas {\n  position: absolute;\n  left: 135px;\n  top: 170px;\n  width: 80px;\n  height: 40px;\n  margin: 4px 10px;\n  text-indent: 10px;\n  line-height: 40px;\n  color: red;\n  font-size: 20px;\n  background-color: black;\n}\n.reload {\n  position: absolute;\n  right: 12px;\n  display: inline-block;\n  height: 20px;\n  line-height: 20px;\n  margin-top: 4px;\n  text-indent: 2px;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #CCC;\n}\n.bt-login {\n  line-height: 36px;\n  color: #fff;\n  margin: 10px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #0077d9;\n}\n#remember {\n  margin-left: 10px;\n  margin-bottom: 16px;\n}\n.unlogin {\n  cursor: pointer;\n}\n.unlogin:hover {\n  color: red;\n}\n.register {\n  float: right;\n  margin-top: 0;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.p-login,\n.p-pwd,\n.p-uname,\n.p-validate {\n  position: absolute;\n  display: inline-block;\n  margin-left: -10px;\n  width: 90px;\n  height: 32px;\n  line-height: 16px;\n  color: red;\n}\n.p-login {\n  margin-left: 4px;\n  line-height: 18px;\n}\n.p-validate {\n  text-indent: -10px;\n  margin-left: 10px;\n  top: 196px;\n  left: 240px;\n}\n.p-uname {\n  top: 86px;\n}\n.p-pwd {\n  top: 134px;\n}\n#re-validate {\n  margin: 0 10px ;\n}\n.re-reload {\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  margin-top: 10px;\n  text-indent: 2px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.re-bt-register {\n  line-height: 36px;\n  color: #fff;\n  margin: 10px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #0077d9;\n}\n.re-unlogin {\n  margin-left: 10px;\n}\n.re-bt-login {\n  display: inline-block;\n  margin-bottom: 16px;\n  cursor: pointer;\n  color: #259;\n}\n.re-p-validate,\n.re-p-pwd,\n.re-p-uname,\n.re-p-email {\n  position: absolute;\n  display: inline-block;\n  margin-top: 2px;\n  margin-left: -1px;\n  width: 80px;\n  height: 32px;\n  line-height: 16px;\n  color: red;\n}\n.re-p-validate {\n  width: 50px;\n  margin-left: 5px;\n  text-indent: -4px;\n}\n.re-p-uname {\n  top: 82px;\n}\n.re-p-pwd {\n  top: 134px;\n}\n.re-p-email {\n  top: 180px;\n}\n.re-p-validate {\n  top: 226px;\n}\n.re-promot {\n  display: inline-block;\n  text-indent: 10px;\n  color: red;\n}\n.forget-validate,\n.forget-pwd {\n  width: 300px;\n  position: relative;\n  border-radius: 10px;\n  box-shadow: 0 0 10px #CCC;\n  margin-top: 10%;\n  margin-left: 40%;\n  border: 1px solid #CCC;\n}\n.forget-validate p,\n.forget-pwd p {\n  margin: 10px 0;\n  text-align: center;\n  font-size: 18px;\n}\n.forget-validate input,\n.forget-pwd input {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.forget-validate input input,\n.forget-pwd input input {\n  width: 50%;\n}\n.forget-validate .forget-getValidateDiv,\n.forget-pwd .forget-getValidateDiv {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  text-indent: 20px;\n}\n.forget-validate .forget-getValidateDiv input,\n.forget-pwd .forget-getValidateDiv input {\n  float: left;\n  width: 50%;\n  border-top: none;\n}\n.forget-validate .forget-getValidateDiv .forget-reload,\n.forget-pwd .forget-getValidateDiv .forget-reload {\n  width: 80px;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 4px;\n  margin-left: 40px;\n  text-indent: -2px;\n  border-radius: 5px;\n  text-align: center;\n}\n.forget-validate #forget-surePwd,\n.forget-pwd #forget-surePwd,\n.forget-validate #forget-email,\n.forget-pwd #forget-email {\n  border-top: none;\n}\n.forget-validate #forget-email,\n.forget-pwd #forget-email {\n  border-bottom: none;\n}\n.forget-validate .forget-pwdPromot,\n.forget-pwd .forget-pwdPromot,\n.forget-validate .forget-promot,\n.forget-pwd .forget-promot {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  margin: 5px 0;\n  color: red;\n}\n.forget-validate .forget-pwdBtn,\n.forget-pwd .forget-pwdBtn,\n.forget-validate .forget-btn,\n.forget-pwd .forget-btn {\n  width: 80px;\n  height: 30px;\n  margin-left: 36%;\n  margin-bottom: 5px;\n}\n.forget-pwd {\n  display: none;\n}\n.user-content {\n  padding: 0;\n  background-color: #ffffff;\n}\n.user-content .menu li {\n  font-size: 14px;\n  padding: 10px;\n  border-bottom: 1px solid #E1E4E7;\n  border-right: 1px solid #E1E4E7;\n  cursor: pointer;\n  font-weight: bold;\n}\n.user-content .content {\n  position: relative;\n  width: 100%;\n  min-height: 600px;\n}\n.user-content .content .message,\n.user-content .content .project-history,\n.user-content .content .information,\n.user-content .content .system {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n}\n.user-content .content .message {\n  display: none;\n}\n.user-content .content .message .receive h5,\n.user-content .content .message .send h5 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E1E4E7;\n  color: #52a4ff;\n}\n.user-content .content .message .receive .message-box,\n.user-content .content .message .send .message-box {\n  border-bottom: 1px solid #E1E4E7;\n  padding: 10px;\n}\n.user-content .content .message .receive .message-box .left,\n.user-content .content .message .send .message-box .left,\n.user-content .content .message .receive .message-box .right,\n.user-content .content .message .send .message-box .right {\n  float: left;\n  font-size: 14px;\n  padding-top: 10px;\n}\n.user-content .content .message .receive .message-box .left,\n.user-content .content .message .send .message-box .left {\n  width: 100px;\n  text-align: center;\n}\n.user-content .content .message .receive .message-box span,\n.user-content .content .message .send .message-box span {\n  float: right;\n  font-size: 12px;\n  line-height: 22px;\n}\n.user-content .content .message .receive .message-box span i,\n.user-content .content .message .send .message-box span i {\n  margin-left: 10px;\n}\n.user-content .content .message .receive .message-box .delete,\n.user-content .content .message .send .message-box .delete {\n  cursor: pointer;\n}\n.user-content .content .message .receive .message-box .delete:hover,\n.user-content .content .message .send .message-box .delete:hover {\n  color: #52a4ff;\n}\n.user-content .content .project-history h5 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E1E4E7;\n  color: #52a4ff;\n}\n.user-content .content .project-history ul li {\n  padding: 10px;\n  border-bottom: 1px solid #E1E4E7;\n}\n.user-content .content .project-history ul li a:link {\n  color: #888888;\n  text-decoration: none;\n}\n.user-content .content .project-history ul li a:visited {\n  color: #888888;\n  text-decoration: none;\n}\n.user-content .content .project-history ul li a:hover {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.user-content .content .project-history ul li a:active {\n  color: #1F71E8;\n  text-decoration: none;\n}\n.user-content .content .information {\n  display: none;\n}\n.user-content .content .information .no-information {\n  font-size: 16px;\n}\n.user-content .content .information .no-information p,\n.user-content .content .information .no-information div {\n  margin-top: 20px;\n}\n.user-content .content .information ul {\n  padding-top: 10px;\n  display: none;\n}\n.user-content .content .information ul li {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #E1E4E7;\n}\n.user-content .content .information ul li h5,\n.user-content .content .information ul li p {\n  float: left;\n  font-size: 16px;\n  line-height: 22px;\n}\n.user-content .content .information ul li h5 {\n  width: 100px;\n}\n.user-content .content .system {\n  display: none;\n}\n.user-content .content .system h5 {\n  color: red;\n  margin-top: 20px;\n}\n.active {\n  color: #52a4ff;\n}\n", ""]);

// exports


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = "<div class=\"common-width user\">\n  <div class=\"container clearfix\">\n    <div class=\"row user-content\">\n      <div class=\"col-xs-2\">\n        <ul class=\"menu\">\n          <li class=\"active\">消息中心</li>\n          <li>项目历史</li>\n          <li>个人资料</li>\n          <li>系统中心</li>\n        </ul>\n      </div>\n      <div class=\"col-xs-10\">\n        <div class=\"content\">\n          <div class=\"content-box message\">\n            <div class=\"receive\">\n              <h5>接收的消息</h5>\n              <ul>\n\n              </ul>\n            </div>\n            <div class=\"send\">\n              <h5>发送的消息</h5>\n              <ul>\n\n              </ul>\n            </div>\n          </div>\n          <div class=\"project-history content-box\">\n            <h5>发布过的项目</h5>\n            <ul>\n\n            </ul>\n          </div>\n          <div class=\"information content-box\">\n            <ul>\n              <li class=\"clearfix\">\n                <h5>用户名</h5>\n                <p class=\"s-username\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>性别</h5>\n                <p class=\"s-sex\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>学历</h5>\n                <p class=\"s-edu\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>学校</h5>\n                <p class=\"s-university\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>专业</h5>\n                <p class=\"s-major\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>入学时间</h5>\n                <p class=\"s-entry\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>毕业时间</h5>\n                <p class=\"s-leave\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>qq</h5>\n                <p class=\"s-qq\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>技能</h5>\n                <p class=\"s-skill\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>项目经验</h5>\n                <p class=\"s-exp\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>自我评价</h5>\n                <p class=\"s-self\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>等级</h5>\n                <p class=\"s-level\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>邮箱</h5>\n                <p class=\"s-email\">无</p>\n              </li>\n            </ul>\n            <ul>\n              <li class=\"clearfix\">\n                <h5>用户名</h5>\n                <p class=\"t-username\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>性别</h5>\n                <p class=\"t-sex\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>学校</h5>\n                <p class=\"t-university\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>学院</h5>\n                <p class=\"t-academy\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>职称</h5>\n                <p class=\"t-rank\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>qq</h5>\n                <p class=\"t-qq\">无</p>\n              </li>\n              <li class=\"clearfix\">\n                <h5>邮箱</h5>\n                <p class=\"t-email\">无</p>\n              </li>\n            </ul>\n          </div>\n          <div class=\"system content-box\">\n            <h5>敬请期待!</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(23, function() {
			var newContent = __webpack_require__(23);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
__webpack_require__(51);
const content_path = __webpack_require__(1);
var user_str = __webpack_require__(46);


(function($) {
	console.log(localStorage.weikeData)
	var weikeData = localStorage.weikeData ? JSON.parse(localStorage.weikeData) : false;
	var token = weikeData ? 'Bearer ' + weikeData.data.token : false;
	var toRegister = `<div><a target='_blank' href='register.html'></a></div>`;
	var noData = `<h5>暂无消息</h5>`
	//菜单切换
	var exchageMenu = {
		info: function() {
			$('header').after(user_str);
			var li = $('.menu').find('li');
			var contentBox = $('.content-box');
			for (var i = 0; i < li.length; i ++) {
				li.eq(i).attr('index', i);
				contentBox.eq(i).attr('index', i);
			}
		},
		change: function(index) {
			$('.menu').find('li').eq(index).addClass('active').siblings().removeClass('active');
			$('.content-box').eq(index).css('display', 'block').siblings().css('display', 'none');
		},
		action: function () {
			this.info();
			this.eventClick();
		},
		eventClick: function() {
			var that = this;
			$('body').on('click', '.menu', function(event) {
				var target = $(event.target);
				that.change(target.attr('index'));
			});
		}
	}

	//获取留言
	var getMessage = {
		get: function() {
			var url = content_path + 'Weike/messageList';
			$.ajax({
				type: "GET",
				url: url,
				beforeSend:function(request) {
					request.setRequestHeader("Authorization", token);
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
			var receive = $('.receive').find('ul'),
					send = $('.send').find('ul'),
					receiveData = data.fromMessages,
					sendData = data.toMessages;
			//发送的消息
			if (receiveData.length > 0) {
				for (var i = 0; i < receiveData.length; i ++) {
					var module = `<li class="message-box clearfix">
													<div class="clearfix">
														<div class="left">
															<p>${receiveData[i].fromName}</p>
														</div>
														<div class="right clearfix">
															<p>${receiveData[i].content}</p>
														</div>
													</div>
													<span data-id=${receiveData[i].id} class="delete"><i class="iconfont">&#xf0008;</i>删除</span>
													<span>${this.getTime(receiveData[i].createDate)}</span>
												</li>`
					receive.append(module);
				}
			} else {
				receive(noData);
			}
			//接收的消息
			if (sendData.length > 0) {
				for (var i = 0; i < sendData.length; i ++) {
					var module = `<li class="message-box clearfix">
													<div class="clearfix">
														<div class="left">
															<p>${sendData[i].fromName}</p>
														</div>
														<div class="right clearfix">
															<p>${sendData[i].content}</p>
														</div>
													</div>
													<span data-id=${sendData[i].id} class="delete"><i class="iconfont">&#xf0008;</i>删除</span>
													<span>${this.getTime(sendData[i].createDate)}</span>
												</li>`
					send.append(module);
				}
			} else {
				send.append(module);
			}
		},
		//处理时间戳
		getTime: function(data) {
			var date = new Date(data);
			Y = date.getFullYear() + '-';
			M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			D = date.getDate() + ' ';
			return Y + M + D;
		},
		//删除
		delete: function(data) {
			var url = content_path + '/WeiKe/deleteMessage';
			$.ajax({
				type: 'post',
				url: url,
				data: data,
				beforeSend: function(request) {
					request.setRequestHeader("Authorization", token);
				},
				success: function(response) {
					console.log(response);
				},
				error: function(err){
					console.log(err)
				}
			});
		},
		eventClick: function() {
			var that = this;
			$('body').on('click', '.message', function(event) {
				var target = $(event.target);
				if (target.attr('data-id')) {
					that.delete(arget.attr('data-id'));
				}
			});
		},
		action: function() {
			this.get();
			this.eventClick();
		}
	}
	//获取资料
	var getInformation = {
		info: function() {
			var information = $('.information');
			var noInformation = `<div class='no-information'>
															<p>您还没填写个人资料</p>
															<div>
																<a href="register.html" target="_blank">现在去填写</a>
															</div>
														</div>`
			if (!weikeData.data.isCompleted) {
				information.html(noInformation);
			} else {
				this.get();
			}
		},
		get: function() {
			var that = this;
			if (weikeData.data.role === 'ROLE_STUDENT') {
				$('.information ul').eq(0).css('display', 'block');
				var url = content_path + '/WeiKe/student/personalData';
			} else {
				$('.information ul').eq(1).css('display', 'block');
				var url = content_path + '/WeiKe/teacher/personalData';
			}
			$.ajax({
				type: "GET",
				url: url,
				beforeSend:function(request) {
					request.setRequestHeader("Authorization", token);
					request.setRequestHeader("Content-Type", 'application/json;charset=UTF-8');
				},
				success: function(response) {
					that.informtionToDom(response.data);
				},
				error: function(err){
					console.log(err)
				}
			});
		},
		informtionToDom: function(data) {
			localStorage.weikeUser = JSON.stringify(data);
			console.log(data)
			if (weikeData.data.role === 'ROLE_STUDENT') {
				//skill
				if (data.skill) {
					var skill = $('.s-skill');
					for (var i = 0; i < data.skill.length; i ++) {
						var span = `<span>${data.skill[i]}</span>`
						skill.apend(span);
					}
				}
				$('.s-username').html(data.username);
				$('.s-sex').html(data.sex);
				$('.s-edu').html(data.eduBackgroud);
				$('.s-university').html(data.university);
				$('.s-major').html(data.majorAndGrade);
				$('.s-entry').html(data.entryUniversity);
				$('.s-leave').html(data.leaveUniversity);
				$('.s-qq').html(data.qq);
				$('.s-skill').html(data.skills);
				$('.s-exp').html(data.experience);
				$('.s-self').html(data.selfFeel);
				$('.s-level').html(data.level);
				$('.s-email').html(data.email);
			} else {
				$('.t-username').html(data.username);
				$('.t-sex').html(data.sex);
				$('.t-university').html(data.university);
				$('.t-academy').html(data.academy);
				$('.t-rank').html(data.rank);
				$('.t-qq').html(data.qq);
				$('.t-email').html(data.email);
			}
		}
	}
	//获取项目
	var getProject= {
		getProject: function() {
			var that = this;
			if (weikeData.data.role === 'ROLE_STUDENT') {
				var url = content_path + '/WeiKe/student/allProject';
			} else {
				var url = content_path + '/WeiKe/teacher/allProject';
			}
			$.ajax({
				type: "GET",
				url: url,
				beforeSend:function(request) {
					request.setRequestHeader("Authorization", token);
					request.setRequestHeader("Content-Type", 'application/json;charset=UTF-8');
				},
				success: function(response) {
					that.projectToDom(response.data);
				},
				error: function(err){
					console.log(err)
				}
			});
		},
		projectToDom: function(data) {
			var projectHistory = $('project-history').find('ul');
			if (data.length > 0) {
				for (var i = 0; i < data.length; i ++ ) {
					var module = `<li>
													<a href="details.html?projectName=${data[i]}" target='_blank'>da</a>
												</li>`
					projectHistory.append(module);
				}
			} else {
				projectHistory.append(noData);
			}
		}
	}
 	exchageMenu.action();
	getInformation.info();
	getProject.getProject();

})(jQuery);


/***/ })

},[68]);