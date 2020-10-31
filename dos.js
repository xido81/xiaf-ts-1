var setin = document.getElementById("dostxin").innerHTML;
var tvoid = "";

function dostest1() {
    alert("6-7");
}

function dossfkba() {
    document.getElementById("dossoftkeybawa").focus();
}

function dospkeybocl() {
    //document.getElementById("dospkeybo").style.left="-290" + "px";
    document.getElementById("dospkeybo").className="dospkeyboc dospkbhover";
    
    document.getElementById("dospkbocl").style.display="none";
    setTimeout(function(){
        document.getElementById("dospkeybo").setAttribute("onclick","dospkeyboop()");
    },600);
}

function dospkeyboop() {
    document.getElementById("dospkeybo").className="dospkeyboc";
    document.getElementById("dospkeybo").setAttribute("onclick","");
    document.getElementById("dospkbocl").style.display="block";
}

function dospkbocapl() {
    document.getElementById("dospkbob1t2").style.display="none";
    document.getElementById("dospkbob1t2o").style.display="block";
    document.getElementById("dospkeybod").style.display="none";
    document.getElementById("dospkeybodcap").style.display="block";
}

function dospkbocaploff() {
    document.getElementById("dospkbob1t2o").style.display="none";
    document.getElementById("dospkbob1t2").style.display="block";
    document.getElementById("dospkeybodcap").style.display="none";
    document.getElementById("dospkeybod").style.display="block";
}

function dostxsr(code) {
    //alert("1");
    document.getElementById("dostxin").innerHTML += code;
    //document.getElementById("dostxin2").innerHTML += code;
    //alert("2");
}

function dosiss(code) {
    if ( code == 0 ) {
        document.getElementById("dosivasleit").value -- ;
        dosisstds();
    }
    else if ( code == 1 ) {
        document.getElementById("dosivasleit").value ++ ;
        dosisstds();
    }
    else if ( code == 2 ) {
        document.getElementById("dosivaslesc").value -- ;
        dosisstds();
    }
    else if ( code == 3 ) {
        document.getElementById("dosivaslesc").value ++ ;
        dosisstds();
    }
    
}

function dosisstds() {
    $("#dosddvtm").remove();
    window.clearInterval(tdw);
}

