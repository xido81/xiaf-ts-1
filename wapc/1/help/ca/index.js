location.href="javascript:anst1()";

/*var u = navigator.userAgent, app = navigator.appVersion;

var isXiaomi = u.indexOf('XiaoMi') > -1; // 小米手机

var isAn = u.indexOf('Android 9') > -1;
var isAn2 = u.indexOf('Android 2') > -1;

var isXiaomin = u.indexOf('MiuiBrowser') > -1; // 小米手机内核



if (isAn) {
    location.href="javascript:bouns2()";
}

else if (isAn2) {
    location.href="javascript:bouns2()";
}

else if (isXiaomi) {
    location.href="javascript:bouns()";
}
else if (isXiaomin) {
    location.href="javascript:bouns()";
}*/

/*setInterval(function() {
    //alert("1");
                  if(i2 < 15000) {
                 	  i2++;
                     var x=document.getElementById("bouii");
	var y=(x.contentWindow || x.contentDocument);
	
	if (y.document)y=y.document;{
	    var co1 = y.cok1.value;
	    var cotr = 1;
	    if (co1 == cotr) {
	        location.href="javascript:bouoff()";
	    }
	}
	
                     
                  }
               }, 50);*/
               

               
function anst1() {
    
    var u = navigator.userAgent, app = navigator.appVersion;

var isXiaomi = u.indexOf('XiaoMi') > -1; // 小米手机

var isAn = u.indexOf('Android 1') > -1;
var isAn2 = u.indexOf('Android 2') > -1;

var isXiaomin = u.indexOf('MiuiBrowser') > -1; // 小米手机内核



if (isAn) {
    location.href="javascript:bouns2()";
}

else if (isAn2) {
    location.href="javascript:bouns2()";
}

else if (isXiaomi) {
    location.href="javascript:bouns()";
}
else if (isXiaomin) {
    location.href="javascript:bouns()";
}
}
               
function hep1x() {
    document.getElementById("he1").className="dy3 ck";
    document.getElementById("he2").className="dy1";
    document.getElementById("pa2").style.display="none";
    document.getElementById("pa1").style.display="block";
}

function hep2x() {
    document.getElementById("he1").className="dy3";
    document.getElementById("he2").className="dy1 ck";
    document.getElementById("pa1").style.display="none";
    document.getElementById("pa2").style.display="block";
}

function bouns() {
    document.getElementById("boun").style.display="block";
}

function bouns2() {
    document.getElementById("boun2").style.display="block";
}

function nh() {
    var u2 = navigator.userAgent, app = navigator.appVersion;
    alert((u2));
    document.getElementById("al").innerHTML=(u2);
}
/*
function hpsalo() {
  var mag2 = 0 ;
  var mag1nk = document.getElementById("hplob").offsetWidth;
  var ise2 = setInterval(frame2, 30);
  document.getElementById("hplob").style.display="block";
  function frame2() {
    if (mag2 >= 760) {
      clearInterval(ise2);
      
    } else {
      mag2++; 
      hplob.style.width = mag2 + 'px'; 
    }
}
}

function hpfnlo() {
  var mag1nk = 5 ;
  var mag1 = document.getElementById("hplob").offsetWidth;
  var ise1 = setInterval(frame1, 1);
  document.getElementById("hplob").style.display="block";
  function frame1() {
    if (mag1 >= 780) {
      clearInterval(ise1);
      document.getElementById("hplob").style.display="none";
      
    } else {
      mag1++; 
      hplob.style.width = mag1 + 'px'; 
    }
}
}*/

function nobackh()  
    {  
        var docElm = document.documentElement;  
        //W3C   
        if (docElm.requestFullscreen) {  
            docElm.requestFullscreen();  
        }  
            //FireFox   
        else if (docElm.mozRequestFullScreen) {  
            docElm.mozRequestFullScreen();  
        }  
            //Chrome等   
        else if (docElm.webkitRequestFullScreen) {  
            docElm.webkitRequestFullScreen();  
        }  
            //IE11   
        else if (elem.msRequestFullscreen) {  
            elem.msRequestFullscreen();  
        }  
    }

function noback() {
    //location.href="javascript:titlebug()";
	history.pushState(null, null, document.URL);
	window.addEventListener('popstate', function() {
		history.pushState(null, null, document.URL);
	});
	document.oncontextmenu = function () {
	    return false;
	}
	//var i = 0;
    /*setInterval(function() {
                  if(i < 10000) {
                 	  i++;
                      
//if ( event.keyCode==116) 
//{
event.keyCode = 0; 
event.cancelBubble = true; 
return false; 
//} 
        }
                  },0);*/
	
}

/*function titlebug() {
    /*var i3 = 0;
    setInterval(function() {
        if(i3 > 100) {
            i3++;
            var i3 = 0;
            setInterval(function() {
                setInterval(function() {
                document.getElementById("titlex").innerHTML="小家福-帮助"
                setInterval(function() {
                document.getElementById("titlex").innerHTML="小家福6帮助"
            },60);
            },60);
            },60);
        };
    },200);
    setInterval(function() {
        document.getElementById("titlex").innerHTML="小家福-帮助"
    setInterval(function() {
        document.getElementById("titlex").innerHTML="小家福6帮助"
    setInterval(function() {
        document.getElementById("titlex").innerHTML="小家福_b助"
        setInterval(function() {
        document.getElementById("titlex").innerHTML="小4福=@助"
        setInterval(function() {
        document.getElementById("titlex").innerHTML="小家福+44"
    },60);
    },60);
    },60);
    },60);
    },60);
}*/

