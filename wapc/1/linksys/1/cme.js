function ceauta() {
    ceaut1();
    ceaut2();
    ceaut3();
    startTime();
}

function cetest1() {
    document.getElementById("cmebdb").setAttribute("class","cmeb trc1");
    document.getElementById("cmebb").setAttribute("class","ebb trc1");
    
}

function cetest2() {
    document.getElementById("ceeb6b1").setAttribute("class","ebb1 trcc1");
    document.getElementById("ceeb6b2").setAttribute("class","ebb2 trcc2");
}

function cetest3() {
    document.getElementById("ceeb6b1").setAttribute("class","ebb1 trcc3");
    document.getElementById("ceeb6b2").setAttribute("class","ebb2 trcc4");
}

function cetest4() {
    document.getElementById("cmebdb").setAttribute("class","cmeb trc2");
    document.getElementById("cmebb").setAttribute("class","ebb trc2");
}

function cetest5() {
    document.getElementById("cmebra").setAttribute("class","bgrba tr");
    setTimeout(function(){
        document.getElementById("cmebra").setAttribute("class","bgrba opanone tr");
        setTimeout(function(){
        document.getElementById("cmebra").setAttribute("class","bgrba opanone");
    },1250);
    },1200);
}

function cedrclose() {
    document.getElementById("cevr1").value="0";
    cetest3();
    document.getElementById("cevr2").value="1";
    setTimeout(function(){
        document.getElementById("cevr2").value="0";
    },550);
}
function cedropen() {
    document.getElementById("cevr1").value="1";
    cetest2();
    document.getElementById("cevr2").value="1";
    setTimeout(function(){
        document.getElementById("cevr2").value="0";
    },550);
}

function ceex() {
    var dv = document.getElementById("cevr1").value;
    document.getElementById("ceeb8").style.display="block";
    if ( dv == 0 ) {
        cedropen();
    }
    document.getElementById("cevr4").value="1";
    document.getElementById("cevr3").value="1";
    setTimeout(function(){
        cetest1();
        setTimeout(function(){
        document.getElementById("cme").style.display="none";
        document.getElementById("ceeb8").style.display="none";
    },5000);
    },1300);
}

function ceit() {
    var dv = document.getElementById("cevr1").value;
    document.getElementById("ceeb8").style.display="block";
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
        document.getElementById("cevr4").value="0";
        document.getElementById("cevr3").value="0";
        cedrclose();
        document.getElementById("ceeb8").style.display="none";
    },1300);
    },200);
    },800);
}

var cestin1var1
var ttt


function startTime(){
            var today=new Date();
            var h=today.getHours();
            var m=today.getMinutes();
            var s=today.getSeconds();
            m=checkTime(m);
            s=checkTime(s);
            document.getElementById('ceeb7b4a1').innerHTML=h+":"+m+":"+s;
            ttt=setTimeout(function(){startTime()},200);
        }
        function checkTime(i){
            if (i < 10){
                i="0" + i;
            }
            return i
        }


function cepanlop() {
    document.getElementById("ceeb7b7").disabled=true;
    document.getElementById("ceeb7b6b1").setAttribute("class","ebbbb1 tr");
    setTimeout(function(){
        document.getElementById("ceeb7b6b1").setAttribute("class","ebbbb1 tr ro");
        setTimeout(function(){
        document.getElementById("ceeb7b6b1b1pldc").style.display="block";
    },2510);
    },1000);
}
function cepanlcl() {
    document.getElementById("ceeb7b6b1b1pldc").style.display="none";
    document.getElementById("ceeb7b6b1").setAttribute("class","ebbbb1 tr");
    setTimeout(function(){
        document.getElementById("ceeb7b7").disabled=false;
    },1500);
}