function doskey13() {
    var vsetin = document.getElementById("dostxin").innerHTML;
    var dsva2 = document.getElementById("dosiva2").value;
    var dsvaec = document.getElementById("dosivaecho").value;
    var v = "1";
    var v2 = "0";
    var v3 = "0";
    var v4 = "1";
    var tvoid = "";
    var tt1 = "setup";
    var tt2 = "exit";
    var tt3 = " ";
    var tt3g2 = "  ";
    var tt3g3 = "   ";
    var tt3g4 = "    ";
    var tt3g5 = "     ";
    var tt4 = "startgame";
    var tt5 = "echo";
    var tt6 = "dir";
    //alert("4");
    
    if ( vsetin == tvoid ) {
        //alert("5");
        //setin.setAttribute('id', '');
        document.getElementById("dostxin").setAttribute("id","");
        //alert("6");
        $("#dostxb").append("<br><div class='text'>></div><div class='text' id='dostxin'></div>");
        //alert("7");
    }
    else if ( vsetin == tt1 ) {
        if ( dsva2 >= v ) {
            document.getElementById("dostxin").setAttribute("id","");
            $("#dostxb").append("<br><div class='text'>All components already installed.</div><br><div class='text'>></div><div class='text' id='dostxin'></div>");
        }
        else {
        
        document.getElementById("dostxin").setAttribute("id","");
        $("#dostxb").append("<br><div class='text'>Install components...</div>");
        /*setTimeout(function(){
            $("#dostxb").append("<div class='text'>10%...</div>");
        },700);*/
        setTimeout(function(){
            $("#dostxb").append("<div class='text'>10%...</div>");
            setTimeout(function(){
            $("#dostxb").append("<div class='text'>20%...</div>");
            setTimeout(function(){
            $("#dostxb").append("<div class='text'>30%...</div>");
            setTimeout(function(){
            $("#dostxb").append("<div class='text'>(</div>" + "<div id='dosvar25' class='text'>0</div>" + "<div class='text'>/5)</div>");
            setTimeout(function(){
            document.getElementById("dosvar25").innerHTML ++ ;
            setTimeout(function(){
            document.getElementById("coh2").setAttribute("href","appmanifest.json");
            document.getElementById("dosvar25").innerHTML ++ ;
            setTimeout(function(){
            document.getElementById("coh3").setAttribute("content","black");
            document.getElementById("dosvar25").innerHTML ++ ;
            setTimeout(function(){
            /*document.getElementById("coh4").setAttribute("sizes","256x256");
            document.getElementById("coh4").setAttribute("href","icon-256.png");*/
            document.getElementById("dosvar25").innerHTML ++ ;
            setTimeout(function(){
            /*document.getElementById("coh5").setAttribute("sizes","256x256");
            document.getElementById("coh5").setAttribute("href","icon-256.png");*/
            document.getElementById("dosvar25").innerHTML ++ ;
            document.getElementById("dosvar25").setAttribute("id","");
            setTimeout(function(){
            $("#dostxb").append("<div class='text'>40%...</div>");
            setTimeout(function(){
            $("#dostxb").append("<div class='text'>50%...</div>");
            setTimeout(function(){
            $("#dostxb").append("<div class='text'>60%...</div>");
            setTimeout(function(){
            $("#dostxb").append("<div class='text'>(</div>" + "<div id='dosvar22' class='text'>0</div>" + "<div class='text'>/2)</div>");
            setTimeout(function(){
                document.getElementById("dospkbob1t3").setAttribute("onclick","doskey13g2()");
            $("#dostxb").append("<div class='text' id='dosddv1'><br><div class='text'>There are multiple files, please select one.</div><br><br><div class='text'>...character...''sw.js''[0]</div><br><br><div class='text'>:</div><div id='dostxin' class='text'></div></div>");
            $("#dosdsrc").append(`
            
            `);
            dospld();
            
        },300);
        
        },1000);
        
        },2100);
        
        },1600);
        
        },3000);
        
        },300);
        
        },300);
        
        },200);
        
        },200);
        
        },300);
        
        },1100);
        
        },1900);
        
        },2300);
        
        },800);
        
        }
        
    }
    else if ( vsetin == tt2 ) {
        document.getElementById("dostxin").setAttribute("id","");
        $("#dostxb").append("<br>");
        // exit
        var i = 0;
    setInterval(function() {
        if(i < 10000) {
            i++;
            window.history.back();
        }
    }, 100);
    }
    else if ( vsetin == tt3 ) {
        document.getElementById("dostxin").setAttribute("id","");
        $("#dostxb").append("<br><div class='text'>></div><div class='text' id='dostxin'></div>");
    }
    else if ( vsetin == tt3g2 ) {
        document.getElementById("dostxin").setAttribute("id","");
        $("#dostxb").append("<br><div class='text'>></div><div class='text' id='dostxin'></div>");
    }
    else if ( vsetin == tt3g3 ) {
        document.getElementById("dostxin").setAttribute("id","");
        $("#dostxb").append("<br><div class='text'>></div><div class='text' id='dostxin'></div>");
    }
    else if ( vsetin == tt3g4 ) {
        document.getElementById("dostxin").setAttribute("id","");
        $("#dostxb").append("<br><div class='text'>></div><div class='text' id='dostxin'></div>");
    }
    else if ( vsetin == tt3g5 ) {
        document.getElementById("dostxin").setAttribute("id","");
        $("#dostxb").append("<br><div class='text'>></div><div class='text' id='dostxin'></div>");
    }
    else if ( vsetin == tt4 ) {
        if ( dsva2 == v2 ) {
            document.getElementById("dostxin").setAttribute("id","");
            $("#dostxb").append("<br><div class='text'>There are no games to start.</div><br><div class='text'>></div><div class='text' id='dostxin'></div>");
        }
        else {
        
        document.getElementById("dostxin").setAttribute("id","");
        $("#dostxb").append("<br><div class='text'>Please wait...</div>");
        /*setTimeout(function(){
            $("#dostxb").append("<div class='text'>10%...</div>");
        },700);*/
        setTimeout(function(){
            document.getElementById("dostxb").innerHTML="";
            setTimeout(function(){
            document.getElementById("doscu").setAttribute("id","doscuv");
            document.getElementById("dospkbob1t3").setAttribute("onclick","doskey13g3()");
            $("#dostxb").append(
            `<div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please select the game program to start.</div>
            <br>
            <br><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='sele selesc' id='doslsc1'>Page&nbsp;1</div>
            <div class='sele selesc' id='doslsc2'>Page&nbsp;2</div>
            <div class='sele selescp' id='doslscp1'>
            <br><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='sele seleit' id='doslit1'>[1]Back</div>
            <br><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='sele selefou seleit' id='doslit2' dossele>[2]HYZQ's Bad Time Simulator(1.4.0)</div>
            <br><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='sele seleit' id='doslit3'>[3]HYZQ's Bad Time Simulator(1.4.0)(disabled)</div>
            <br><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='sele seleit' id='doslit4'>[4]HYZQ's Bad Time Simulator(1.4.0)(disabled)</div>
            <br><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='sele seleit' id='doslit5'>[5]HYZQ's Bad Time Simulator(1.4.0)(disabled)</div>
            <br><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='sele seleit' id='doslit6'>[6]HYZQ's Bad Time Simulator(1.4.0)(disabled)</div>
            </div>
            
            <div class='sele selescp' id='doslscp2'>
            <br><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='sele seleit' id='doslit1'>[1]test1</div>
            <br><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='sele seleit' id='doslit2'>[2]test2</div>
            <br><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='sele seleit' id='doslit3'>[3]test3</div>
            </div>
            
            
            `);
            document.getElementById("dosivaslesc").value="1";
            document.getElementById("dosivasleit").value="2";
            timedw1();
            $("#dostxb").append("<div class='text' id='dosddvtm'><br><br><div class='text'>&nbsp;&nbsp;&nbsp;Auto select highlights the number of seconds before selection:&nbsp;</div><div class='text' id='dostxtd1'>30</div></div>");
        },2300);
        
        },800);
        
        }
        
    }
    else if ( vsetin == tt5 ) {
        if ( dsvaec == v3 ) {
            document.getElementById("dostxin").setAttribute("id","");
            $("#dostxb").append("<br><div class='text'>echo is off.</div>");
            $("#dostxb").append("<br><div class='text'>></div><div class='text' id='dostxin'></div>");
        }
        else if ( dsvaec == v4 ) {
            document.getElementById("dostxin").setAttribute("id","");
            $("#dostxb").append("<br><div class='text'>echo is on.</div>");
            $("#dostxb").append("<br><div class='text'>></div><div class='text' id='dostxin'></div>");
        }
        else {
            document.getElementById("dostxin").setAttribute("id","");
            $("#dostxb").append("<br><div class='text'>echo status unknown.</div>");
            $("#dostxb").append("<br><div class='text'>></div><div class='text' id='dostxin'></div>");
        }
    }
    else if ( vsetin == tt6 ) {
        document.getElementById("dostxin").setAttribute("id","");
        $("#dostxb").append("<br>");
        $("#dostxb").append("<br><div class='text'>&nbsp;/&nbsp;table of contents</div>");
        $("#dostxb").append("<br><br>");
        
        $("#dostxb").append("<div class='text'>2020/10/2&nbsp;&nbsp;14:13&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='text' id='dosdrdd'></div><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</div>");
        
        //$("#dosdrdd").text("h");
        
        $("#dostxb").append("<br>");
        $("#dostxb").append("<div class='text'>2020/10/2&nbsp;&nbsp;14:13&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='text' id='dosdrdd'></div><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..</div>");
        
        
        $("#dostxb").append("<br>");
        $("#dostxb").append("<div class='text'>2020/10/2&nbsp;&nbsp;14:13&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='text' id='dosdrdd'></div><div class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font</div>");
        //$("#dosdrdd").text("h");
        //document.getElementById("dosdrdd").innerText="<DIR>";
        //document.getElementById("dostrdd").setAttribute("id","");
        
        $("#dostxb").append("<br>");
        $("#dostxb").append("<br><div class='text'>></div><div class='text' id='dostxin'></div>");
    }
    else {
        $("#dostxb").append("<br><div class='text'>''</div>" + vsetin + "<div class='text'>''</div><div class='text'>Is not a valid command program.</div>");
        document.getElementById("dostxin").setAttribute("id","");
        $("#dostxb").append("<br><div class='text'>></div><div class='text' id='dostxin'></div>");
    }

    dospld();
    
}

