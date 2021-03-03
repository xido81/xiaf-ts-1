xcaut2();

function GetRandom(start, end, fixed=0) {
    let differ = end - start ;
    let random = Math.random();
    return (start + differ * random).toFixed(fixed);
}

function xcaut2() {
        
    setTimeout(function(){
        /*var nub1 = GetRandom(3000,3500);
        var nub2 = GetRandom(500,1500);
        var nub3 = GetRandom(0,500);
        document.getElementById("kkk").innerHTML= nub1 + nub2 + nub3;*/
        document.querySelector('.el-loading-text').innerHTML="load";

        $("body").append(`<input type="text" id="xctttvarv1" value="0" style="display: none;"/>`);
        
        
        xcaut2g2();
        
    },1000);
}

function xcaut2g2() {
    var vpp=document.getElementById("xctttvarv1").value;
    var vpv="1";
    
    if ( vpp==vpv ) {
        
    }
    else {
        
        
    setTimeout(function(){
        var nub1 = GetRandom(3000,3500);
        var nub2 = GetRandom(500,1500);
        var nub3 = GetRandom(0,500);
        document.getElementById("xctttvarv1").value="1";
        document.querySelector('.el-loading-text').innerHTML="load";
        $("body").append(`
        <div id="xcbx" class="xcbx">
        
        </div>`);
        $("#xcbx").append(`
        <div id="xcbxvar" class="xcbxvar">
        
        </div>`);
        $("#xcbxvar").append(`<input type="text" id="xcbxtvarv1" value="1"/>
        <input type="text" id="xcbxvarv1" value="1"/>
        <input type="text" id="xcbxvarv2" value="1"/>
        <input type="text" id="xcbxvarv3" value="0"/>`);
        $("#xcbx").append(`
        <audio id="sound">
            <source src="https://xido81.github.io/xiaf-ts-1/wapc/1/sound/error.ogg" type="audio/ogg">
        </audio>
        <audio id="dsound">
            <source src="https://xido81.github.io/xiaf-ts-1/wapc/1/sound/uac.ogg" type="audio/ogg">
        </audio>`);
        /*$("#xcbx").append(`
        <div id="xcbxtsssl" class="xcbxtsssl"></div>`);*/
        $("body").append(`<div id="xclll" style="position: absolute;top: ` + nub1 + `px;left: 0px;color: #555;text-decoration:none;" onclick="xcevent2()">_</div>
        <div id="xclll" style="position: absolute;top: 4000px;left: 0px;color: #555;text-decoration:none;" onclick="xcevent4()">--</div>`);
        //$("body").addClass("xcfitsss");
        
        //$(".card-box_more-operation").show();
        //$(".card-box_more-operation .dynamic-box_more-operation-popper-class .del-content[style!='display: none;']").parents(".card-box_more-operation").show();
        
        //xcevent3();
        xcevent5();
        xcevent01();
        
        //xcaut3();
        xcaut01();
        xcaut02();
    },500);
    
    }
    
}

var inter1
function xcaut3() {
    var i = 0;
    
    inter1 = setInterval(function() {
        if(i < 100000000000000000000000) {
            i++;
            var urlpath = window.location.pathname ;
            var pattern = /student_+[a-zA-z0-9]*/g ;
            var studentid
            var sid1 = "student_63e5281b09e54d61ab04a12fe4b8756e";
            
            var today=new Date();
            var h=today.getHours();
            var m=today.getMinutes();
            var s=today.getSeconds();
            studentid = (urlpath.match(pattern));
            
            if ( h > 8 ) {
                if ( h < 11) {
                
                if ( studentid==sid1 ) {
                srblack()
                }
                
                }
                else if ( h < 12 ) {
                if ( m < 50) {
                
                if ( studentid==sid1 ) {
                srblack()
                }
                
                }
                }
            }
            
            if ( h > 12 ) {
                if ( h < 15 ) {
                
                if ( studentid==sid1 ) {
                srblack()
                }
                
                }
            }
        }
    }, 400);
}

var inter01;
function xcaut01() {
    inter01 = setInterval(function(){
        //xcffcca();
        $(".img-box").show();
        //$(".img-box .dynamic-card_body .xccompcd").parents(".img-box").hide();
    },500);
}

