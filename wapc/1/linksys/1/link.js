function aut2() {
    var f="false";
    var t="true";
    var inpvr1 = document.getElementById("vari1").value;
    var inpvr3 = document.getElementById("vari3").value;
    setTimeout(function(){
        if ( inpvr1 == f ) {
            document.getElementById("ldia2").innerHTML="没有链接可以跳转";
            setTimeout(function(){
            window.history.go(-1);
            },500);
        }
        else if ( inpvr1 == t ) {
        var n0="0";
        var n1="1";
        var n2="2";
        if( inpvr3 == n2 ) {
            chosemode();
        }
        else {
            detectionsafe();
        }
        }
    },1000);
}

function chosemode() {
    var dv = document.getElementById("cevr1").value;
    if ( dv == 0 ) {
        cedropen();
    }
    document.getElementById("cevr4").value="1";
    document.getElementById("cevr3").value="1";
    
    setTimeout(function(){
        document.getElementById("cme").style.display="block";
        setTimeout(function(){
        cetest4();
        setTimeout(function(){
        cedrclose();
        
        setTimeout(function(){
            
        document.getElementById("ceeb7b6b1").setAttribute("class","ebbbb1 tr");
    setTimeout(function(){
        document.getElementById("ceeb7b6b1").setAttribute("class","ebbbb1 tr ro");
        document.getElementById("ceeb7b6b1b1pla1").style.display="none";
        document.getElementById("ceeb7b6b1b1pldv1").style.display="block";
        setTimeout(function(){
        document.getElementById("ceeb7b6b1b1pldc").style.display="block";
    },2510);
    },1000);
        
    },900);
        
    },1300);
    },200);
    },800);
}

function chosemodeg1() {
    document.getElementById("vari3").value="1";
    chosemodeg3();
}
function chosemodeg2() {
    document.getElementById("vari3").value="0";
    chosemodeg3();
}

function chosemodeg3() {
    document.getElementById("ceeb7b6b1b1pla1").style.display="block";
        document.getElementById("ceeb7b6b1b1pldv1").style.display="none";
    document.getElementById("ceeb7b6b1b1pldc").style.display="none";
    document.getElementById("ceeb7b6b1").setAttribute("class","ebbbb1 tr");
    setTimeout(function(){
        
        var dv = document.getElementById("cevr1").value;
    if ( dv == 0 ) {
        cedropen();
    }
    document.getElementById("cevr4").value="1";
    document.getElementById("cevr3").value="1";
    setTimeout(function(){
        cetest1();
        setTimeout(function(){
        document.getElementById("cme").style.display="none";
        detectionsafe();
    },5000);
    },1300);
        
    },3000);
}

function loadlink() {
    var f="false";
    var t="true";
    document.getElementById("ldia2").innerHTML="跳转中...";
    var inpvr2 = document.getElementById("vari2").value;
    var inpvr3 = document.getElementById("vari3").value;
    
    var pattern = /[h][t][t][p][:][/][/]|[h][t][t][p][s][:][/][/]/;
	strp = pattern.test(inpvr2);
	if ( !strp ) {
	    document.getElementById("vari2").value= "http://" + inpvr2 ;
	}
	
	inpvr2 = document.getElementById("vari2").value;
    if ( inpvr3 == 0 ) {
        window.location.href= inpvr2 ;
    }
    else if ( inpvr3 == 1 ) {
        document.getElementById("ifa").style.display="block";
        document.getElementById("ldbak").setAttribute("class","loadbak anm");
        window.frames["ifahp"].location= inpvr2 ;
        loadlinkg2();
    }
}

function loadlinkg2() {
    setTimeout(function(){
        tips1();
    },1000);
}

function tips1() {
    document.getElementById("ifatip").setAttribute("class","tips ti1");
    document.getElementById("ifatip").style.display="block";
    setTimeout(function(){
    document.getElementById("ifatip").setAttribute("class","tips ti1 tr");
    document.getElementById("ifatip").setAttribute("class","tips ti1 tr opy");
    document.getElementById("ifatip").addEventListener("click", tips1g2);
    },1);
    //document.getElementById("myBtn").addEventListener("click", displayDate);
}
function tips1g2() {
    document.getElementById("ifatip").removeEventListener("click", tips1g2);
    document.getElementById("ifabar").setAttribute("class","bar hv");
    document.getElementById("ifatip").addEventListener("click", tips1g3);
}
function tips1g3() {
    document.getElementById("ifatip").removeEventListener("click", tips1g3);
    document.getElementById("ifabar").setAttribute("class","bar");
    document.getElementById("ifatip").setAttribute("class","tips ti1 tr");
    setTimeout(function(){
    document.getElementById("ifatip").setAttribute("class","tips");
    document.getElementById("ifatip").style.display="none";
    },1000);
}

function aut3() {
    $("#sfdv3inp1").keydown(function(event){ 
        var ew = event.which ;
        if ( ew == 13 ) {
            $("#sfdv3inp2").click();
        }
    });
}