function cestin1() {
    document.getElementById("ceeb7b5bu1a1").style.display="none";
    document.getElementById("ceeb7b5bu1").setAttribute("class","ebbbb6");
    document.getElementById("ceeb7b5bu1").setAttribute("onclick","");
    document.getElementById("ceeb7b5bu1d1").style.display="block";
    
    document.getElementById("ceeb7b5bu1d1d1").setAttribute("class","dd1 posi1");
            document.getElementById("ceeb7b5bu1d1d3").setAttribute("class","dd3 posi3");
            setTimeout(function() {
                document.getElementById("ceeb7b5bu1d1d1").setAttribute("class","dd1");
                document.getElementById("ceeb7b5bu1d1d3").setAttribute("class","dd3");
            },600);
            
            setTimeout(function() {
                document.getElementById("ceeb7b5bu1d1d2").setAttribute("class","dd2 posi2");
                setTimeout(function() {
                document.getElementById("ceeb7b5bu1d1d2").setAttribute("class","dd2");
                
            },600);
            },500);
    
    cestin1g1();
    //执行设置//
    
    //时钟
    var doci1 = document.getElementById("ceeb7b5b4in1").value;
    var doci2 = document.getElementById("ceeb7b5b4in2").value;
    localStorage.cecok1= doci1 ;
    localStorage.cecok2= doci2 ;
    if ($("#ceeb7b5b1tg1").is(':checked')) {
        /*document.getElementById("cescr1").innerHTML=`
        <script>
        startTime()
        function startTime(){
            var today=new Date();
            var h=today.getHours();
            var m=today.getMinutes();
            var s=today.getSeconds();
            m=checkTime(m);
            s=checkTime(s);
            document.getElementById('ceeb7b4a1').innerHTML=h+":"+m+":"+s;
            t=setTimeout(function(){startTime()},200);
        }
        function checkTime(i){
            if (i<10){
                i="0" + i;
            }
            return i
        }
        </script>
        `;*/
        startTime();
		/*document.getElementById("ceeb7b5b4in1").disabled=false;
		document.getElementById("ceeb7b5b4in2").disabled=false;*/
		
	}
	else {
	    //document.getElementById("cescr1").innerHTML="";
	    window.clearTimeout(ttt);
	    document.getElementById("ceeb7b4a1").innerHTML="时钟已被禁用";
	    /*document.getElementById("ceeb7b5b4in1").disabled=true;
		document.getElementById("ceeb7b5b4in2").disabled=true;
	    //document.getElementById("2").innerHTML="OFF";*/
	}
	
	//end//
    
    
    //******//
    setTimeout(function() {
        window.clearInterval(cestin1var1);
        setTimeout(function() {
        document.getElementById("ceeb7b5bu1d1d1").setAttribute("class","dd1 tr1 posi4");
        document.getElementById("ceeb7b5bu1d1d2").setAttribute("class","dd2 tr1 posi4");
        document.getElementById("ceeb7b5bu1d1d3").setAttribute("class","dd3 tr1 posi4");
        setTimeout(function() {
        document.getElementById("ceeb7b5bu1d1d4").style.display="block";
        document.getElementById("ceeb7b5bu1d1d4").setAttribute("class","dd4 posi5");
        document.getElementById("ceeb7b5bu1d1d1").style.display="none";
        document.getElementById("ceeb7b5bu1d1d2").style.display="none";
        document.getElementById("ceeb7b5bu1d1d3").style.display="none";
        setTimeout(function() {
        document.getElementById("ceeb7b5bu1d2").style.display="block";
        document.getElementById("ceeb7b5bu1d1d4").setAttribute("class","dd4 posi5 posi5-2");
        document.getElementById("ceeb7b5bu1a1").style.display="block";
        document.getElementById("ceeb7b5bu1a1").setAttribute("class","aa1 i2r2");
        setTimeout(function() {
        
        document.getElementById("ceeb7b5bu1d2").setAttribute("class","d2 trr1");
        document.getElementById("ceeb7b5bu1a1").setAttribute("class","aa1 trr1 i2r2");
        /*document.getElementById("ceeb7b5bu1a1").setAttribute("class","aa1 trr1");
        document.getElementById("ceeb7b5bu1a1").setAttribute("class","aa1 trr1 i2r1");
        
        document.getElementById("ceeb7b5bu1a1").setAttribute("class","aa1 trr1");*/
        document.getElementById("ceeb7b5bu1a1").setAttribute("class","aa1 trr1");
        document.getElementById("ceeb7b5bu1d2").setAttribute("class","d2 trr1 i2r2");
        //document.getElementById("ceeb7b5bu1d2").style.display="none";
        setTimeout(function() {
        document.getElementById("ceeb7b5bu1").setAttribute("class","ebbbb6 ac");
        document.getElementById("ceeb7b5bu1d1").style.display="none";
        document.getElementById("ceeb7b5bu1d2").style.display="none";
        document.getElementById("ceeb7b5bu1d1").setAttribute("class","d1");
        document.getElementById("ceeb7b5bu1d1d1").setAttribute("class","dd1");
        document.getElementById("ceeb7b5bu1d1d2").setAttribute("class","dd2");
        document.getElementById("ceeb7b5bu1d1d3").setAttribute("class","dd3");
        document.getElementById("ceeb7b5bu1d1d4").setAttribute("class","dd4");
        document.getElementById("ceeb7b5bu1a1").setAttribute("class","aa1");
        document.getElementById("ceeb7b5bu1d2").setAttribute("class","d2");
        document.getElementById("ceeb7b5bu1d1d1").style.display="block";
        document.getElementById("ceeb7b5bu1d1d2").style.display="block";
        document.getElementById("ceeb7b5bu1d1d3").style.display="block";
        document.getElementById("ceeb7b5bu1d1d4").style.display="block";
        document.getElementById("ceeb7b5bu1").setAttribute("onclick","cestin1()");
        
        },200);
        },1000);
        },300);
        },200);
    },600);
    
    },600);
}
function cestin1g1() {
    var i = 0;
    cestin1var1 = setInterval(function() {
        if(i < 100000000000000000000000) {
            i++
            document.getElementById("ceeb7b5bu1d1d1").setAttribute("class","dd1 posi1");
            document.getElementById("ceeb7b5bu1d1d3").setAttribute("class","dd3 posi3");
            setTimeout(function() {
                document.getElementById("ceeb7b5bu1d1d1").setAttribute("class","dd1");
                document.getElementById("ceeb7b5bu1d1d3").setAttribute("class","dd3");
            },600);
            
            setTimeout(function() {
                document.getElementById("ceeb7b5bu1d1d2").setAttribute("class","dd2 posi2");
                setTimeout(function() {
                document.getElementById("ceeb7b5bu1d1d2").setAttribute("class","dd2");
            },600);
            },500);
        }
    }, 1200);
}