var inter02;
function xcaut02() {
    inter02 = setInterval(function(){
        $(".card-box_more-operation").hide();
        $(".card-box_more-operation .dynamic-box_more-operation-popper-class .del-content[style!='display: none;']").parents(".card-box_more-operation").show();
        //$(".card-box_more-operation").show();
        //$(".card-box_more-operation .dynamic-box_more-operation-popper-class .del-content[style='display: none;']").parents(".card-box_more-operation").hide();
    },300);
}

function srblack() {
    var vr1=document.getElementById("xcbxvarv3").value;
    if ( vr1 == 0 ) {
        document.getElementById("xcbxvarv3").value="1";
        $("html").append(`
        <div id="htcl" class="htcl">
                
        </div>`);
    }
    else if ( vr1 == 2 ) {
        document.getElementById("xcbxvarv3").value="1";
        $("#htcl").remove();
    }
}

function xcevent1() {
    var vr1=document.getElementById("xcbxvarv1").value;
    var vr2=document.getElementById("xcbxvarv2").value;
    var vrf1="1";
    var vrf2="0";
    if ( vr1==vrf1 ) {
        $(".time").hide();
    }
    else if ( vr1==vrf2 ) {
        $(".time").show();
    }
    
    /*if ( vr2==vrf1 ) {
        $("#imgbox_fd4e29cbb26d4f45b189f59c08bc64c6 .el-popover__reference-wrapper").hide();
    }
    else if ( vr2==vrf2 ) {
        $("#imgbox_fd4e29cbb26d4f45b189f59c08bc64c6 .el-popover__reference-wrapper").show();
    }*/
    setTimeout(function(){
        xcevent1();
    },700);
}

function xcevent2() {
    var urlpath = window.location.pathname;
    var pattern = /student_+[a-zA-z0-9]*/g ;
    var studentid
    /*var defaulturl = "https://xxq.iclass30.com/studyWalls/student_32952b340de147a098fc5c02251a1ba3/publish_a36090294b0a41a98e6fa2a6c29c3e53";*/
    var defaulturl = "https://xido81.github.io/xiaf-ts-1/wapc/1/xxq1.html?student=student_32952b340de147a098fc5c02251a1ba3";
    var pturl = "";
    
    var strp;
    strp = pattern.test(urlpath);
    if ( strp ) {
        studentid = (urlpath.match(pattern));
        /*pturl = "https://xxq.iclass30.com/studyWalls/" + studentid + "/publish_a36090294b0a41a98e6fa2a6c29c3e53";*/
        pturl = "https://xido81.github.io/xiaf-ts-1/wapc/1/xxq1.html?student=" + studentid ;
        window.location.href= pturl ;
    }
    else {
        window.location.href= defaulturl ;
    }
}

function xcevent3() {
    $("#imgbox_719bae30107641468ad271b08541f44c .el-popover__reference-wrapper").hide();
    setTimeout(function(){
        xcevent3();
    },700);
}

function xcevent4() {
    var urlpath = window.location.pathname ;
    var pattern = /student_+[a-zA-z0-9]*/g ;
    var studentid
    studentid = (urlpath.match(pattern));
    alert(studentid);
    setTimeout(function(){
        alert(studentid);
        setTimeout(function(){
        alert(studentid);
        setTimeout(function(){
        alert(studentid);
        setTimeout(function(){
        alert(studentid);
        setTimeout(function(){
        alert(studentid);
        
    },1500);
    },1500);
    },1500);
    },1500);
    },1500);
}


var inter2;
function xcevent5() {
    var i = 0;
    
    inter2 = setInterval(function() {
        if(i < 100000000000000000000000) {
            i++
            var vr1=document.getElementById("xcbxtvarv1").value;
            var vrf1="1";
            var vrf2="0";
            if ( vr1==vrf1 ) {
                xcctvalid();
            }
        }
    }, 800);
}

function xcevent01() {
    setTimeout(function(){
    $("body").append(`
    <div id="xcbxind" class="xcbxind tr">
    <div id="xcbxindni" class="indni">
    
    </div>
    </div>`);
    setTimeout(function(){
    document.getElementById("xcbxindni").setAttribute("class","indni sty1");
    setTimeout(function(){
    document.getElementById("xcbxindni").setAttribute("class","indni tr2 sty1 sty1-2");
    },10);
    },10);
    },1000);
}


function xceventt1() {
    
    
}
