(window["webpackJsonpbeat-machine"]=window["webpackJsonpbeat-machine"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),o=a.n(r),c=(a(9),a(3)),i=(a(10),function(e){var t=e.id,a=e.letter,r=e.src,o=e.handleDisplay,c=s.a.createRef();Object(n.useEffect)((function(){return document.addEventListener("keydown",i),function(){return document.removeEventListener("keydown",i)}}));var i=function(e){e.keyCode===a.charCodeAt()&&(c.current.play(),o(t))};return s.a.createElement("div",{className:"drum-pad",id:t,onClick:function(){c.current.play(),o(t)}},s.a.createElement("p",{className:"letter"},a),s.a.createElement("audio",{ref:c,id:a,src:r}))}),d=[{id:"snare",letter:"Q",src:"https://www.myinstants.com/media/sounds/snare.mp3"},{id:"bass boost",letter:"W",src:"https://www.myinstants.com/media/sounds/bass-boost_oJjgiYr.mp3"},{id:"bass kick",letter:"E",src:"http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Kick%20Sample%203-888-Free-Loops.com.mp3"},{id:"tom-tom",letter:"A",src:"http://www.denhaku.com/r_box/linn/midtom.wav"},{id:"shotgun reload",letter:"S",src:"http://david.guerrero.free.fr/Effects/ShotgunReload.wav"},{id:"cymbal",letter:"D",src:"https://www.myinstants.com/media/sounds/vdub1-crash-18.mp3"},{id:"closed hi-hat",letter:"Z",src:"https://www.myinstants.com/media/sounds/behemoth-closed-26_4fwxFnC.mp3"},{id:"clap",letter:"X",src:"https://www.myinstants.com/media/sounds/clap.mp3"},{id:"open hi-hat",letter:"C",src:"https://www.myinstants.com/media/sounds/vdub1-op-hihat-010_5elr79H.mp3"}],m=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],o=function(e){r(e)};return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"drum-machine"},s.a.createElement("div",{className:"display"},s.a.createElement("p",{className:"sound-name"},a)),s.a.createElement("div",{className:"drum-pads"},d.map((function(e){return s.a.createElement(i,{key:e.id,id:e.id,letter:e.letter,src:e.src,handleDisplay:o})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.8ccb09b2.chunk.js.map