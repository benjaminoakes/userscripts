// ==UserScript==
// @name         Disable Dynamic Favicon
// @namespace    http://benjaminoakes.com/
// @version      0.3
// @description  No longer show a new message indicator
// @author       Benjamin Oakes
// @match        https://*.slack.com/*
// @match        https://*.pivotaltracker.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var plainFaviconHref = `https://${location.host}/favicon.ico`;

    function resetFavicon() {
      var icon = document.querySelector("link[rel*='icon']");
      if (icon.href != plainFaviconHref) {
        icon.href = plainFaviconHref;
      }
    }

    setInterval(resetFavicon, 2000)
})();
