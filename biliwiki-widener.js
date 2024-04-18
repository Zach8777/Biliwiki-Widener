// ==UserScript==
// @name         bilibili wiki扩宽
// @namespace    https://github.com/Zach8777/Biliwiki-Widener
// @version      0.1
// @description  Widen the main component of Bilibili Wiki for high resolution screens.
// @author       Zach8777
// @match        https://wiki.biligame.com/*
// @icon         https://static.hdslb.com/images/favicon.ico
// @grant        GM_addStyle
// @grant        GM_log
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    GM_addStyle(".game-bg.container { width: 90%}");
    GM_addStyle(".mw-body.container { width: 90%}");
    GM_addStyle(".bui-sns-info { margin-left: 90%!important;;}")

})();