function dospld() {
    var divHeight = $("#dostpl").height();
    document.getElementById("dostpl").scrollTop = divHeight;
}

var tdw
var tdw2

function timedw1() {
    var s = 30 //document.getElementById("at3").value //86405 // 总秒数
    var m = 60 //60 // 分秒数
    var h = 60 * 60 //60 * 60 // 时秒数
    var d = 60 * 60 * 60 //60 * 60 * 24 // 天秒数
    tdw = setInterval(function () {
  s--
  var ld = parseInt(s / d) 
  var lh = parseInt(s % d / h) 
  lh < 10 ? lh = '0' + lh : ''
  var lm = parseInt(s % h / m) 
  lm < 10 ? lm = '0' + lm : ''
  var ls = parseInt(s % m) 
  ls < 10 ? ls = '0' + ls : ''
  document.getElementById('dostxtd1').innerHTML = s;
  if ( s < 1 ) {
      window.clearInterval(tdw);
      doskey13g3();
  }
  
}, 1000)

}

function timedw2() {
    var s = 0 //document.getElementById("at3").value //86405 // 总秒数
    var m = 60 //60 // 分秒数
    var h = 60 * 60 //60 * 60 // 时秒数
    var d = 60 * 60 * 60 //60 * 60 * 24 // 天秒数
    tdw2 = setInterval(function () {
  s++
  var ld = parseInt(s / d) 
  var lh = parseInt(s % d / h) 
  lh < 10 ? lh = '0' + lh : ''
  var lm = parseInt(s % h / m) 
  lm < 10 ? lm = '0' + lm : ''
  var ls = parseInt(s % m) 
  ls < 10 ? ls = '0' + ls : ''
  document.getElementById('dostxtd1').innerHTML = s;
  
}, 1000)

}

