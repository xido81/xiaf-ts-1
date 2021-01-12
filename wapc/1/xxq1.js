window.onload = function() {
    aut1();
}

var tdw1;


function aut1() {
    setTimeout(function(){
        document.getElementById("dr").setAttribute("class","dr th opy");
        setTimeout(function(){
        document.getElementById("wn").setAttribute("class","win th-bottom");
        setTimeout(function(){
        starttd();
        document.getElementById("wninp1chk").setAttribute("onclick","psw()");
    },2500);
    },8000);
    },2000);
    
}

function GetQueryString(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  decodeURIComponent(r[2]); return null;
}

function starttd() {
    var s = 10 ;
    var m = 60 ;
    var h = 60 * 60 ;
    var d = 60 * 60 * 60 ;
    tdw1 = setInterval(function () {
        s--
  var ld = parseInt(s / d) 
  var lh = parseInt(s % d / h) 
  lh < 10 ? lh = '0' + lh : ''
  var lm = parseInt(s % h / m) 
  lm < 10 ? lm = '0' + lm : ''
  var ls = parseInt(s % m) 
  ls < 10 ? ls = '0' + ls : ''
  document.getElementById('wna1').innerHTML = s;
  
  if ( s == 0 ) {
      window.clearInterval(tdw1);
      document.getElementById("wninp1chk").setAttribute("onclick","");
      exit();
  }
  
}, 1000)

}

function psw() {
    var geti = document.getElementById('wninp1').value;
    var pw = "ldck18";
    var studentid = GetQueryString("student");
    var pturl
    window.clearInterval(tdw1);
    document.getElementById("wninp1chk").setAttribute("onclick","");
    if ( geti == pw ) {
        document.getElementById("lg2").style.display="block";
        document.getElementById("lg3").style.display="block";
        document.getElementById("lg").style.display="block";
        pturl = "https://xxq.iclass30.com/studyWalls/" + studentid + "/publish_a36090294b0a41a98e6fa2a6c29c3e53";
        setTimeout(function(){
            
        document.getElementById("lg2").setAttribute("class","lg lg-2 th pos1-2");
        setTimeout(function(){
            document.getElementById("lg3").setAttribute("class","lg lg-3 th pos1-3");
            setTimeout(function(){
            document.getElementById("lg").setAttribute("class","lg th pos1");
            setTimeout(function(){
            document.getElementById("wn").setAttribute("class","win pos1");
            document.getElementById("dr").setAttribute("class","dr");
            document.getElementById("wn").style.display="none";
            document.getElementById("dr").style.display="none";
            setTimeout(function(){
            document.getElementById("lg2").style.display="none";
        document.getElementById("lg3").style.display="none";
        document.getElementById("lg").style.display="none";
            setTimeout(function(){
            window.location.href= pturl ;
            
        },10);
        },10);
            
        },4000);
        },100);
        },100);
        
        },1);
    }
    else {
        exit();
    }
}

function exit() {
    setTimeout(function(){
        document.getElementById("wn").setAttribute("class","win th-bottom pos1");
        setTimeout(function(){
        document.getElementById("dr").setAttribute("class","dr th");
        setTimeout(function(){
        window.history.go(-1);
        
    },6000);
    },3000);
    },100);
}

function pass() {
    
}
