!function(){var t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),e=document.querySelector("body");function n(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}var a=null;t.addEventListener("click",(function(){t.disabled=!0,o.disabled=!1,n(),console.log("start"),a=setInterval((function(){n(),console.log("Go!")}),1e3)})),o.addEventListener("click",(function(){o.disabled=!0,clearInterval(a),t.disabled=!1,console.log("Interval with id ".concat(a," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.9c663cf9.js.map