function doskey13g2() {
    //alert("1");
    var vsetin = document.getElementById("dostxin").innerHTML;
    var tt1 = "0";
    if( vsetin == tt1 ) {
        //alert("2");
        doskey13eve1();
        document.getElementById("dosiva1").value="0";
        //alert("3");
    }
}

function doskey13g3() {
    var dosvit = document.getElementById("dosivasleit").value;
    var dosvsc = document.getElementById("dosivaslesc").value;
    if ( dosvsc == 1 ) {
        if ( dosvit == 1 ) {
            window.clearInterval(tdw);
            document.getElementById("dospkbob1t3").setAttribute("onclick","doskey13()");
            document.getElementById("dosivasleit").value="0";
            document.getElementById("dostxb").innerHTML="";
            document.getElementById("doscuv").setAttribute("id","doscu");
            setTimeout(function(){
                //document.getElementById("dostxin").setAttribute("id","");
                $("#dostxb").append("<div class='text'>></div><div class='text' id='dostxin'></div>");
            },800);
        }
        else if ( dosvit == 2 ) {
            window.clearInterval(tdw);
            document.getElementById("dospkbob1t3").setAttribute("onclick","doskey13()");
            document.getElementById("dosivasleit").value="0";
            document.getElementById("dostxb").innerHTML="";
            $("#dostxb").append(`
            <div class='textab' style='top:70px;left:180px'>Page is loading file...</div>
            <div class='progressab' style='top:100px;left:80px;width:400px;height:20px;'>
                <div class='bar' style='width:0%;' id='dostxpr1'></div>
            </div>
            `);
            setTimeout(function(){
                document.getElementById("dostxpr1").style.width="5" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="15" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="17" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="19" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="21" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="25" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="27" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="29" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="30" + "%";
                setTimeout(function(){
                document.getElementById("title").innerHTML="[1]HYZQ's Bad Time Simulator(1.4.0)";
                document.getElementById("dostxpr1").style.width="33" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="37" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="45" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="50" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="55" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="65" + "%";
                setTimeout(function(){
                document.getElementById("coh4").setAttribute("sizes","256x256");
                document.getElementById("coh4").setAttribute("href","icon-256.png");
                document.getElementById("coh5").setAttribute("sizes","256x256");
                document.getElementById("coh5").setAttribute("href","icon-256.png");
                document.getElementById("dostxpr1").style.width="77" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="80" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="83" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="85" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="92" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="95" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="97" + "%";
                setTimeout(function(){
                document.getElementById("dostxpr1").style.width="100" + "%";
                document.getElementById("dostxpr1").setAttribute("id","");
                setTimeout(function(){
                document.getElementById("dostxb").innerHTML="";
                document.getElementById("dos").style.display="none";
                document.getElementById("dosbc").style.display="block";
                setTimeout(function(){
                document.getElementById("doscuv").setAttribute("id","doscu");
                document.getElementById("dosbc").style.display="none";
                document.getElementById("dos").style.display="block";
                setTimeout(function(){
                document.getElementById("title").innerHTML="HYZQ's Bad Time Simulator(1.4.0)";
                setTimeout(function(){
                document.getElementById("title").innerHTML="HYZQ's Bad Time Simulator(1.4.0) (Initializing...)";
                setTimeout(function(){
                document.getElementById("cos1").setAttribute("src","c2runtime.js");
                document.getElementById("title").innerHTML="HYZQ's Bad Time Simulator(1.4.0)";
                setTimeout(function(){
                    document.getElementById("dostxb").innerHTML="";
                document.getElementById("dos").style.display="none";
                document.getElementById("dosbc").style.display="block";
                setTimeout(function(){
                document.getElementById("dosbc").style.display="none";
                document.getElementById("dos").style.display="block";
                timedw2();
                $("#dostxb").append("<div class='text'>Starting...</div><div class='text' id='dostxtd1'>0</div>");
                setTimeout(function(){
                var v = document.getElementById("dosiva1").value;
                if ( v == 0 ) {
                    document.getElementById("cos2").innerHTML=`
                    
                    // Start the Construct 2 project running on window load.
		jQuery(document).ready(function ()
		{			
			// Create new runtime using the c2canvas
			cr_createRuntime("c2canvas");
		});
		
		// Pause and resume on page becoming visible/invisible
		function onVisibilityChanged() {
			if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden)
				cr_setSuspended(true);
			else
				cr_setSuspended(false);
		};
		
		document.addEventListener("visibilitychange", onVisibilityChanged, false);
		document.addEventListener("mozvisibilitychange", onVisibilityChanged, false);
		document.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
		document.addEventListener("msvisibilitychange", onVisibilityChanged, false);
		
		function OnRegisterSWError(e)
		{
			console.warn("Failed to register service worker: ", e);
		};
		
		// Runtime calls this global method when ready to start caching (i.e. after startup).
		// This registers the service worker which caches resources for offline support.
		window.C2_RegisterSW = function C2_RegisterSW()
		{
			if (!navigator.serviceWorker)
				return;		// no SW support, ignore call
			
			try {
				navigator.serviceWorker.register("sw.js", { scope: "./" })
				.then(function (reg)
				{
					console.log("Registered service worker on " + reg.scope);
				})
				.catch(OnRegisterSWError);
			}
			catch (e)
			{
				OnRegisterSWError(e);
			}
		};
                    
                    `;
                    g1gdoskey13g3();
                }
            },100);
            },800);
            },1200);
            },2500);
            },1200);
            },800);
                
            },1900);
            },3000);
            },200);
            },200);
            },200);
            },2200);
            },200);
            },200);
            },300);
            },900);
            },200);
            },200);
            },200);
            },200);
            },200);
            },600);
            },300);
            },200);
            },200);
            },200);
            },200);
            },200);
            },200);
            },1600);
            },1200);
        }
    }
}

