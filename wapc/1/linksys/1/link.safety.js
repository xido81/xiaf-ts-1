var f="false";
var t="true";
function detectionsafe() {
    var inpvr4 = document.getElementById("vari4").value;
    if ( inpvr4 == t ) {
        document.getElementById("sf").style.display="block";
        document.getElementById("sfdv1").style.display="block";
    }
    else {
        dsafeg2();
    }
}

function dsafeg2() {
    var inpvr6 = document.getElementById("vari6").value;
    if ( inpvr6 == t ) {
        document.getElementById("sf").style.display="block";
        document.getElementById("sfdv2").style.display="block";
        document.getElementById("sfdv2a1a1").innerHTML="3";
        setTimeout(function(){
        document.getElementById("sfdv2a1a1").innerHTML -- ;
        setTimeout(function(){
        document.getElementById("sfdv2a1a1").innerHTML -- ;
        setTimeout(function(){
        document.getElementById("sfdv2a1a1").innerHTML="";
        document.getElementById("sfdv2a1a2").innerHTML="请进行验证";
        captcha1.show();
        },1000);
        },1000);
        },1000);
    }
    else {
        dsafeg3();
    }
}

function dsafeg2g2() {
    document.getElementById("sfdv2a1a2").innerHTML="验证成功";
    setTimeout(function(){
        document.getElementById("sf").style.display="none";
        document.getElementById("sfdv2").style.display="none";
        dsafeg3();
    },1500);
}

function dsafeg3() {
    var inpvr5 = document.getElementById("vari5").value;
    if ( inpvr5 == f ) {
        dsafefin();
    }
    else {
        document.getElementById("sf").style.display="block";
        document.getElementById("sfdv3").style.display="block";
        document.getElementById("sfdv3inp2").addEventListener("click", dsafeg3g2);
    }
}

function dsafeg3g2() {
    var inp = document.getElementById("sfdv3inp1").value;
    var inpvr5 = document.getElementById("vari5").value;
    var vod = "";
    var er = "2065";
    if ( inp == inpvr5 ) {
        document.getElementById("sfdv3inp2").removeEventListener("click", dsafeg3g2);
        var rdn = GetRandom(0,999);
        var rdn2 = GetRandom(0,999);
        var rdn3 = GetRandom(0,99999);
        var rdn4 = GetRandom(0,99999);
        var rdn5 = GetRandom(0,99999999);
        var rdn6 = GetRandom(0,99999999);
        var rdn7 = GetRandom(0,99999999);
        var rdn8 = GetRandom(0,99999999);
        document.getElementById("sfdv3inp1").value="" + rdn + rdn2 + rdn3 + rdn4 + rdn5 + rdn6 + rdn7 + rdn8 ;
        document.getElementById("sf").style.display="none";
        document.getElementById("sfdv3").style.display="none";
        dsafefin();
    }
    else if ( inp == er ) {
        document.getElementById("sfdv3inp2").removeEventListener("click", dsafeg3g2);
        document.getElementById("sfdv3inp1").setAttribute("class","gin2 inp1 red");
        document.getElementById("sfdv3inp1").value="ERROR";
        er2537(2266666655555);
        setTimeout(function(){
            window.navigator.vibrate(20650);
            setTimeout(function(){
            window.navigator.vibrate(20650);
        },9325);
        },5000);
    }
    else if ( inp == vod ) {
        document.getElementById("sfdv3inp2").removeEventListener("click", dsafeg3g2);
        dsafeg3g2g2();
        document.getElementById("sfdv3inp1").value="密码不能为空";
        setTimeout(function(){
        document.getElementById("sfdv3inp1").value= inp ;
        },420);
    }
    else {
        document.getElementById("sfdv3inp2").removeEventListener("click", dsafeg3g2);
        dsafeg3g2g2();
        document.getElementById("sfdv3inp1").value="密码错误";
        setTimeout(function(){
        document.getElementById("sfdv3inp1").value= inp ;
        },420);
    }
}
function dsafeg3g2g2() {
    window.navigator.vibrate(300);
    document.getElementById("sfdv3inp1").setAttribute("type","text");
    document.getElementById("sfdv3inp1").setAttribute("class","gin2 inp1 red tr");
    setTimeout(function(){
        document.getElementById("sfdv3inp1").setAttribute("class","gin2 inp1 red tr posi");
        setTimeout(function(){
        document.getElementById("sfdv3inp1").setAttribute("class","gin2 inp1 red tr posi2");
        setTimeout(function(){
        document.getElementById("sfdv3inp1").setAttribute("class","gin2 inp1 red tr posi3");
        setTimeout(function(){
        document.getElementById("sfdv3inp1").setAttribute("class","gin2 inp1 red tr posi4");
        setTimeout(function(){
        document.getElementById("sfdv3inp1").setAttribute("class","gin2 inp1 tr");
        setTimeout(function(){
            document.getElementById("sfdv3inp1").setAttribute("class","gin2 inp1");
        document.getElementById("sfdv3inp1").setAttribute("type","password");
        document.getElementById("sfdv3inp2").addEventListener("click", dsafeg3g2);
    },1);
    },100);
    },100);
    },100);
    },100);
    },1);
    
}

function dsafefin() {
    document.getElementById("ldia2").innerHTML="跳转中...";
    setTimeout(function() {
        loadlink();
    },1000);
}