function ceaut1() {
    var i = 0;
    setInterval(function() {
        if(i < 100000000000000000000000) {
            i++;
            var dv = document.getElementById("cevr1").value;
            var dv2 = document.getElementById("cevr2").value;
            var dv3 = document.getElementById("cevr3").value;
            var dv4 = document.getElementById("cevr4").value;
            if ( dv3 == 1 ) {
                document.getElementById("ceeb7b1").disabled=true;
            }
            else if ( dv2 == 1 ) {
                document.getElementById("ceeb7b1").disabled=true;
            }
            else if ( dv2 == 0 ) {
                document.getElementById("ceeb7b1").disabled=false;
            }
            
            if ( dv4 == 1 ) {
                document.getElementById("ceeb7b2").disabled=true;
                //document.getElementById("ceeb7b7").disabled=true;
            }
            else if ( dv4 == 0 ) {
                document.getElementById("ceeb7b2").disabled=false;
                //document.getElementById("ceeb7b7").disabled=false;
            }
            
            
            if ( dv == 0 ) {
                document.getElementById("ceeb7b1").value="开门";
                document.getElementById("ceeb7b1").setAttribute("onclick","cedropen()");
            }
            else if ( dv == 1 ) {
                document.getElementById("ceeb7b1").value="关门";
                document.getElementById("ceeb7b1").setAttribute("onclick","cedrclose()");
            }
            
             
            /*setTimeout(function(){
                document.getElementById("doscu").style.display="none";
            },200);*/
        }
    }, 50);
}

function ceaut2() {
    var i = 0;
    setInterval(function() {
        if(i < 100000000000000000000000) {
            i++;
            var dv = document.getElementById("cevr1").value;
            var dv2 = document.getElementById("cevr2").value;
            
            if ( dv2 == 1 ) {
                document.getElementById("ceeb7b3").setAttribute("class","ebbb3");
                setTimeout(function(){
                    document.getElementById("ceeb7b3").setAttribute("class","ebbb3 ebbb3-on");
                },100);
            }
            else if ( dv == 0 ) {
                document.getElementById("ceeb7b3").setAttribute("class","ebbb3");
            }
            else if ( dv == 1 ) {
                document.getElementById("ceeb7b3").setAttribute("class","ebbb3 ebbb3-on");
            }
            
        }
    }, 200);
}