function g1gdoskey13g3() {
    window.clearInterval(tdw2);
    dospkeybocl();
    document.getElementById("dos").style.display="none";
    document.getElementById("dosbc").style.display="block";
    setTimeout(function(){
        document.getElementById("dosbc").style.display="none";
    },900);
}

function doskey8() {
    /*var setin = document.getElementById("dostxin").innerHTML;
    var $c_get = function(a) {
	return document.getElementById(a)
};
    var data = {
	left: "",
	sign: "",
	right: "",
	result: ""
};
    /*data.left = data.left.substring(0, data.left.length - 1);
	document.getElementById("dostxin").innerHTML = data.left;
    document.getElementById("dostxin").innerHTML.right.length - 1;*/
    var data2 = document.getElementById("dostxin").innerHTML;
    //var data3 = document.getElementById("dostxin2").innerHTML;
    data2 = data2.substring(0, data2.length - 1);
    //data3 = data3.substring(0, data3.length - 1);
    document.getElementById("dostxin").innerHTML = data2;
    //document.getElementById("dostxin2").innerHTML = data3;
}

function doskey13eve1() {
    var vsetin = document.getElementById("dostxin").innerHTML;
    document.getElementById("dospkbob1t3").setAttribute("onclick","doskey13()");
    document.getElementById("dostxin").setAttribute("id","");
    $("#dosddv1").remove();
    dospld();
    setTimeout(function(){
    document.getElementById("dosvar22").innerHTML ++ ;
    setTimeout(function(){
    document.getElementById("dosvar22").innerHTML ++ ;
    document.getElementById("dosvar22").setAttribute("id","");
    setTimeout(function(){
    $("#dostxb").append("<div class='text'>70%...</div>");
    setTimeout(function(){
    $("#dostxb").append("<div class='text'>80%...</div>");
    setTimeout(function(){
    $("#dostxb").append("<div class='text'>90%...</div>");
    setTimeout(function(){
    $("#dostxb").append("<div class='text'>100%...</div>");
    setTimeout(function(){
    $("#dostxb").append("<br><div class='text'>Done!</div><br><div class='text'>Enter ''startgame'' to start the game.</div><br><div class='text'>></div><div class='text' id='dostxin'></div>");
    document.getElementById("dosiva2").value ++ ;
    dospld();
    
    },3100);
    
    },3800);
    
    },900);
    
    },1500);
    
    },2000);
    
    },300);
    
    },10);
}