function bouon() {
    document.getElementById("bousof").style.display="none";
    document.getElementById("bouson").style.display="block";
    window.frames["boui"].location="bo/st1.html";
}

function bouoff() {
    document.getElementById("bouson").style.display="none";
    document.getElementById("bousof").style.display="block";
    window.frames["boui"].location="bo/off.html";
}

function bouoff() {
    document.getElementById("bouson").style.display="none";
    document.getElementById("bousof").style.display="block";
    window.frames["boui"].location="bo/off.html";
}

function hpex() {
    document.getElementById("pa2-h").style.display="none";
    window.frames["ihp"].location="";
}

function hpdisoff() {
    document.getElementById("hpdson").style.display="none";
    document.getElementById("hpdsof").style.display="block";
    document.getElementById("hpi").style.display="none";
}

function hpdison() {
    document.getElementById("hpdsof").style.display="none";
    document.getElementById("hpdson").style.display="block";
    document.getElementById("hpi").style.display="block";
}

function baiduseu() {
    document.getElementById("pa2-h").style.display="block";
}

function baiduhttp() {
    document.getElementById("pa2-h").style.display="block";
    window.frames["ihp"].location="http://www.baidu.com";
    document.getElementById("hpt3dv1a1").innerHTML="https://www.baidu.com/";
}

function fxme1x1l1() {
    
    location.href="javascript:fxme1x1()";
}

function fxme1x1() {
    document.getElementById("me1x1").className="dy1-ck";
    document.getElementById("me1x2").className="dy1";
    document.getElementById("me1x2xd").style.display="none";
    document.getElementById("me1x1xd").style.display="block";
    document.getElementById("loxa1").style.display="none";
}

function fxme1x2l1() {
    
    location.href="javascript:fxme1x2()";
}

function fxme1x2() {
    
    document.getElementById("me1x2").className="dy1-ck";
    document.getElementById("me1x1").className="dy1";
    document.getElementById("me1x1xd").style.display="none";
    document.getElementById("me1x2xd").style.display="block";
    document.getElementById("loxa1").style.display="none";
}

/*window.onclick = function(event) {
    
    if (event.target == hpi) {
        document.getElementById("hpt3dv1a1").style.display="block";
        document.getElementById("hpt3inp").style.display="none";
    }
    else {
        
    }
    setTimeout(function(){
        var k="";
    var pinv=document.getElementById("hpt3inp").value;
    
    
    },500);
    
}*/

function hpt3dvcl() {
    var txt1 = document.getElementById("hpt3dv1a1").innerText;
    document.getElementById("hpt3inp").value=(txt1);
    document.getElementById("hpt3dv1a1").style.display="none";
    document.getElementById("hpt3inp").style.display="block";
    document.getElementById("hpt3inp").focus();
    document.getElementById("hpt4").style.display="none";
    document.getElementById("hpt4o").style.display="block";
    document.getElementById("hpt5").style.display="none";
    document.getElementById("hpt5o").style.display="block";
}

function hpblk() {
    //window.frames["ihp"].history.back;
    document.getElementById("hpi").contentWindow.history.back;
}

function hpt3inpcal() {
    document.getElementById("hpt3dv1a1").style.display="block";
    document.getElementById("hpt3inp").style.display="none";
    document.getElementById("hpt4").style.display="block";
    document.getElementById("hpt4o").style.display="none";
    document.getElementById("hpt5").style.display="block";
    document.getElementById("hpt5o").style.display="none";
}

function hpt3inpsub() {
    /*var reg = /(((https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/ig;
    var text = document.getElementById("hpt3inp").value;
    if( text.replace(reg) ) {
        alert("5");
    }*/
    var str = document.getElementById("hpt3inp").value;
    if(str.indexOf("http://") !== -1){
        window.frames["ihp"].location=(str);
        document.getElementById("hpt3dv1a1").innerHTML=(str);
        document.getElementById("hpt3dv1a1").style.display="block";
    document.getElementById("hpt3inp").style.display="none";
    document.getElementById("hpt4").style.display="block";
    document.getElementById("hpt4o").style.display="none";
    document.getElementById("hpt5").style.display="block";
    document.getElementById("hpt5o").style.display="none";
    }
    else if(str.indexOf("https://") !== -1) {
        window.frames["ihp"].location=(str);
        document.getElementById("hpt3dv1a1").innerHTML=(str);
        document.getElementById("hpt3dv1a1").style.display="block";
    document.getElementById("hpt3inp").style.display="none";
    document.getElementById("hpt4").style.display="block";
    document.getElementById("hpt4o").style.display="none";
    document.getElementById("hpt5").style.display="block";
    document.getElementById("hpt5o").style.display="none";
    }
    else if(str.indexOf("file://") !== -1) {
        alert("j");
    }
}


/*

$(document).ready(function(){
  $("button").click(function(){
    var div=$("div");  
    div.animate({left:'100px'},"slow");
    div.animate({fontSize:'3em'},"slow");
  });
});

*/