function ceaut3() {
    var i = 0;
    setInterval(function() {
        if(i < 100000000000000000000000) {
            i++;
            var time = document.getElementById("ceeb7b4a1").innerText;
            var ts = "016:25:30";
            var ts2 = "016:26:00";
            var ttm1 = "8:00:00";
            var ttm2 = "9:00:00";
            var ttm3 = "10:00:00";
            var ttm4 = "11:00:00";
            var ttm5 = "12:00:00";
            var ttm6 = "13:00:00";
            var ttm7 = "14:00:00";
            var ttm8 = "17:00:00";
            var ttm9 = "18:00:00";
            var ttm10 = "19:00:00";
            var ttm11 = "20:00:00";
            var ttm12 = "21:00:00";
            
            if ( time == ts ) {
                ceaut3g2();
            }
            else if ( time == ts2 ) {
                ceaut3g2();
            }
            else if ( time == ttm1 ) {
                ceaut3g2();
            }
            else if ( time == ttm2 ) {
                ceaut3g2();
            }
            else if ( time == ttm3 ) {
                ceaut3g2();
            }
            else if ( time == ttm4 ) {
                ceaut3g2();
            }
            else if ( time == ttm5 ) {
                ceaut3g2();
            }
            else if ( time == ttm6 ) {
                ceaut3g2();
            }
            else if ( time == ttm7 ) {
                ceaut3g2();
            }
            else if ( time == ttm8 ) {
                ceaut3g2();
            }
            else if ( time == ttm9 ) {
                ceaut3g2();
            }
            else if ( time == ttm10 ) {
                ceaut3g2();
            }
            else if ( time == ttm11 ) {
                ceaut3g2();
            }
            else if ( time == ttm12 ) {
                ceaut3g2();
            }
        }
    }, 200);
}
function ceaut3g2() {
    //document.getElementById("timeals").load();
    document.getElementById("timeals").play();
    setTimeout(function(){
        document.getElementById("timeals").load();
    },26000);
}


function cettt() {

$("#ceeb7b5b3tg1").on('click', function(){
	var inp = $("#ceeb7b5b4 input");
	/*var u = document.getElementById("ceeb7b5b3tg1");
	u.disabled=true;*/
	if ($("#ceeb7b5b3tg1").is(':checked')) {
		document.getElementById("ceeb7b5b4in1").disabled=false;
		document.getElementById("ceeb7b5b4in2").disabled=false;
		
	}
	else {
	    document.getElementById("ceeb7b5b4in1").disabled=true;
		document.getElementById("ceeb7b5b4in2").disabled=true;
	    //document.getElementById("2").innerHTML="OFF";
	}
});

$("#ceeb7b5b2tg1").on('click', function(){
	if ($("#ceeb7b5b2tg1").is(':checked')) {
	    document.getElementById("ceeb7b5b3tg1").disabled=false;
		document.getElementById("ceeb7b5b5tg1").disabled=false;
	}
	else {
	    document.getElementById("ceeb7b5b3tg1").disabled=true;
		document.getElementById("ceeb7b5b5tg1").disabled=true;
		document.getElementById("ceeb7b5b3tg1").checked=false;
		document.getElementById("ceeb7b5b5tg1").checked=false;
	    document.getElementById("ceeb7b5b4in1").disabled=true;
		document.getElementById("ceeb7b5b4in2").disabled=true;
	}
});

$("#ceeb7b5b1tg1").on('click', function(){
	if ($("#ceeb7b5b1tg1").is(':checked')) {
	    document.getElementById("ceeb7b5b2tg1").disabled=false;
	    document.getElementById("ceeb7b5b3tg1").disabled=false;
	    document.getElementById("ceeb7b5b5tg1").disabled=false;
	    document.getElementById("ceeb7b5b2tg1").checked=true;
	}
	else {
	    document.getElementById("ceeb7b5b3tg1").disabled=true;
		document.getElementById("ceeb7b5b5tg1").disabled=true;
		document.getElementById("ceeb7b5b2tg1").disabled=true;
		document.getElementById("ceeb7b5b3tg1").checked=false;
		document.getElementById("ceeb7b5b5tg1").checked=false;
		document.getElementById("ceeb7b5b2tg1").checked=false;
	    document.getElementById("ceeb7b5b4in1").disabled=true;
		document.getElementById("ceeb7b5b4in2").disabled=true;
	}
});

}